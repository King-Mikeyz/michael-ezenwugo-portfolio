import { GoogleGenAI } from "@google/genai";
import { getPortfolioContext } from "@/lib/portfolio-context";

function cleanAIAnswer(text = "") {
  return text
    // Remove bold and italic Markdown
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")

    // Remove Markdown headings
    .replace(/^#{1,6}\s*/gm, "")

    // Remove code formatting
    .replace(/`{1,3}/g, "")

    // Remove Markdown bullet symbols
    .replace(/^\s*[-+•]\s+/gm, "")

    // Remove numbered list prefixes such as 1. or 1)
    .replace(/^\s*\d+[.)]\s+/gm, "")

    // Replace em dashes and en dashes
    .replace(/\s*[—–]\s*/g, ", ")

    // Remove accidental duplicate commas
    .replace(/,\s*,/g, ", ")

    // Remove trailing spaces from lines
    .replace(/[ \t]+$/gm, "")

    // Prevent excessive blank lines
    .replace(/\n{3,}/g, "\n\n")

    .trim();
}

export async function POST(request) {
  try {
    const body = await request.json();

    const question = body.question?.trim();

    if (!question) {
      return Response.json(
        {
          error: "Please ask a question.",
        },
        {
          status: 400,
        }
      );
    }

    if (question.length > 500) {
      return Response.json(
        {
          error: "Please keep your question under 500 characters.",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("Gemini API key is missing.");
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",

      input: question,

      system_instruction: getPortfolioContext(),

      generation_config: {
        temperature: 0.3,
        thinking_level: "low",
      },
    });

    const rawAnswer =
      interaction.output_text ??
      interaction.outputText ??
      "I couldn't generate an answer right now.";

    const answer = cleanAIAnswer(rawAnswer);

    return Response.json({
      answer,
    });
  } catch (error) {
    console.error("AI portfolio error:", error);

    return Response.json(
      {
        error: "The AI assistant is unavailable right now.",
      },
      {
        status: 500,
      }
    );
  }
}
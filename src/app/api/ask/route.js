import { GoogleGenAI } from "@google/genai";
import { getPortfolioContext } from "@/lib/portfolio-context";

export async function POST(request) {
  try {
    const body = await request.json();

    const question = body.question?.trim();

    if (!question) {
      return Response.json(
        { error: "Please ask a question." },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return Response.json(
        { error: "Please keep your question under 500 characters." },
        { status: 400 }
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
        temperature: 0.35,
        thinking_level: "low",
      },
    });

    const answer =
      interaction.output_text ??
      interaction.outputText ??
      "I couldn't generate an answer right now.";

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
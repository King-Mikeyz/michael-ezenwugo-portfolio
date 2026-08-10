import { createSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim() || null;
    const message = body.message?.trim();
    const website = body.website?.trim();

    // Honeypot field for simple bot protection.
    if (website) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 200 || message.length > 3000) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
      });

    if (error) {
      console.error("Supabase contact error:", error);

      return Response.json(
        { error: "Unable to save your message right now." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message received.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Simple response logic
    let response = "I'm sorry, I don't understand that yet.";

    if (
      message.toLowerCase().includes("hello") ||
      message.toLowerCase().includes("hi")
    ) {
      response = "Hello! How can I help you today?";
    } else if (
      message.toLowerCase().includes("price") ||
      message.toLowerCase().includes("cost")
    ) {
      response =
        "Our homes start at $1,250,000. Would you like to know more about specific properties?";
    } else if (
      message.toLowerCase().includes("contact") ||
      message.toLowerCase().includes("reach")
    ) {
      response =
        "You can contact us through our contact form at /contact or call us at (123) 456-7890.";
    } else if (
      message.toLowerCase().includes("location") ||
      message.toLowerCase().includes("where")
    ) {
      response =
        "We have properties in several communities including Waterford Estates and Langdon. Would you like to know more about a specific community?";
    } else if (message.toLowerCase().includes("thank")) {
      response = "You're welcome! Is there anything else I can help you with?";
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}

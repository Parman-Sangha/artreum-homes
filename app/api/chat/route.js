import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Azure Bot Service configuration
    const azureBotEndpoint = process.env.AZURE_BOT_ENDPOINT;
    const azureBotSecret = process.env.AZURE_BOT_SECRET;

    if (!azureBotEndpoint || !azureBotSecret) {
      throw new Error("Azure Bot configuration missing");
    }

    // Call Azure Bot Service
    const response = await fetch(azureBotEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${azureBotSecret}`,
      },
      body: JSON.stringify({
        message: message,
        // Add any additional context or parameters needed by your Azure Bot
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from Azure Bot");
    }

    const data = await response.json();

    return NextResponse.json({ response: data.message });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}

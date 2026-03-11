import { NextResponse } from 'next/server';

// This is a mock webhook receiver for WhatsApp Business API
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Verify webhook signature (omitted for MVP)
    // 2. Extract tenant ID from URL or payload
    // 3. Process incoming message or status update
    
    console.log('Received WhatsApp Webhook:', JSON.stringify(body, null, 2));

    // Example logic:
    // if (body.entry?.[0]?.changes?.[0]?.value?.messages) {
    //   // Handle incoming message
    //   // e.g., trigger flow, save to DB, send auto-reply
    // } else if (body.entry?.[0]?.changes?.[0]?.value?.statuses) {
    //   // Handle message status (sent, delivered, read)
    // }

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Verification endpoint for WhatsApp webhook setup
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      return new NextResponse(challenge, { status: 200 });
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  return new NextResponse('Bad Request', { status: 400 });
}

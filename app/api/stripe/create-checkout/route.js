import { NextResponse } from "next/server";
import { createCheckout } from "@/libs/stripe";

// This function is used to create a Stripe Checkout Session
// It's called by the <ButtonCheckout /> component
// By default, it doesn't require user to be authenticated. If you want to auth users, check this page: https://shipfa.st/docs/tutorials/api-call
export async function POST(req) {
  const body = await req.json();

  if (!body.priceId) {
    return NextResponse.json(
      { error: "Price ID is required" },
      { status: 400 }
    );
  } else if (!body.successUrl || !body.cancelUrl) {
    return NextResponse.json(
      { error: "Success and cancel URLs are required" },
      { status: 400 }
    );
  }

  try {
    const { coupon, successUrl, cancelUrl, priceId } = body;

    const stripeSessionURL = await createCheckout({
      successUrl,
      cancelUrl,
      coupon,
      priceId,
      // If you proceed checkout with logged in users, you can use this to identify the user later in the stripe webhook
      // clientReferenceID: user._id.toString(),
    });

    return NextResponse.json({ url: stripeSessionURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

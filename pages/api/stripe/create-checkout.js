import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { createCheckout } from "@/libs/stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

// This function is used to create a Stripe Checkout Session
// It's called by the <ButtonCheckout /> component
// It forces user to be authenticated but you can remove all the auth logic if you want (if (session) {} | if (!user) {}, etc...)
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    await connectMongo();

    const { id } = session.user;
    const { method, body } = req;

    switch (method) {
      case "POST": {
        if (!body.priceId) {
          return res.status(404).send({ error: "Need a Price ID for Stripe" });
        } else if (!body.successUrl || !body.cancelUrl) {
          return res
            .status(404)
            .send({ error: "Need valid success/failure URL to return to" });
        }

        try {
          const user = await User.findById(id);

          if (!user) {
            return res.status(404).json({ error: "User doesnt exists" });
          }

          const { coupon, successUrl, cancelUrl } = body;

          const stripeSessionURL = await createCheckout({
            successUrl,
            cancelUrl,
            clientReferenceID: user._id.toString(),
            priceId: body.priceId,
            coupon,
          });

          return res.status(200).json({ url: stripeSessionURL });
        } catch (e) {
          console.error(e);
          return res.status(500).json({ error: e?.message });
        }
      }

      default:
        res.status(404).json({ error: "Unknow request type" });
    }
  } else {
    // Not Signed in
    res.status(401).end();
  }
}

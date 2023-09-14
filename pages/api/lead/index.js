import connectMongo from "@/libs/mongoose";
import Lead from "@/models/Lead";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK
export default async function handler(req, res) {
  await connectMongo();

  const { method, body } = req;

  switch (method) {
    case "POST": {
      if (!body.email) {
        return res.status(404).send({ error: "Need an email" });
      }

      try {
        const lead = await Lead.findOne({ email: body.email });

        if (!lead) {
          await Lead.create({ email: body.email });

          // Here you can add your own logic
          // For instance, sending a welcome email (use the the sendEmail helper function from /libs/mailgun)
        }

        return res.status(200).json({});
      } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e?.message });
      }
    }

    default:
      res.status(404).json({ error: "Unknow request type" });
  }
}

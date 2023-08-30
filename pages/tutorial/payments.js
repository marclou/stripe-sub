import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Payments — Ship Fast ⚡️</h1>

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/tutorial" className="items-center flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                  />
                </svg>
                Tutorial
              </Link>
            </li>
            <li>Stripe Payments</li>
          </ul>
        </div>
      </section>

      <section>
        <p className="text-sm opacity-80 mb-6">
          You don&apos;t have to use Stripe, but you&apos;ll need a merchant
          account for accepting payments.
        </p>
        <div className="mb-2">
          <span className="badge badge-neutral">Setup</span>
        </div>
        <ul className="list-inside list-decimal space-y-5 leading-relaxed">
          {[
            <span key={1}>
              Create a new account on{" "}
              <a href="https://stripe.com/" className="link" target="_blank">
                Stripe
              </a>{" "}
              and activate payments (boring, I know.. see you in a bit!)
            </span>,
            "In your [Settings], [Public Details], add your website URL",
            "In your [Settings], [Branding], add your logo & colors",
            "In your [Settings], [Customer Emails], turn on emails for successful payments & refunds",
            "In your [Settings], [Customer Portal], activate link to customer portal (in case you need later)",
            "In your [Payments], [Fraud & Risk], [Rules], make sure the firsrt 3DS rule is enabled. I also turn on the second one (recommended). Make sure to block payments if CVV fails (check below)",
            "In your [Developers], copy your public & private keys and add them to STRIPE_SECRET_KEY & STRIPE_PUBLIC_KEY in .env.local & in your prod deployment",
            "In your [Developers], [Webhook], [Add Enpoint]. Set your domain + /api/webhooks/stripe. Select [checkout.session.completed] event (or more if needed). Copy the signing secret and add it to STRIPE_WEBHOOK_SECRET in .env.local & in your prod deployment",
            "To use Stripe in dev, turn on [Test Mode] on Stripe, and repeat the 2 steps above with your test keys & webhook secret (follow the Stripe tutorial to install the CLI)",
            "(optional) in [Balance], [Manage Payouts], set a specific date of the month to receive your payouts (I use the 10th of each month)",
          ].map((step, i) => (
            <li key={i} className="list-item">
              {step}
            </li>
          ))}
        </ul>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="text-xl font-bold mb-4">Example: Create Checkout</h2>
        <p className="leading-relaxed">
          From the fron-end, use the apiClient (/libs/api.js) to POST our API at
          /stripe/create-checkout with the priceId & success/cancel URLs
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Stripe webhooks</h2>
        <p className="leading-relaxed">
          Our API listens to Stripe selected webhooks events & update the user
          accordingly. The /api/webhooks/stripe endpoint is where you do the
          business logic (add user to a plan, add credits, send email with paid
          e-books etc.)
        </p>
      </section>
    </main>
  );
}

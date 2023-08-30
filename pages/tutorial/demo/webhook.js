import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { toast } from "react-hot-toast";

const reactComponent = `import { createCheckout } from "@/libs/stripe";
  import config from "@/config";

  const { url } = await createCheckout({
    user: session.user,
    clientReferenceID: session.user.id,
    successUrl: window.location.href,
    cancelUrl: window.location.href,
    priceId: config.stripe.plans[0].priceId,
    couponId: null,
  });`;

export default function Home() {
  const copy = () => {
    navigator.clipboard.writeText(reactComponent);
    toast.success("Copied to clipboard");
  };

  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Webhooks — Ship Fast ⚡️</h1>

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/tutorial#code" className="items-center flex gap-1">
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
                Code templates
              </Link>
            </li>
            <li>Webhooks</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="opacity-80 leading-relaxed mb-8 space-y-4">
          <p className="">There are 2 webhooks already set up for you:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Stripe: Listen to the most common events like{" "}
              <i>checkout.session.completed</i>. And your business logic
              accordingly (i.e. turn true the hasAccess boolean to let user
              access a specific ressource)
            </li>
            <li>
              Mailgun: Receive emails and forward them.{" "}
              <Link href="/tutorial/emails" className="link">
                Read more here
              </Link>
              .
            </li>
          </ul>
          <p className="">
            Find the webhooks in the /pages/api/webhooks folder.
          </p>
        </div>
      </section>
    </main>
  );
}

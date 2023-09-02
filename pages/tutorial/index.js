import Link from "next/link";

const Tutorial = () => {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-12 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ship Fast ⚡️
        </h1>
        <p className="opacity-80 md:text-lg mb-8">
          Follow along to get your app up & running in minutes.{" "}
        </p>
        <Link
          href={`/tutorial/important`}
          className="p-4 -mx-4 rounded-lg hover:bg-base-200 duration-200 flex justify-between items-center gap-2 group"
        >
          <div>
            <h2 className="flex items-center gap-2 font-bold md:text-lg md:mb-1">
              👋&nbsp;&nbsp;&nbsp;Get started{" "}
              <span className="badge badge-sm font-medium badge-warning ml-2">
                Must-read
              </span>
            </h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:translate-x-0.5 duration-200"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </section>

      <div className="divider"></div>

      <section>
        <h3 className="text-2xl md:text-3xl font-bold mb-4" id="tuto">
          Tutorials
        </h3>
        <p className="text-base-content/80 mb-8">Only set up what you need. </p>
        <div className="space-y-4">
          {[
            {
              name: "MongoDB",
              href: "/tutorial/mongodb-atlas",
              emoji: "📦",
            },
            {
              name: "Mailgun",
              href: "/tutorial/emails",
              emoji: "📧",
            },
            {
              name: "API",
              href: "/tutorial/api",
              emoji: "📡",
            },
            {
              name: "Stripe",
              href: "/tutorial/payments",
              emoji: "💳",
            },
            {
              name: "Google login",
              href: "/tutorial/login-with-google",
              optional: true,
              emoji: "🔑",
            },
            {
              name: "Email login",
              href: "/tutorial/login-with-email",
              optional: true,
              emoji: "🔑",
            },
            {
              name: "Customer support",
              href: "/tutorial/errors-support",
              optional: true,
              emoji: "🛟",
            },
            {
              name: "SEO",
              href: "/tutorial/seo",
              emoji: "🔍",
            },
            {
              name: "Analytics",
              href: "/tutorial/analytics",
              emoji: "📈",
            },
            {
              name: "Extras",
              href: "/tutorial/extra",
              emoji: "🍒",
            },
          ].map((tutorial, i) => (
            <Link
              key={tutorial.name}
              href={tutorial.href}
              className="p-4 -mx-4 rounded-lg hover:bg-base-200 duration-200 flex justify-between items-center gap-2 group"
            >
              <div>
                <h2 className="font-bold md:text-lg md:mb-1">
                  {tutorial.emoji}&nbsp;&nbsp;&nbsp;{tutorial.name}{" "}
                </h2>
                <p className="opacity-80 text-sm md:text-base">
                  {tutorial.description}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 group-hover:translate-x-0.5 duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h3 className="text-2xl md:text-3xl font-bold mb-4" id="code">
          Code templates
        </h3>
        <p className="text-base-content/80 mb-8">
          Copy/paste the code to build your app faster.
        </p>
        <div className="space-y-4">
          {[
            {
              name: "Components & animations",
              href: "style",
              emoji: "🎨",
              description: "Buttons, popovers, modals, etc.",
            },
            {
              name: "Libraries",
              href: "libs",
              emoji: "📚",
              description: "Stripe, Mailgun, Mongoose, OpenAI and more",
            },
            {
              name: "Webhooks",
              href: "webhook",
              emoji: "🪝",
              description:
                "Update users after Stripe checkout, forward emails you receive, etc.",
            },
            {
              name: "Static page",
              href: "homepage",
              emoji: "🏠",
              description: "Landing page, pricing, etc.",
            },
            {
              name: "Private page",
              href: "dashboard",
              emoji: "🔒",
              description: "User dashboard or account, for logged in users",
            },
            {
              name: "API route",
              href: "api-route",
              emoji: "📡",
              description: "API routes to fetch data from the client",
            },
          ].map((tutorial, i) => (
            <Link
              key={tutorial.name}
              href={`/tutorial/demo/${tutorial.href}`}
              className="p-4 -mx-4 rounded-lg hover:bg-base-200 duration-200 flex justify-between items-center gap-2 group"
            >
              <div>
                <h2 className="font-bold md:text-lg md:mb-1">
                  {tutorial.emoji}&nbsp;&nbsp;&nbsp;{tutorial.name}{" "}
                </h2>
                <p className="opacity-80 text-sm md:text-base">
                  {tutorial.description}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 group-hover:translate-x-0.5 duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      <div className="divider"></div>
      <section className="space-y-4 text-base-content/80 leading-relaxed">
        <h3 className="text-xl text-base-content font-bold">
          Ready to ship? 🚀
        </h3>
        <p>
          Make sure your .env variables are set in prod when you deploy!
          Congrats for making it this far 🙌
        </p>
        <p>
          Build something awesome, and{" "}
          <a
            href="https://twitter.com/marc_louvion"
            target="_blank"
            className="link"
          >
            tell me about it
          </a>{" "}
          on Twitter! 🔥
        </p>

        <p>— Marc</p>

        <p>
          PS: Want to showcase your startups? Create your{" "}
          <a
            href="https://indiepa.ge?ref=shipfast_tuto"
            className="link"
            target="_blank"
          >
            Indie Page
          </a>{" "}
          and share your entrepreneurial journey. Join 2,702 founders ⭐️
        </p>
      </section>
    </main>
  );
};

export default Tutorial;

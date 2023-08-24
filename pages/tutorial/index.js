import Link from "next/link";

const Tutorial = () => {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-5">Tutorials — Ship Fast ⚡️</h1>
        <p className="opacity-80">
          Get started and launch your app asap. You can delete the whole
          /tutorial folder once you&apos;re ready.
        </p>
      </section>

      <section className="space-y-4">
        {[
          {
            name: "Get started",
            href: "/tutorial/important",
            emoji: "👋",
          },
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
            name: "Style & Components",
            href: "/tutorial/style",
            emoji: "🎨",
          },
          {
            name: "Extra",
            href: "/tutorial/extra",
            emoji: "🥐",
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
                {/* {tutorial.optional && (
                  <span className="badge badge-sm font-normal ml-1">
                    optional
                  </span>
                )} */}
                {i === 0 && (
                  <span className="badge badge-sm font-medium badge-warning ml-2">
                    Must-read
                  </span>
                )}
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
      </section>
      <div className="divider"></div>
      <section className="space-y-5">
        <h3 className="text-lg font-bold">Try the signup/logout flow</h3>
        <p className="text-base-content/80">
          Find the code in the /tutorial/demo folder to get inspired and{" "}
          <span className="font-medium text-base-content">
            build your app fast ⚡️
          </span>
        </p>
        <Link className="btn" href="/tutorial/demo">
          Start App Demo
        </Link>
      </section>

      <div className="divider"></div>
      <section>
        <p>
          What do you think about this tutorial?{" "}
          <a
            href="https://twitter.com/marc_louvion"
            target="_blank"
            className="link"
          >
            Send me
          </a>{" "}
          your feedback on Twitter :)
        </p>
        <br />
        <p>— Marc</p>
      </section>
    </main>
  );
};

export default Tutorial;

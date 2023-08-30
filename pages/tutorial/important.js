import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Get Started — Ship Fast ⚡️</h1>

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
            <li>Important</li>
          </ul>
        </div>
      </section>

      <section className="space-y-16">
        <p className="leading-relaxed">
          Hey it&apos;s Marc 👋 <br />
          <br />
          At the end of this tutorial, you will have a fully functional app,
          able to login/logout users, accept payments, make API calls, send
          emails, and more.
          <br />
          <br />
          If there&apos;s anything, you can reach out on{" "}
          <a
            href="https://twitter.com/marc_louvion"
            target="_blank"
            className="link"
          >
            Twitter
          </a>
          . Let&apos;s build that startup, FAST ⚡️
        </p>

        <div>
          <h2 className="text-xl font-bold mb-4">Project structure</h2>

          <div className="opacity-80 leading-relaxed mb-4">
            It&apos;s a typical NextJS project:
          </div>
          <ul className="space-y-4 opacity-80 leading-relaxed">
            {[
              "/pages for your pages (1 file = 1 page)",
              "/pages/api for API calls (1 file = 1 API endpoint)",
              "/components for React compoents you reuse accross pages",
              "/libs for external libraries functions, like mongoDB, Stripe, Mailgun",
              "/models where your mongoose models live",
              "/hooks custom React hooks to simplify your life",
            ].map((a, i) => (
              <li key={i} className="flex gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M3.75 3A1.75 1.75 0 002 4.75v3.26a3.235 3.235 0 011.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM3.75 9A1.75 1.75 0 002 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-4.5A1.75 1.75 0 0016.25 9H3.75z" />
                </svg>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">The config.js file</h2>

          <p className="text-base-content/80 leading-relaxed">
            It is where you configure your app.{" "}
            <span className="text-base-content font-medium">
              Each key is documented
            </span>{" "}
            to know how and why it&apos;s used.
            <br />
            Have a thorough look at it: it is the backbone of the app.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">The .env file</h2>

          <p className="opacity-80 leading-relaxed">
            Copy the file <span className="text-base-content font-medium">.env.example</span> and rename it to <span className="text-base-content font-medium">.env.local</span> for development and <span className="text-base-content font-medium">.env</span> in production.
            Please note that you should not commit those to GitHub.
            <br />
            File content should look like this.
          </p>

          <pre className="whitespace-pre-wrap select-all p-4 rounded-lg bg-base-300 text-sm mt-2">
            {`NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
EMAIL_SERVER=
MAILGUN_API_KEY=
MONGODB_URI=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=`}
          </pre>
        </div>

        <p>
          Now go ahead and follow the{" "}
          <Link className="link" href="/tutorial#tuto">
            tutorials
          </Link>{" "}
          one-by-one.
          <br />
          <br />
          Ship it! 🚀
        </p>
      </section>
    </main>
  );
}

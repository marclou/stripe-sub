import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">API — Ship Fast ⚡️</h1>

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
            <li>API & Authentification</li>
          </ul>
        </div>
      </section>

      <section className="leading-relaxed space-y-5">
        <h2 className="font-bold text-xl">API calls</h2>
        <p>
          Our front-end uses the apiClient (see /libs/api.js) to communicate
          with our back-end (NextJS /api)
        </p>
        <p>
          The front-end client handles errors gracefully: show error toasts,
          redirects on login if err 401, etc..
        </p>
        <p>
          The back-end should send back a JSON response with a message key if an
          error occurs, like this:
        </p>
        <pre className="max-w-full whitespace-pre-wrap bg-base-200 p-4 rounded-lg text-sm">{`return res.status(500).json({
  error: "Something went wrong",
});`}</pre>

        <h2 className="font-bold text-xl pt-8">Authentification</h2>

        <p>
          We use{" "}
          <a href="https://next-auth.js.org/" target="_blank" className="link">
            Next-Auth
          </a>{" "}
          to login users and make authentificated calls to our back-end.
        </p>
        <p>
          Here are the tutorials to set up{" "}
          <Link href="/tutorial/login-with-google" className="link">
            Google Login
          </Link>{" "}
          and{" "}
          <Link href="/tutorial/login-with-email" className="link">
            Email Login
          </Link>
          . You can use next-auth to add any other Oauth provider.
        </p>

        <h2 className="font-bold text-xl pt-8">
          Private routes (i.e. user account)
        </h2>

        <p>
          If you add the hook usePrivate() to any page, it will redirect to the
          login page if the user is not logged in.
        </p>
        <p>
          Check the code examples to do it on the{" "}
          <Link href="/tutorial/demo/dashboard" className="link">
            front-end
          </Link>{" "}
          (private page) &{" "}
          <Link href="/tutorial/demo/api-route" className="link">
            back-end
          </Link>{" "}
          (private route)
        </p>
      </section>
    </main>
  );
}

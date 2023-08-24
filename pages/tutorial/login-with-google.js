import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">
          Login with Google — Ship Fast ⚡️
        </h1>

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
            <li>Google Login</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-2">
          <span className="badge badge-neutral">Setup</span>
        </div>

        <ul className="list-inside list-decimal space-y-5 leading-relaxed">
          {[
            <span key={1}>
              Create a new project on{" "}
              <a
                href="https://console.cloud.google.com/"
                className="link"
                target="_blank"
              >
                Google Cloud
              </a>
            </span>,
            <span key={2}>Go to APIs & Services then Credentials</span>,
            <span key={3}>Click [Configure Consent Screen]</span>,
            <span key={4}>
              Fill info. Use the ChatGPT prompt in pages /tos & /privacy-policy
              to generate yours automatically.
              <br />
              Add userinfo.email & userinfo.profile to scope.
              <br />
              Add yourself as a test user.
              <br />
              Submit.
            </span>,
            <span key={5}>
              Go to Credentials and click [+ Create Credentials] then [Oauth
              Client ID]
            </span>,
            <span key={6}>
              Choose [Web Application].
              <br />
              Add http://localhost:3000 and https://your-site.com to Authorized
              JavaScript origins.
              <br />
              Add http://localhost:3000/api/auth/callback/google and
              https://your-site.com/api/auth/callback/google to Authorized
              redirect URIs.
              <br />
              Click [Create]
            </span>,
            <span key={7}>
              Copy paste the Client ID (GOOGLE_ID) and Client Secret
              (GOOGLE_SECRET) to .env.local.
            </span>,
            <span key={7}>
              Go to [Oauth Consent Screen] and click [Publish App] then submit
              for verification
              <br />
              Google will email you and you will{" "}
              <b>have to reply to start the process</b>. You&apos;ll need to
              have your domain verified with{" "}
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                className="link"
              >
                Google Search Console
              </a>
              . You can go ahead and do that now.
              <br />
              You can already login with Google on localhost. On production, it
              will work too but show a warning until you&apos;re verified (takes
              a few days).
            </span>,
          ].map((step, i) => (
            <li key={i} className="list-item">
              {step}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

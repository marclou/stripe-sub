import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Errors — Ship Fast ⚡️</h1>

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
            <li>Errors & Support</li>
          </ul>
        </div>
      </section>

      <section className="leading-relaxed space-y-5">
        <p>
          The project comes with 404 and 500 error pages. Also, most Javascript
          errors are handled in the{" "}
          <pre className="inline">&lt;ErrorBoundary&gt;</pre> high-level
          component.
        </p>
        <p>
          When an error occurs, users can reach out support through the{" "}
          <pre className="inline">&lt;ButtonSupport&gt;</pre> component.{" "}
        </p>
        <p>
          By default, it will open the Crisp customer chat support (if crisp.id
          is present in config.js)
        </p>
        <p>
          If not, it will open the user mail client (mailto:) and let them them
          an email to your email support (mailgun.supportEmail in config.js)
        </p>
      </section>
    </main>
  );
}

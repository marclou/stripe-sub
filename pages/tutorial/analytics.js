import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Anaytics — Ship Fast ⚡️</h1>

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
            <li>Anaytics</li>
          </ul>
        </div>
      </section>

      <section className="leading-relaxed">
        <p className="mb-5 ">
          I use{" "}
          <a href="https://plausible.io/sites" target="_blank" className="link">
            Plausible
          </a>{" "}
          for traffic & events analytics. If you want to use another tool,
          remove the Plausible script tag in the _document.js file.
        </p>

        <div className="mb-2">
          <span className="badge badge-neutral">Setup</span>
        </div>
        <ul className="list-inside list-decimal space-y-5">
          {[
            <span key={1}>
              Create a new site on{" "}
              <a
                href="https://plausible.io/sites"
                className="link"
                target="_blank"
              >
                Plausible
              </a>
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

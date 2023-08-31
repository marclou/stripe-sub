import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { toast } from "react-hot-toast";

const nextConfigComp = `async rewrites() {
    return [
      {
        source: "/plausible/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/plausible/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
}`;

const documentComp = `<script
    defer
    data-domain="YOUR_DOMAIN"
    data-api="/plausible/api/event"
    src="/plausible/js/script.js"
  ></script>`;

export default function Home() {
  const copy = (comp) => {
    navigator.clipboard.writeText(comp);
    toast.success("Copied to clipboard");
  };

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
            <span key={2}>
              (optional) Some adblockers block Plausible. To fix this, proxy the
              script through the nextjs /api.
              <br />
              First add this to next.config.js:
              <div className="mockup-code text-sm my-2">
                <p className="absolute top-4 left-24 text-neutral-content opacity-80">
                  next.config.js
                </p>
                <button
                  className="absolute top-2 right-4 btn btn-sm btn-square "
                  onClick={() => copy(nextConfigComp)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                  </svg>
                </button>

                <SyntaxHighlighter language="javascript" style={a11yDark}>
                  {nextConfigComp}
                </SyntaxHighlighter>
              </div>
              Then replace the Plausible script in the _document.js file with
              this:
              <div className="mockup-code text-sm my-2">
                <p className="absolute top-4 left-24 text-neutral-content opacity-80">
                  _document.js
                </p>
                <button
                  className="absolute top-2 right-4 btn btn-sm btn-square "
                  onClick={() => copy(documentComp)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                  </svg>
                </button>

                <SyntaxHighlighter language="javascript" style={a11yDark}>
                  {documentComp}
                </SyntaxHighlighter>
              </div>
            </span>,
          ].map((step, i) => (
            <li key={i} className="list-item">
              {step}
            </li>
          ))}
        </ul>

        <div className="divider"></div>

        <p className="mb-5 ">
          I use Plausible for traffic analytics & custom events. If you want to
          use another tool, remove the Plausible script tag in the _document.js
          file.
        </p>
      </section>
    </main>
  );
}

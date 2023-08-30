// eslint-disable-next-line @next/next/no-img-element
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Extras — Ship Fast ⚡️</h1>

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
            <li>Extras</li>
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
              Create your site favicon with this free{" "}
              <a
                href="https://realfavicongenerator.net/"
                className="link"
                target="_blank"
              >
                Favicon Generator
              </a>
              . Download the zip file and extract it in the /public folder. The
              _document.js file will automatically add the favicon (and other
              icons) to your site.
            </span>,
            <span key={2}>
              Create a rectangle logo with your name like this one.
              <span className="block p-2">
                <img
                  src={`https://shipfa.st/logoAndName.png`}
                  alt="ShipFast logo with name"
                  width={100}
                />
              </span>
              Name it logoWithName.png and add it to the /public folder.
              Next-Auth will automatically add it to your login pages (see
              [...nextauth].js).
            </span>,
            <span key={3}>
              Delete the content inside the /public folder + delete the
              /tutorial folder
            </span>,
            <span key={4}>npm uninstall react-syntax-highlighter</span>,
            <span key={5}>
              Use the ChatGPT script in /tos & /privacy-policy pages to generate
              yours quickly! (not bulletproof, but it works for a quick start)
            </span>,
          ].map((step, i) => (
            <li key={i} className="list-item">
              {step}
            </li>
          ))}
        </ul>
      </section>
      <div className="divider"></div>
      <section>
        <ul className="list-inside list-disc space-y-5 leading-relaxed">
          {[
            <span key={12}>
              If you need SVG illustrations, you can use{" "}
              <a
                href="https://undraw.co/search"
                className="link"
                target="_blank"
              >
                Undraw
              </a>
            </span>,
            <span key={2312}>
              If you need icons, you can use{" "}
              <a href="https://heroicons.com/" className="link" target="_blank">
                Heroicons
              </a>
            </span>,
            <span key={2323412}>
              If you need SVG blobs, you can use{" "}
              <a
                href="https://app.haikei.app/"
                className="link"
                target="_blank"
              >
                Haikei
              </a>
            </span>,
            <span key={26412}>
              If you need Tailwind Snippets , you can use{" "}
              <a
                href="https://snippets.alexandru.so/"
                className="link"
                target="_blank"
              >
                Snippets
              </a>
            </span>,
            <span key={3412}>
              If you need Notion-like icons, you can use{" "}
              <a
                href="https://www.overflow.design/ni.html?ref=producthunt"
                className="link"
                target="_blank"
              >
                Overflow
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

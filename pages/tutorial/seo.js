import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">SEO — Ship Fast ⚡️</h1>

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
            <li>SEO</li>
          </ul>
        </div>
      </section>

      <section className="text-base-content/80 leading-relaxed space-y-5">
        <div className="mb-2">
          <span className="badge badge-neutral">Setup</span>
        </div>

        <p>
          1. Open the <pre className="inline">&lt;TagSEO&gt;</pre> component and
          add your default values (title, descrition, etc..) <br />
          <br />
          2. Add the <pre className="inline">&lt;TagSEO&gt;</pre> component to
          each new pages your create and populate with the right values (title,
          descrition, canonicalSlug—at least)
          <br />
          <br />
          3. When relevant, add the{" "}
          <pre className="inline">&lt;TagSchema&gt;</pre> component to your
          pages/components. It helps Google understand better your website and
          can get you a rich snippet. Open the component for more documentation.
          <br />
          <br />
          4. Add your root URL to siteUrl (i.e. https://yourdomain.com) in the
          next-sitemap.config.js file, in the root folder. It will generate a
          sitemap.xml & robots.txt file for all your pages.
        </p>

        <div className="divider"></div>

        <p>
          The _document.js file has the most basic SEO tags (applied to all
          pages)
        </p>

        <p>
          When you create a new page, add the component{" "}
          <pre className="inline">&lt;TagSEO&gt;</pre> to get all your SEO
          metatags in place and rank well on Google.
        </p>

        <pre className="whitespace-pre-wrap select-all p-4 rounded-lg bg-base-300 text-sm text-base-content">
          {`return (<>

  <TagSEO 
    title="Short React Tutorial for Beginners | ReactTutorial"
    canonicalSlug="/tutorial"
  />

  <main>
    <h1>Tutorial</h1>
  </main>

</>)`}
        </pre>
      </section>
    </main>
  );
}

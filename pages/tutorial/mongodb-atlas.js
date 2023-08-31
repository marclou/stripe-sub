import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">MongoDB — Ship Fast ⚡️</h1>

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
            <li>MongoDB</li>
          </ul>
        </div>
      </section>

      <section>
        <p className="text-sm opacity-80 mb-6">
          You don&apos;t have to use MongoDB, but you&apos;ll need a database
          for saving users who log in, products, orders, etc...
        </p>
        <div className="mb-2">
          <span className="badge badge-neutral">Setup</span>
        </div>
        <ul className="list-inside list-decimal space-y-5 leading-relaxed">
          {[
            <span key={1}>
              Create a new project and deploy a cluster on{" "}
              <a
                href="https://cloud.mongodb.com/"
                target="_blank"
                className="link"
              >
                MongoDB Atlas
              </a>
            </span>,
            "Add you connection string to MONGODB_URI in .env.local & in your prod deployment",
            "Tip: Run a local database for your dev setup so you can work offline and it's faster",
          ].map((step, i) => (
            <li key={i} className="list-item">
              {step}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl mb-4">Mongoose (optional)</h2>

        <div className="leading-relaxed">
          Mongoose makes it easier to deal with MongoDB and has some cool
          features.
          <br />
          Models are defined in the folder /models. Add any new models there.
          <br />
          The plugin toJSON is added to all models to remove the _id and __v
          (easier on front-end). Also if you add{" "}
          <pre className="inline bg-base-300 px-1">private: true</pre> to any
          field it will be removed from the response. I.e. make email private so
          it&apos;s not sent to the front-end.
        </div>
      </section>
    </main>
  );
}

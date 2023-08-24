import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Emails — Ship Fast ⚡️</h1>

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
            <li>Emails</li>
          </ul>
        </div>
      </section>

      <section>
        <p className="text-sm opacity-80 mb-6">
          You don&apos;t have to use Mailgun, but you&apos;ll need an email tool
          to to setup magic login links, abandoned carts emails, etc...
        </p>
        <div className="mb-2">
          <span className="badge badge-neutral">Setup</span>
        </div>
        <ul className="list-inside list-decimal space-y-5 leading-relaxed">
          {[
            <span key={1}>
              Create a new account on{" "}
              <a
                href="https://www.mailgun.com/"
                className="link"
                target="_blank"
              >
                Mailgun
              </a>
            </span>,
            "In [Sending] click [Domains] then [Add New Domain]. It's recommended to add a subdomain like mail.yourdomain.com",
            "Do all the DNS verification steps. If you use a subdomain, make sure it's reflected in your DNS records",
            <span key={12341}>
              Add extra DMARC for better deliverability:{" "}
              <p>
                TXT | dmarc.mail.yourdomain.com |{" "}
                <span className="whitespace-nowrap select-all">
                  v=DMARC1; p=none
                </span>
              </p>
            </span>,
            // <span key={43234}>
            //   Add extra SPF on naked domain if you send with a subdomain:{" "}
            //   <p>
            //     TXT | yourdomain.com |{" "}
            //     <span className="whitespace-nowrap select-all">
            //       v=spf1 include:mailgun.org ~all
            //     </span>
            //   </p>
            // </span>,
            // <span key={43234}>
            //   Add extra DKIM on naked domain if you send with a subdomain:{" "}
            //   <p>
            //     TXT | yourdomain.com |{" "}
            //     <span className="whitespace-nowrap select-all">
            //       [to generate with mailgun]
            //     </span>
            //   </p>
            // </span>,
            "Go to [Domain Settings] then [SMTP Credentials] choose [Automatic] and then [Create Passsword]",
            <span key={423321}>
              Click [Copy] at the bottom right of the modal. In .env.local, set
              EMAIL_SERVER to:
              <br />
              <span className="select-all bg-base-300/80">
                smtp://postmaster@[mail.yourdomain.com]:[copied_password]@smtp.mailgun.org:587
              </span>{" "}
              (without the brackets)
            </span>,
            <span key={21}>
              In [Sending API Keys] click [Create sending key] and add it to
              .env.local as MAILGUN_API_KEY
            </span>,
            <span key={2431}>
              (skip if do not need to receive emails) In [Receiving] click
              [Create Route].
              <br />
              Select [Match Recipient] and add the email you want to send from.
              (i.e. name@mail.yourdomain.com).{" "}
              <b>
                Make sure to match the email you set up at mailgun.supportEmail
                in the config.js file
              </b>
              .
              <br />
              Forward to{" "}
              <span className="bg-base-300/80 whitespace-nowrap select-all">
                https://your-domain.com/api/webhook/mailgun
              </span>
              . Click [Create Route].
              <br />
              Then add your receiving email (I use my gmail for instance) in
              mailgun.forwardREpliesTo in config.js.
            </span>,
            <span key={4321}>
              Tip: check your records are valid on{" "}
              <a href="https://mxtoolbox.com/" target="_blank" className="link">
                MxToolbox
              </a>{" "}
              (enter your subdomain if you used one)
            </span>,
          ].map((step, i) => (
            <li key={i} className="list-item">
              {step}
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <div className="mt-4">
          <h2 className="font-bold text-xl mb-4">Sending emails</h2>
          <p className="leading-relaxed">
            There are 2 ways to send emails:
            <br />
            1/ SMTP: Emails sent for magic login links will be sent using SMTP,
            for instance.
            <br />
            2/ Mailgun API: To send any other emails, use the sendEmai()
            function in libs/mailgun.js.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Receiving emails</h2>
          <p className="leading-relaxed">
            Mailgun doesn&apos;t forward emails automatically, nor store them.
            <br />
            So we created a route that match emails sent to our support email
            (mailgun.supportEmail in config.js) and forward them to our API
            (your-domain.com/api/webhook/mailgun) which forwards them to our
            forwardRepliesTo email in config.js.
            <br />
            It automatically adds the sender in reply-to so you can reply
            directly from your inbox.
          </p>
        </div>
      </section>
    </main>
  );
}

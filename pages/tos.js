import Link from "next/link";
import TagSEO from "@/components/TagSEO";
import config from "@/config";

const TOS = () => {
  return (
    <div className="max-w-xl mx-auto">
      <TagSEO title={`Terms and Conditions | ${config.appName}`} />

      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-medium pb-6">Terms and Conditions</h1>

        <div className="leading-relaxed">
          1. Introduction
          <br />
          By using {config.appName} you confirm your acceptance of, and agree to
          be bound by, these terms and conditions.
          <br />
          <br />
          2. Agreement to Terms and Conditions
          <br />
          This Agreement takes effect on the date on which you first use the{" "}
          {config.appName} application.
          <br />
          <br />
          3. Unlimited Access Software License with Termination Rights
          <br />
          The {config.appName} Software License facilitates the acquisition of{" "}
          {config.appName}
          software through a single purchase, granting users unrestricted and
          perpetual access to its comprehensive functionalities. Tailored for
          independent creators, entrepreneurs, and small businesses,{" "}
          {config.appName}
          empowers users to create compelling web pages and online portfolios.
          <br />
          This license entails a straightforward and flexible arrangement,
          exempting users from recurring fees or subscriptions. However, it is
          important to acknowledge that the licensor retains the right to
          terminate the license without conditions or prerequisites. This
          termination provision enables the licensor to exercise control over
          software distribution and utilization.
          <br />
          Opting for the {config.appName} Software License enables users to
          enjoy the benefits of the software while recognizing the
          licensor&apos;s unrestricted termination rights, which provide
          adaptability and address potential unforeseen circumstances.
          <br />
          <br />
          4. Refunds
          <br />
          {/* {config.appName} does not offer any refunds. If you are not satisfied with
          the results of the Artificial Intelligence, we will grant you free
          credits so you can get better results. */}
          For any reason, you can request a refund within 7 days of your
          purchase. If you are not satisfied with the product, then let us know
          and we will refund your purchase right away.
          <br />
          <br />
          5. Disclaimer
          <br />
          It is not warranted that {config.appName} will meet your requirements
          or that its operation will be uninterrupted or error free. All express
          and implied warranties or conditions not stated in this Agreement
          (including without limitation, loss of profits, loss or corruption of
          data, business interruption or loss of contracts), so far as such
          exclusion or disclaimer is permitted under the applicable law are
          excluded and expressly disclaimed. This Agreement does not affect your
          statutory rights.
          <br />
          <br />
          6. Warranties and Limitation of Liability
          <br />
          {config.appName} does not give any warranty, guarantee or other term
          as to the quality, fitness for purpose or otherwise of the software.{" "}
          {config.appName}
          shall not be liable to you by reason of any representation (unless
          fraudulent), or any implied warranty, condition or other term, or any
          duty at common law, for any loss of profit or any indirect, special or
          consequential loss, damage, costs, expenses or other claims (whether
          caused by {config.appName}&apos;s negligence or the negligence of its
          servants or agents or otherwise) which arise out of or in connection
          with the provision of any goods or services by {config.appName}.{" "}
          {config.appName} shall not be liable or deemed to be in breach of
          contract by reason of any delay in performing, or failure to perform,
          any of its obligations if the delay or failure was due to any cause
          beyond its reasonable control. Notwithstanding contrary clauses in
          this Agreement, in the event that
          {config.appName} are deemed liable to you for breach of this
          Agreement, you agree that {config.appName}&apos;s liability is limited
          to the amount actually paid by you for your services or software,
          which amount calculated in reliance upon this clause. You hereby
          release {config.appName} from any and all obligations, liabilities and
          claims in excess of this limitation.
          <br />
          <br />
          7. Responsibilities
          <br />
          {config.appName} is not responsible for what the user does with the
          user-generated content.
          <br />
          <br />
          8. General Terms and Law
          <br />
          This Agreement is governed by the laws of France. You acknowledge that
          no joint venture, partnership, employment, or agency relationship
          exists between you and {config.appName} as a result of your use of
          these services. You agree not to hold yourself out as a
          representative, agent or employee of {config.appName}. You agree that{" "}
          {config.appName} will not be liable by reason of any representation,
          act or omission to act by you.
          <br />
          <br />
          Last updated: 26 July 2023.
        </div>
      </div>
    </div>
  );
};

export default TOS;

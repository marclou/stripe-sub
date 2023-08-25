import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Link from "next/link";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

const reactComponent = `
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export default async function handler(req, res) {
  // Parse the cookies and check if user is authenticated.
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const { id } = session.user;
    const { method, body } = req;

    await connectMongo();

    switch (method) {
      case "PATCH": {
        if (!body || !body.name) {
          return res.status(404).send({
            error: "Need a user name to update",
          });
        }

        try {
          const user = await User.findById(id);

          if (!user) {
            return res.status(404).send({ error: "User not found" });
          }

          user.name = body.name;

          await user.save();

          return res.status(200).json({});
        } catch (e) {
          console.error(e?.message);
          return res.status(500).json({ error: e?.message });
        }
      }

      default:
        return res.status(404).json({ error: "Unknow request type" });
    }
  } else {
    // Not Signed in
    // apiClient (in /libs/api.js) will automatically redirect to login page
    res.status(401).end();
  }
}
`;

export default function Home() {
  const copy = () => {
    navigator.clipboard.writeText(reactComponent);
    toast.success("Copied to clipboard");
  };

  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-5">API call — Ship Fast ⚡️</h1>

        <div className="text-sm breadcrumbs mb-8">
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
            <li>API call</li>
          </ul>
        </div>
        <p className="opacity-80">
          Here&apos;s what your code would look like on NextJS /api routes.
          Example:{" "}
          <span className="whitespace-nowrap">
            PATCH /edit-name {`{`}name: &quot;Marclou&quot;{`}`}
          </span>
        </p>
      </section>

      <div className="mockup-code text-sm">
        <p className="absolute top-4 left-24 text-neutral-content opacity-80">
          /api/edit-name.js
        </p>
        <button
          className="absolute top-2 right-4 btn btn-sm btn-square "
          onClick={copy}
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
          {reactComponent}
        </SyntaxHighlighter>
      </div>
    </main>
  );
}

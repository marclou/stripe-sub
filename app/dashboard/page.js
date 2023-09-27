"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's currently set a client compoment to show the user session but you can do any logic here: fetch user data from API and display it, etc..
export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="min-h-screen p-8 pb-24">
        <section className="max-w-xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            User Dashboard
          </h1>

          <p className="text-lg leading-relaxed text-base-content/80">
            {`Welcome ${session?.user?.name}!`}
            <br />
            <br />
            {`Your email is ${session?.user?.email}`}
          </p>

          <button className="btn" onClick={() => signOut({ callbackUrl: "/" })}>
            Logout
          </button>
        </section>
      </main>
    </>
  );
}

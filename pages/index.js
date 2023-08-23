import { Bricolage_Grotesque } from "next/font/google";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${font.className}`}
    >
      <h1 className="text-3xl font-bold">Ship Fast ⚡️</h1>
    </main>
  );
}

import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      <HeaderBlog />

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}

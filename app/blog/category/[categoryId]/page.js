import { categories, articles } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import CardCategory from "../../_assets/components/CardCategory";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );

  return getSEOTags({
    title: `${category.title} | Blog by ${config.appName}`,
    description: category.description,
    canonicalUrlRelative: `/blog/category/${category.slug}`,
  });
}

export default async function Category({ params }) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );
  const articlesInCategory = articles
    .filter((article) =>
      article.categories.map((c) => c.slug).includes(category.slug)
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      <section className="mt-12 mb-24 md:mb-32 max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6 md:mb-12">
          {category.title}
        </h1>
        <p className="md:text-lg opacity-80 max-w-xl mx-auto">
          {category.description}
        </p>
      </section>

      <section className="mb-24">
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Most recent articles in {category.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {articlesInCategory.map((article) => (
            <CardArticle
              key={article.slug}
              article={article}
              tag="h3"
              showCategory={false}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Other categories you might like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((category) => (
              <CardCategory key={category.slug} category={category} tag="h3" />
            ))}
        </div>
      </section>
    </>
  );
}

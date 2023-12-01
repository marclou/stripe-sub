import Link from "next/link";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({ category, tag = "h2" }) => {
  const TitleTag = tag;

  return (
    <Link
      className="p-4 bg-base-200 text-base-content rounded-box duration-200 hover:bg-neutral hover:text-neutral-content"
      href={`/blog/category/${category.slug}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag className="md:text-lg font-medium">
        {category?.titleShort || category.title}
      </TitleTag>
    </Link>
  );
};

export default CardCategory;

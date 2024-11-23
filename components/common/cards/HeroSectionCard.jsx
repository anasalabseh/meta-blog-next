import Link from "next/link";
import { posts, users } from "@/data/posts";

/**
 * HeroSectionCard Component
 *
 * A reusable UI component that displays a prominent section on the website's homepage.
 * It features a banner image, a highlighted post, and the author's information.
 */

const HeroSectionCard = () => {
  // Retrieve the post and author data for the hero section
  const post = posts[0]; // Example post data
  const author = users[0]; // Associated user/author data

  return (
    <div className="relative rounded-xl font-work mb-24">
      {/* Hero Section Banner Image */}
      <img
        width="1216"
        height="600"
        alt="banner_image"
        src="/main/hero-section-image.png"
        className="rounded-xl"
      />

      {/* Card overlay displaying post details */}
      <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
        {/* Post tag (e.g., "Technology") */}
        <div className="w-fit text-primary-content px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4 font-medium">
          {post.tag}
        </div>

        {/* Post title with clickable link */}
        <h3>
          <Link
            href="/"
            className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
          >
            {post.title}
          </Link>
        </h3>

        {/* Author information and publish date */}
        <div className="mt-6 flex items-center gap-5">
          {/* Author avatar and name */}
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src={author.image} alt={author.name} />
              </div>
            </div>
            <h6>
              <Link
                href="/"
                className="text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {author.name}
              </Link>
            </h6>
          </div>

          {/* Post publish date */}
          <p className="text-base-content/60 text-xs md:text-base">
            {post.publishDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionCard;

import Link from "next/link";
import { users } from "@/data/posts";

/**
 * PostCard Component
 *
 * A reusable UI component used to display a post in a card format.
 * It features a post's image, tag, title, author details, and publish date.
 *
 * @property {Object} post - The post data to be displayed.
 * @property {string} post.image - The URL of the post's featured image.
 * @property {string} post.tag - The tag/category of the post (e.g., "Technology").
 * @property {string} post.title - The title of the post.
 * @property {number} post.author - The ID of the user who owns the post.
 * @property {string} post.publishDate - The date when the post was published.
 *
 * @returns {JSX.Element} - A styled card representing a single post.
 */

const PostCard = ({ post }) => {
  // Retrieve the user who owns the post
  const author = users.find((user) => user.id === post.author);

  return (
    <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work">
      {/* Post featured image */}
      <figure>
        <img
          src={post.image}
          alt={post.title}
          className="rounded-xl"
          width={360}
          height={240}
        />
      </figure>

      {/* Card body containing post details */}
      <div className="card-body py-6 px-2">
        {/* Post tag */}
        <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
          {post.tag}
        </span>

        {/* Post title with clickable link */}
        <h3>
          <Link
            href="/post-detail"
            className="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
          >
            {post.title}
          </Link>
        </h3>

        {/* Author details and publish date */}
        <div className="mt-5 flex items-center gap-5 text-base-content/60">
          {/* Author avatar and name */}
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src={author.image} alt={author.name} />
              </div>
            </div>
            <h5>
              <Link
                href="/"
                className="text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {author.name}
              </Link>
            </h5>
          </div>

          {/* Publish date */}
          <p className="text-base">{post.publishDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

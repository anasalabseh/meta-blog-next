import React from "react";
import { posts, users } from "@/data/posts"; // Importing post and user data

/**
 * PostOverlayCard Component
 *
 * This component renders a card with an image, overlay, and post details,
 * including the post title, tag, author details, and publish date.
 */
const PostOverlayCard = () => {
  // Selecting a specific post and author for demonstration
  const post = posts[4];
  const author = users[1];

  return (
    <div className="card relative font-work">
      {/* Card Image Section */}
      <figure>
        <img
          width="1216"
          height="450"
          alt={`banner_image`} // Alt text for accessibility
          src="/main/hero-section-image.png" // Source of the main card image
          className="rounded-xl" // Styling to round the corners of the image
        />
      </figure>

      {/* Card Content Section */}
      <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20">
        {/* Tag Badge */}
        <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium">
          {post.tag} {/* Displaying the tag of the post */}
        </div>

        {/* Post Title */}
        <h3>
          <a
            href="/"
            className="text-neutral-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500"
          >
            {post.title} {/* Displaying the post title */}
          </a>
        </h3>

        {/* Author and Publish Date */}
        <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
          <div className="flex items-center gap-3">
            {/* Author's Avatar */}
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src={author.image} alt={author.name} />{" "}
                {/* Author's image */}
              </div>
            </div>

            {/* Author's Name */}
            <h5>
              <a
                href="/"
                className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {author.name} {/* Displaying the author's name */}
              </a>
            </h5>
          </div>
          {/* Post Publish Date */}
          <p className="text-xs md:text-base">{post.publishDate}</p>
        </div>
      </div>

      {/* Overlay for Aesthetic Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    </div>
  );
};

export default PostOverlayCard;

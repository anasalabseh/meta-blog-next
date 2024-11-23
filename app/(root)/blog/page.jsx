import Advertisement from "@/components/common/advertisement/Advertisement"; // Import Advertisement component
import PostOverlayCard from "@/components/common/cards/PostOverlayCard"; // Import PostOverlayCard component for the banner
import PostCard from "@/components/common/cards/PostCard"; // Import PostCard component for each post
import PageInfo from "@/components/layout/PageInfo"; // Import PageInfo component for page header info
import React from "react";
import { posts } from "@/data/posts"; // Import post data

export const metadata = {
  title: "Blog | MetaBlog",
  description:
    "Explore the latest articles, tips, and stories on various topics related to Technology, AI, and more at MetaBlog.",
};

const Blog = () => {
  return (
    <main>
      <div className="container mx-auto">
        {/* Page title and description info */}
        <section>
          <PageInfo />{" "}
          {/* This component renders the page title and description */}
        </section>

        {/* Banner Section */}
        <section className="my-12">
          <PostOverlayCard />{" "}
          {/* This component renders the banner with an overlay and post details */}
        </section>

        {/* All Posts Section */}
        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Looping through the posts array to render a PostCard for each post */}
            {posts.map((post) => (
              <PostCard key={post.id} post={post} /> //rendering individual post cards
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex items-center justify-center w-full mt-8">
            <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
              Load More{" "}
              {/* Button to load more posts, functionality can be added later */}
            </button>
          </div>
        </section>

        {/* Advertisement Section */}
        <section className="mb-24">
          <Advertisement /> {/* This component displays advertisements */}
        </section>
      </div>
    </main>
  );
};

export default Blog;

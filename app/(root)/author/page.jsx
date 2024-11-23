import AuthorInfo from "@/components/common/cards/OwnerInfoCard";
import PostCard from "@/components/common/cards/PostCard";
import React from "react";
import { posts, users } from "@/data/posts";

const author = users[2];

export const metadata = {
  title: `${author.name} | Author | MetaBlog`, // Dynamic title based on the author's name
  description: `Discover the latest posts and insights from ${author.name}, a passionate writer at MetaBlog. Explore topics ranging from lifestyle to travel and more.`, // SEO-friendly description with focus on the author's content
};

const Author = () => {
  return (
    <main>
      {/* Author info */}
      <section>
        <AuthorInfo author={author} />
      </section>

      {/* Latest Post */}
      <section>
        <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
          <h3 className="text-base-content font-bold text-2xl mb-8">
            Latest Post
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Author;

import Advertisement from "@/components/common/advertisement/Advertisement";
import HeroSectionCard from "@/components/common/cards/HeroSectionCard";
import PostCard from "@/components/common/cards/PostCard";
import Link from "next/link";
import { posts, users } from "@/data/posts";

export const metadata = {
  title: "Home Page | MetaBlog",
  description:
    "A Place Where You Can See The World in a Bright Picture, Explore The Latest Posts, and Get Inspired.",
  robots: "index, follow", // Allow search engines to index the page and follow the links
};

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Hero Section Component */}
      <section>
        <HeroSectionCard />
      </section>

      {/* Advertisement Component */}
      <section className="pt-12">
        <Advertisement />
      </section>

      {/* Latest Post */}
      <section className="my-20">
        <h3 className="text-base-content font-bold text-2xl mb-8 font-work leading-8">
          Latest Post
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <Link
            href={`/blog`}
            className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
          >
            View All Post
          </Link>
        </div>
      </section>

      {/* Advertisement Component */}
      <section className="mb-24">
        <Advertisement />
      </section>
    </main>
  );
}

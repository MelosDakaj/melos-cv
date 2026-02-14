/* app/blog/page.tsx */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }: { posts: { slug: string; title: string; date: string }[] }) {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
              {post.title} - <span className="text-gray-400">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Fetch posts at build time
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
    };
  });

  return { props: { posts } };
}

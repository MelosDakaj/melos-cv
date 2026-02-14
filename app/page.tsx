/* app/page.tsx */
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Hi, I’m Melos
      </h1>
      <p className="text-xl mb-8 text-center">
        Building systems. Documenting growth. Engineering my future.
      </p>
      <div className="flex gap-4">
        <Link href="/about" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          About Me
        </Link>
        <Link href="/projects" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
          Projects
        </Link>
        <Link href="/blog" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
          Blog
        </Link>
      </div>
    </main>
  );
}

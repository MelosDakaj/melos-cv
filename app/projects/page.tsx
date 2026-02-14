/* app/projects/page.tsx */
const projects = [
  {
    name: "Living Online CV",
    description: "A dynamic personal CV and blog built with Next.js and Tailwind.",
    link: "#",
  },
  {
    name: "Active Directory Notes",
    description: "Documentation of AD concepts and experiments.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.name} className="p-4 border border-gray-700 rounded hover:border-blue-500 transition">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

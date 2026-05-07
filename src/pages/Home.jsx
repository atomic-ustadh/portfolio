import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="atomicustadh - Full Stack Developer portfolio with blog"
      />
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url(/BMW.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center text-white max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Abdurrahman Luqman Yusuf
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-200">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Building elegant solutions with modern web technologies
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/blog"
                className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                Read Blog
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Full stack developer with experience in building modern web
                applications. Passionate about clean code, user experience, and
                continuous learning.
              </p>
              <p>
                Currently focused on React, Node.js, and cloud technologies.
                Always excited to take on new challenges and build impactful
                products.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-black text-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-gray-700 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-800 h-48 mb-4 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Project {i}</h3>
                  <p className="text-gray-300 mb-4">
                    Description of project {i} and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 text-white text-sm">React</span>
                    <span className="px-2 py-1 bg-gray-800 text-white text-sm">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-800 text-white text-sm">
                      Firebase
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:underline">
                      Live Demo
                    </a>
                    <a href="#" className="text-white hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-black text-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "HTML/CSS",
                  ],
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express", "Firebase", "REST APIs"],
                },
                {
                  category: "Tools",
                  skills: ["Git", "GitHub", "VS Code", "Netlify", "Figma"],
                },
              ].map((group) => (
                <div
                  key={group.category}
                  className="border border-gray-700 p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{group.category}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

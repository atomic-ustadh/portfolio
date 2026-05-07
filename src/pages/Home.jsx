import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="atomicustadh - Full Stack Developer portfolio with blog"
      />
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/my_profile_e.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Background Image with Overlay */}

      <div className="relative z-10">
        <section className="flex items-center justify-center min-h-screen px-4 mt-8">
          <div className="max-w-6xl text-left text-white">
            <h1 className="mt-20 mb-4 text-4xl font-bold md:text-7xl">
              ABDURRAHMAN LUQMAN YUSUF
            </h1>
            <p className="mb-2 text-lg text-left text-gray-300 md:text-xl">
              a.k.a Atomic Ustadh
            </p>
            <p className="mb-8 text-xl text-gray-200 md:text-xl">
              B.A Arabic Language and Literature (UniAbuja) ||  Frontend Developer  ||  Translator  ||  Teacher
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/blog"
                className="px-6 py-3 font-semibold text-black transition-colors bg-white border-2 hover:bg-black/5 hover:text-white hover:border-white"
              >
                Read Blog
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 font-semibold text-white transition-colors border-2 border-white hover:bg-white hover:text-black"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-300">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
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

        <section id="projects" className="text-white bg-black/20">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 transition-shadow border border-gray-700 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center h-48 mb-4 text-gray-400 bg-gray-800">
                    Project Image
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Project {i}
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Description of project {i} and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-sm text-white bg-gray-800">
                      React
                    </span>
                    <span className="px-2 py-1 text-sm text-white bg-gray-800">
                      Node.js
                    </span>
                    <span className="px-2 py-1 text-sm text-white bg-gray-800">
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

        <section id="skills" className="text-white bg-black/20">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  category: "Linguistics",
                  skills: [
                    "Translation",
                    "Language Analysis",
                    "Cross-cultural Communication",
                    "Arabic Language Proficiency"
                  ],
                },
                {
                  category: "Tools",
                  skills: ["Git", "GitHub", "VS Code", "Netlify & Vercel", "Figma", "Supabase & Firebase"],
                },
                {
                  category: "Teaching",
                  skills: [
                    "The Glorious Qur'an",
                    "Islamic Studies",
                    "Arabic Language",
                    "Computer Literacy",
                  ],
                },
                {
                  category: "Productivity",
                  skills: [
                    "Microsoft Office",
                    "Google Meet & Zoom",
                    "Slack & Trello",
                    "WakaTime",
                    "Typing"
                  ],
                },
              ].map((group) => (
                <div
                  key={group.category}
                  className="p-6 border border-gray-700"
                >
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {group.category}
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <span className="w-2 h-2 mr-3 bg-white rounded-full" />
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

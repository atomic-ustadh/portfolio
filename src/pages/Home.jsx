import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "../components/SEO";
import starIcon from "../images/star.svg";
import { projects, services, skills } from "../data/portfolioData";

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [hash])
  return (
    <>
      <SEO
        title="Home"
        description="Atomic Ustadh - Welcome to my personal portfolio website! I'm Abdurrahman Luqman Yusuf, a Frontend Dev"
      />
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/my_profile_e.png)" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Background Image with Overlay */}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen px-4 mt-8">
          <div className="max-w-6xl text-left text-white">
            <h1 className="mt-20 mb-4 text-4xl font-bold md:text-7xl">
              ABDURRAHMAN LUQMAN YUSUF
            </h1>
            <p className="mb-2 text-left text-gray-300 text-md md:text-xl">
              a.k.a Atomic Ustadh
            </p>
            <p className="mb-8 text-xl text-gray-200 md:text-xl">
              B.A Arabic Language and Literature (UniAbuja) || Frontend
              Developer || Translator || Teacher
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
        {/* Hero Section */}

        {/* About Me */}
        <section id="about" className="bg-white">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                I'm Abdurrahman Luqman Yusuf, a Frontend Developer and a
                Linguist, with a B.A. in Arabic from the University of Abuja
                (2019-2023) and currently pursuing my M.A. in Arabic Language
                and Linguistics.
              </p>
              <p className="mb-4">
                My tech journey includes frontend development work on the
                Incident Response Emergency System (iRES), website maintenance
                at the University of Abuja, and a web editor internship at Moren
                Technology Solutions. I hold an AWS Cloud Practitioner
                certification and a Silver Badge in Machine Learning.
              </p>
              <p>
                I speak Arabic, English, Yoruba, and Hausa. Beyond coding, I've
                spent several years teaching Arabic and Islamic Studies, which
                has strengthened my communication skills and passion for sharing
                knowledge through technology.
              </p>
            </div>
          </div>
        </section>
        {/* About Me */}

        {/* Services I Offer */}
        <section id="services" className="text-white bg-black/20">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Services I Offer
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-6 transition-shadow border border-gray-200 hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                  <Link
                    to={`/request-service?service=${encodeURIComponent(service.title)}`}
                    className="inline-block px-4 py-2 mt-4 text-[10px] text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Request {service.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services I Offer */}

        {/* Projects */}
        <section id="projects" className="text-white bg-black/20">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project Card */}
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="p-6 transition-shadow border border-gray-700 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center h-48 mb-4 text-gray-400 bg-gray-800">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-gray-500">Image Not Available</span>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-300">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] text-white bg-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Live Demo & Github */}
                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="text-white hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-white hover:underline"
                      >
                        GitHub
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 px-2 py-1 text-[8px] text-white border border-white rounded-lg shadow hover:shadow-xl hover:shadow-red-600"
                      >
                        <img
                          src={starIcon}
                          alt="star"
                          className="w-3 h-3 brightness-0 invert"
                        />
                        Star on Github
                      </a>
                    )}
                  </div>

                  {/* GitHub Issues */}
                  {project.gitissue && (
                    <p className="mt-4 text-sm text-gray-500">
                      Want to contribute? Check opened{" "}
                      <a
                        href={project.gitissue}
                        className="text-blue-500 hover:underline"
                      >
                        issues
                      </a>
                    </p>
                  )}

                  {/* Non-Tech Project Link */}
                  {project.link && (
                    <p className="text-sm">
                      Link:{" "}
                      <a
                        href={project.link}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects */}

        {/* Skills */}
        <section id="skills" className="text-white bg-black/20">
          <div className="max-w-6xl px-4 py-20 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
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
        {/* Skills */}
      </div>
    </>
  );
}

export default Home;

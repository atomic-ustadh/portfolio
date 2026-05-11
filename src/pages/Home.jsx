import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import starIcon from "../images/star.svg";
function Home() {
  const projects = [
    {
      title: "Lesson Planner",
      description:
        "A comprehensive, bilingual (English/Arabic) and Bi-directional lesson planning application designed specifically for Islamic schools and educators. Integrating Western and Islamic lesson plan in One platform.",
      technologies: ["React", "Node.js", "Supabase", "Tailwind", "Netlify"],
      liveDemo: "https://mysupabaselessonplan.netlify.app/",
      github: "https://github.com/atomic-ustadh/my-lesson-plan-app",
      gitissue: "https://github.com/atomic-ustadh/my-lesson-plan-app/issues",
      image: "/images/lssn_plannr.png",
    },
    {
      title: "Tech Tuts",
      description:
        "A Mini Blog Website - powered by Astro. It uses MDX and astro components to create a simple, clean, and fast blog. Ideal for  non-techies skip the hassle of setting up a complex blogging platform.",
      technologies: ["Astro", "React", "MDX", "Netlify"],
      liveDemo: "https://techtuts.netlify.app/",
      github: "https://github.com/atomic-ustadh/my-blog",
      gitissue: "https://github.com/atomic-ustadh/my-blog/issues",
      image: "/images/tech_tuts.png",
    },
    {
      title:
        "Arabic Language and it's Impact on Yoruba Speaking Muslims in Nigeria",
      description:
        "My Final year project for my B.A. in Arabic Language and Literature. It explores the influence of Arabic on the Yoruba language and culture among Nigerian Muslims, highlighting linguistic, cultural, and religious impacts.",
      technologies: [
        "Linguistics",
        "العربية",
        "Nigerian History",
        "اﻹقتراض اللغوي",
        "اللفويات",
      ],
      image: "/images/ba_project.png",
      link: "https://baproject.netlify.app/",
    },
  ];

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
        <div className="absolute inset-0 bg-black/60" />
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
              {[
                {
                  title: "Web Development",
                  description:
                    "Building responsive, performant web applications using React, Node.js, and modern frameworks.",
                },
                {
                  title: "Web Design",
                  description:
                    "Creating clean, user-friendly interfaces with Tailwind CSS and modern design principles.",
                },
                {
                  title: "Translation",
                  description:
                    "Professional translation services in Arabic, English, Yoruba, and Hausa languages.",
                },
                {
                  title: "Teaching and Mentorship",
                  description:
                    "Teaching Qur'an, Arabic language, and Islamic Studies with years of classroom experience.",
                },
                {
                  title: "Technical Training & Support",
                  description:
                    "Online and on-site tech support, system maintenance, and training for client schools.",
                },
                {
                  title: "Typing & Printing Services",
                  description:
                    "Professional typing, document formatting, and printing services. Proficient in Microsoft Office Suite.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-6 transition-shadow border border-gray-200 hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                  <button className="px-4 py-2 mt-4 text-[10px] text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                    Request {service.title}
                  </button>
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
                  <p className="mb-4 text-sm text-gray-300">
                    {project.description}
                  </p>
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
                    "Arabic Language Proficiency",
                  ],
                },
                {
                  category: "Tools",
                  skills: [
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Netlify & Vercel",
                    "Figma",
                    "Supabase & Firebase",
                  ],
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
                    "Typing",
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
        {/* Skills */}
      </div>
    </>
  );
}

export default Home;

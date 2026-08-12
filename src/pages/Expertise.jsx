import React from 'react';
import Layout from '../components/Layout';

const skillCategories = [
  {
    title: 'Backend & Architecture',
    description:
      'Building secure, scalable microservices and enterprise server-side applications.',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Spring JWT',
      'Microservices',
    ],
  },
  {
    title: 'Frontend Development',
    description:
      'Crafting fast, responsive, and modern user interfaces.',
    skills: [
      'React',
      'JavaScript (ES6+)',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Database & Storage',
    description:
      'Managing relational databases, schema design, and query optimization.',
    skills: [
      'PostgreSQL',
      'SQL',
    ],
  },
  {
    title: 'Systems & Active Learning',
    description:
      'Expanding into systems programming and low-level performance.',
    skills: [
      'Rust',
      'C++',
    ],
    badge: 'Beginner / Exploring',
  },
];

const Expertise = () => {
  return (
    <Layout>
      <div className="
        flex-grow
        py-16
        px-6
        max-w-5xl
        mx-auto
        w-full
      ">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="
            font-serif
            text-4xl
            md:text-5xl
            text-black
            dark:text-white
            mb-4
          ">
            The Expertise
          </h1>

          <p className="
            text-gray-500
            dark:text-gray-400
            tracking-wider
            text-sm
            uppercase
          ">
            Technical skills and background.
          </p>
        </div>

        {/* Skills */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                border
                border-gray-200
                dark:border-neutral-800
                rounded-xl
                p-6
                bg-white
                dark:bg-neutral-950
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="
                flex
                justify-between
                items-center
                gap-4
                mb-2
              ">
                <h2 className="
                  font-serif
                  text-xl
                  text-black
                  dark:text-white
                ">
                  {category.title}
                </h2>

                {category.badge && (
                  <span className="
                    text-xs
                    font-mono
                    px-2
                    py-0.5
                    rounded
                    bg-amber-50
                    dark:bg-amber-950/40
                    text-amber-700
                    dark:text-amber-400
                    border
                    border-amber-200
                    dark:border-amber-900
                  ">
                    {category.badge}
                  </span>
                )}
              </div>

              <p className="
                text-gray-500
                dark:text-gray-400
                text-sm
                mb-6
              ">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      text-xs
                      font-medium
                      bg-gray-100
                      dark:bg-neutral-900
                      text-gray-800
                      dark:text-gray-200
                      rounded-md
                      border
                      border-gray-200
                      dark:border-neutral-800
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Expertise;
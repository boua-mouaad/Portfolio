import React from 'react';
import Layout from '../components/Layout';

const projects = [
  {
    id: '01',
    title: 'Full-Stack Enterprise E-Commerce Platform',
    category: 'Full-Stack Engineering',
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Redis', 'Stripe'],
    description:
      'Production-ready e-commerce solution featuring persistent cart caching, order lifecycle workflows, JWT authentication, and secure payment processing.',
    github: 'https://github.com/bouafia-mouaad/ecommerce-platform',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02',
    title: 'Distributed Event Streaming Engine',
    category: 'Distributed Systems',
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Docker'],
    description:
      'High-throughput asynchronous messaging engine with fault-tolerant log retention, topic partitioning, and dynamic worker pool scaling.',
    github: 'https://github.com/bouafia-mouaad/distributed-event-engine',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03',
    title: 'High-Performance API Gateway Core',
    category: 'System Architecture & Security',
    tech: ['Java', 'Spring Cloud Gateway', 'Redis', 'Prometheus', 'Resilience4j'],
    description:
      'Low-latency edge router featuring distributed token-bucket rate limiting via Redis, centralized JWT authentication filters, circuit breaking, and Prometheus metrics scraping.',
    github: 'https://github.com/bouafia-mouaad/api-gateway-core',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '04',
    title: 'Enterprise Microservices Platform',
    category: 'Backend & Cloud Native',
    tech: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'Kubernetes'],
    description:
      'Modular enterprise backend with Eureka service discovery, resilience via Resilience4j circuit breakers, and automated Helm deployment pipelines.',
    github: 'https://github.com/bouafia-mouaad/enterprise-microservices',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <div className="py-12 md:py-20 px-4">

        {/* Header */}
        <div className="
          mb-16
          border-b
          border-gray-200
          dark:border-neutral-800
          pb-8
        ">
          <div className="
            w-12
            h-px
            bg-gray-400
            dark:bg-gray-600
            mb-6
          " />

          <h1 className="
            font-serif
            text-4xl
            md:text-6xl
            font-bold
            text-black
            dark:text-white
            mb-4
          ">
            The Portfolio
          </h1>

          <p className="
            text-gray-600
            dark:text-gray-400
            text-sm
            md:text-base
            max-w-xl
            leading-relaxed
          ">
            An index of architectural systems, full-stack platforms,
            microservice prototypes, distributed protocol engines, and
            backend infrastructure projects.
          </p>
        </div>

        {/* Projects */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                border
                border-gray-200
                dark:border-neutral-800
                bg-white
                dark:bg-neutral-950
                p-6
                flex
                flex-col
                justify-between
                hover:border-black
                dark:hover:border-white
                transition-colors
                duration-300
                group
              "
            >
              <div>
                <div className="
                  border
                  border-gray-100
                  dark:border-neutral-800
                  p-1
                  mb-6
                  overflow-hidden
                  bg-gray-50
                  dark:bg-neutral-900
                ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-48
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                      transition-all
                      duration-500
                    "
                  />
                </div>

                <div className="flex justify-between items-center mb-3 gap-4">
                  <span className="
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-gray-400
                    uppercase
                  ">
                    No. {project.id}
                  </span>

                  <span className="
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-gray-500
                    dark:text-gray-400
                    uppercase
                    text-right
                  ">
                    {project.category}
                  </span>
                </div>

                <h2 className="
                  font-serif
                  text-xl
                  font-bold
                  text-black
                  dark:text-white
                  mb-3
                ">
                  {project.title}
                </h2>

                <p className="
                  text-xs
                  text-gray-600
                  dark:text-gray-400
                  leading-relaxed
                  mb-6
                ">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-wider
                        bg-gray-100
                        dark:bg-neutral-900
                        text-gray-700
                        dark:text-gray-300
                        px-2.5
                        py-1
                        border
                        border-gray-200
                        dark:border-neutral-800
                      "
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="
                pt-4
                border-t
                border-gray-100
                dark:border-neutral-800
                flex
                items-center
                justify-between
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
              ">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-black
                    dark:text-white
                    hover:text-gray-500
                    dark:hover:text-gray-400
                    transition-colors
                  "
                >
                  GitHub Source →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
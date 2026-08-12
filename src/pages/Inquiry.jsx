import React, { useState } from 'react';
import Layout from '../components/Layout';

function Inquiry() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'System Architecture & Consulting',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Inquiry submitted:', formData);
        setSubmitted(true);
    };

    return (
        <Layout>
            <div className="py-12 md:py-20 px-4">
                {/* Section Header */}
                <div className="mb-16 border-b border-gray-200 dark:border-neutral-800 pb-8 transition-colors duration-300">
                    <div className=" w-12 h-px bg-gray-400 dark:bg-gray-600 mb-6" />
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 transition-colors duration-300 ">
                        The Inquiry
                    </h1>
                    <p
                        className=" text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed transition-colors duration-300"
                    >
                        Open for architectural consultations, distributed systems
                        research, high-performance software engineering projects,
                        and technical collaborations.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7">
                        {submitted ? (
                            <div className="bg-gray-50 dark:bg-neutral-900 border border-black dark:border-neutral-700 p-8 md:p-12 text-center transition-colors duration-300">
                                <h3 className=" font-serif text-2xl font-bold text-blackdark:text-white mb-2"
                                >
                                    Inquiry Received
                                </h3>
                                <p
                                    className="
                    text-gray-600
                    dark:text-gray-400
                    text-sm
                    mb-6
                  "
                                >
                                    Thank you for reaching out. Your message has been logged
                                    into the queue and will receive a response shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="
                    bg-black
                    dark:bg-white
                    text-white
                    dark:text-black
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    px-6
                    py-3
                    hover:bg-gray-800
                    dark:hover:bg-gray-200
                    transition-colors
                  "
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      dark:text-gray-400
                      mb-2
                    "
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g., Lionel Messi"
                                        className="
                      w-full
                      bg-transparent
                      border-b
                      border-gray-300
                      dark:border-neutral-700
                      py-3
                      text-sm
                      text-black
                      dark:text-white
                      placeholder:text-gray-400
                      dark:placeholder:text-neutral-600
                      rounded-none
                      focus:outline-none
                      focus:border-black
                      dark:focus:border-white
                      transition-colors
                    "
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      dark:text-gray-400
                      mb-2
                    "
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="e.g., name@domain.com"
                                        className="
                      w-full
                      bg-transparent
                      border-b
                      border-gray-300
                      dark:border-neutral-700
                      py-3
                      text-sm
                      text-black
                      dark:text-white
                      placeholder:text-gray-400
                      dark:placeholder:text-neutral-600
                      rounded-none
                      focus:outline-none
                      focus:border-black
                      dark:focus:border-white
                      transition-colors
                    "
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      dark:text-gray-400
                      mb-2
                    "
                                    >
                                        Nature of Inquiry
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="
                      w-full
                      bg-transparent
                      border-b
                      border-gray-300
                      dark:border-neutral-700
                      py-3
                      text-sm
                      text-black
                      dark:text-white
                      rounded-none
                      focus:outline-none
                      focus:border-black
                      dark:focus:border-white
                      transition-colors
                      cursor-pointer
                    "
                                    >
                                        <option value="System Architecture & Consulting" className="bg-white dark:bg-neutral-950 text-black dark:text-white">System Architecture & Consulting</option>
                                        <option value="Full-Stack Engineering" className="bg-white dark:bg-neutral-950 text-black dark:text-white">Full-Stack Engineering</option>
                                        <option value="Microservices & DevOps" className="bg-white dark:bg-neutral-950 text-black dark:text-white">Microservices & DevOps</option>
                                        <option value="Research & Academic Collaboration" className="bg-white dark:bg-neutral-950 text-black dark:text-white">Research & Academic Collaboration</option>
                                        <option value="Other" className="bg-white dark:bg-neutral-950 text-black dark:text-white">Other Direct Inquiries</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      dark:text-gray-400
                      mb-2
                    "
                                    >
                                        Message / Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Describe the system requirements, project scope, or timeline..."
                                        className="
                      w-full
                      bg-transparent
                      border
                      border-gray-300
                      dark:border-neutral-700
                      p-4
                      text-sm
                      text-black
                      dark:text-white
                      placeholder:text-gray-400
                      dark:placeholder:text-neutral-600
                      rounded-none
                      focus:outline-none
                      focus:border-black
                      dark:focus:border-white
                      transition-colors
                      resize-none
                    "
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="
                    bg-black
                    dark:bg-white
                    text-white
                    dark:text-black
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    px-10
                    py-4
                    hover:bg-gray-800
                    dark:hover:bg-gray-200
                    transition-colors
                    w-full
                    sm:w-auto
                  "
                                >
                                    Transmit Inquiry
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column */}
                    <div
                        className="
              lg:col-span-5
              flex
              flex-col
              justify-between
              border-t
              lg:border-t-0
              lg:border-l
              border-gray-200
              dark:border-neutral-800
              pt-12
              lg:pt-0
              lg:pl-12
              transition-colors
              duration-300
            "
                    >
                        <div className="space-y-8">
                            {/* Direct Correspondence */}
                            <div>
                                <h3
                                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                    mb-2
                  "
                                >
                                    Direct Correspondence
                                </h3>
                                <p
                                    className="
                    font-serif
                    text-lg
                    text-black
                    dark:text-white
                    font-semibold
                  "
                                >
                                    BOUAFIA MOUAAD NAWFEL
                                </p>
                                <a
                                    href="mailto:mouaadnawfel.bouafia@usthb.etu.dz"
                                    className="
                    text-sm
                    text-gray-600
                    dark:text-gray-400
                    hover:text-black
                    dark:hover:text-white
                    border-b
                    border-gray-300
                    dark:border-neutral-700
                    pb-0.5
                    transition-colors
                  "
                                >
                                    mouaadnawfel.bouafia@usthb.etu.dz
                                </a>
                            </div>

                            {/* Affiliation */}
                            <div>
                                <h3
                                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                    mb-2
                  "
                                >
                                    Affiliation & Base
                                </h3>
                                <p
                                    className="
                    text-sm
                    text-gray-700
                    dark:text-gray-300
                    leading-relaxed
                  "
                                >
                                    Faculty of Computer Science (USTHB)
                                    <br />
                                    Bab Ezzouar, Algiers, Algeria
                                </p>
                            </div>

                            {/* Digital Artifacts */}
                            <div>
                                <h3
                                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                    mb-3
                  "
                                >
                                    Digital Artifacts
                                </h3>
                                <ul
                                    className="
                    space-y-2
                    text-xs
                    font-bold
                    tracking-wider
                    uppercase
                  "
                                >
                                    <li>
                                        <a
                                            href="https://github.com/boua-mouaad?tab=repositories"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                        text-gray-600
                        dark:text-gray-400
                        hover:text-black
                        dark:hover:text-white
                        transition-colors
                      "
                                        >
                                            → GitHub / Repositories
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/bouafia-mouaad-nawfel/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                        text-gray-600
                        dark:text-gray-400
                        hover:text-black
                        dark:hover:text-white
                        transition-colors
                      "
                                        >
                                            → LinkedIn / Professional
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quote (Completed) */}
                        <div
                            className="
                mt-12
                p-6
                bg-gray-50
                dark:bg-neutral-900
                border
                border-gray-200
                dark:border-neutral-800
                transition-colors
                duration-300
              "
                        >
                            <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-3">
                                "Simplicity is prerequisite for reliability."
                            </p>
                            <footer className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                — Edsger W. Dijkstra
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Inquiry;
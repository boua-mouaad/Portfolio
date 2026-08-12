import React from 'react';
import { Link } from 'react-router-dom';
import BouaImg from '../assets/boua_image.png';

function HeroSection() {
  return (
    <section className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-12
      px-8
      md:px-12
      py-16
      md:py-24
      items-center
    ">
      {/* Left */}
      <div className="flex flex-col items-start pr-0 lg:pr-8">
        <div className="
          w-12
          h-px
          bg-gray-400
          dark:bg-gray-600
          mb-8
        " />

        <h1 className="
          font-serif
          text-5xl
          md:text-[5.5rem]
          leading-[1.05]
          font-bold
          text-black
          dark:text-white
          mb-6
          transition-colors
          duration-300
        ">
          Software Developer
        </h1>

        <p className="
          text-gray-600
          dark:text-gray-400
          text-sm
          md:text-base
          leading-relaxed
          mb-10
          max-w-md
          transition-colors
        ">
          3rd Year CS / 1st Year Software Engineer at USTHB.
          <br />
          Specializing in high-performance architectures and scalable
          distributed systems.
        </p>

        <div className="
          flex
          flex-col
          sm:flex-row
          gap-4
        ">
          <Link
            to="/portfolio"
            className="
              bg-black
              dark:bg-white
              text-white
              dark:text-black
              text-center
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              px-8
              py-4
              border
              border-black
              dark:border-white
              hover:bg-gray-800
              dark:hover:bg-gray-200
              transition-colors
            "
          >
            View Portfolio
          </Link>

          <Link
            to="/inquiry"
            className="
              bg-transparent
              text-center
              border
              border-black
              dark:border-white
              text-black
              dark:text-white
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              px-8
              py-4
              hover:bg-black
              hover:text-white
              dark:hover:bg-white
              dark:hover:text-black
              transition-colors
            "
          >
            Contact Directly
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="
          p-2
          border
          border-gray-200
          dark:border-neutral-800
          bg-white
          dark:bg-neutral-950
          shadow-sm
          w-full
          max-w-[600px]
          transition-colors
          duration-300
        ">
          <div className="
            border
            border-gray-100
            dark:border-neutral-800
            p-1
          ">
            <img
              src={BouaImg}
              alt="Bouafia Mouaad Nawfel - Software Developer"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
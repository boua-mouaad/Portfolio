import React from 'react';

function Footer() {
  return (
    <footer className="
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      px-8
      md:px-12
      py-8
      border-t
      border-gray-200
      dark:border-neutral-800
      mt-auto
      gap-4
      transition-colors
    ">
      <div>
        <h2 className="
          font-serif
          text-xl
          font-bold
          text-black
          dark:text-white
        ">
          The Software Engineer
        </h2>
      </div>

      <div className="
        flex
        space-x-6
        text-[10px]
        md:text-xs
        font-bold
        tracking-wider
        text-gray-500
        dark:text-gray-400
      ">
        <a
          href="https://github.com/boua-mouaad"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
        >
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/bouafia-mouaad-nawfel/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/boua.__/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
        >
          Instagram
        </a>
      </div>

      <div className="
        text-[10px]
        md:text-xs
        font-bold
        tracking-wider
        text-gray-400
      ">
        &copy; {new Date().getFullYear()} The Software Engineer.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
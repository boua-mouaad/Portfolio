import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'The Monograph', path: '/' },
    { name: 'The Portfolio', path: '/portfolio' },
    { name: 'The Expertise', path: '/expertise' },
    { name: 'The Inquiry', path: '/inquiry' },
  ];

  return (
    <header className="
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      px-8
      md:px-12
      py-8
      border-b
      border-gray-200
      dark:border-neutral-800
      transition-colors
      duration-300
    ">
      {/* Brand */}
      <div className="mb-6 md:mb-0">
        <Link
          to="/"
          className="
            font-serif
            text-2xl
            font-bold
            tracking-tight
            text-black
            dark:text-white
            transition-colors
          "
        >
          BouaDev
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
        <nav>
          <ul className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-6
            md:gap-8
            text-[10px]
            md:text-xs
            font-bold
            tracking-[0.2em]
            uppercase
            text-gray-500
            dark:text-gray-400
          ">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`
                      transition-colors
                      pb-1
                      ${
                        isActive
                          ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                          : 'hover:text-black dark:hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
            title={
              theme === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
            className="
              w-9
              h-9
              flex
              items-center
              justify-center
              border
              border-gray-300
              dark:border-neutral-700
              text-black
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-neutral-800
              transition-all
              duration-300
            "
          >
            {theme === 'light' ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              border
              border-black
              dark:border-white
              bg-black
              dark:bg-white
              text-white
              dark:text-black
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              px-4
              py-2
              hover:bg-white
              hover:text-black
              dark:hover:bg-black
              dark:hover:text-white
              transition-all
              duration-300
            "
          >
            <span>Resume</span>

            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
'use client';

import { useMemo, useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navLinks = useMemo(
    () => [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  const profileImage = '/profile.png'

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="mt-[2rem] pointer-events-auto max-w-[460px] mx-auto ">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-3 md:hidden">
          <div className="z-[200] flex w-full items-center justify-between rounded-full border border-white/10 bg-neutral-900/60 backdrop-blur-2xl shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3">
              <img
                src="/profile.png"
                alt="Profile avatar"
                className="h-12 w-12 rounded-full border border-white/10 object-cover "
              />
              <div className="flex flex-col w-[120px] text-left">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">SARGURU D</span>
                </div>
              </div>           
            </div>
            {isClient && (
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-neutral-900 shadow-inner shadow-lime-500/40 transition hover:bg-lime-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 transform -translate-x-[5px]"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className={`absolute h-0.75 w-full rounded-full bg-neutral-900 transition duration-200 ease-in-out ${
                    isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-[6px]'
                  }`}
                />
                <span
                  className={`absolute h-0.75 w-full rounded-full bg-neutral-900 transition duration-200 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.75 w-full rounded-full bg-neutral-900 transition duration-200 ease-in-out ${
                    isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[6px]'
                  }`}
                />
              </span>
            </button>
          )}
          </div>
          <div
            className={`absolute w-[460px] pt-[40px] rounded-3xl border border-white/10 bg-neutral-900/70 px-6 py-5 text-center backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.4)] z-[100] transition-all duration-300 ease-out origin-top transform ${
              isMenuOpen
                ? 'pointer-events-auto opacity-100 translate-y-0 scale-y-100'
                : 'pointer-events-none opacity-0 -translate-y-2 scale-y-95'
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="flex flex-col items-center gap-4 text-lg font-medium text-neutral-200 pt-4 ">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={handleLinkClick}
                  className="w-full rounded-3xl p-2 transition hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden w-full items-center justify-between gap-6 rounded-full border border-white/10 bg-neutral-900/60 backdrop-blur-2xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] md:flex">
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="Profile avatar"
              className="h-12 w-12 rounded-full border border-white/10 object-cover"
            />
            <div className="flex items-center gap-6 text-base font-medium text-neutral-200">
              {navLinks
                .filter(({ label }) => label !== 'Contact')
                .map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
            </div>
          </div>
          <a
            href="#contact"
            className="rounded-full flex h-9 w-24 items-center justify-center bg-white text-base font-semibold text-neutral-900 shadow-[inset_0_2px_6px_rgba(255,255,255,0.4)] transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 text-center align-center transform -translate-x-[6px]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
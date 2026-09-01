import React from 'react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      label: 'INSTAGRAM',
      href: 'https://instagram.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'YOUTUBE',
      href: 'https://youtube.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <polygon points="10 15 15 12 10 9" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'TWITTER',
      href: 'https://twitter.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'SUBSTACK',
      href: 'https://substack.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ),
    },
    {
      label: 'GITHUB',
      href: 'https://github.com/Moby-Otomo',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: 'CONTACT',
      href: 'mailto:contact@mobyotomo.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-uis-border bg-uis-paper/90 text-uis-dark text-xs font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-uis-border">
        {/* Column 1: Stamp Badge */}
        <div className="p-5 flex items-center justify-center">
          <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-uis-dark/80 flex items-center justify-center p-2 text-center group cursor-pointer hover:border-uis-orange transition-colors">
            {/* SVG Circular Text */}
            <svg className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
              <path
                id="textPath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                fill="none"
              />
              <text className="text-[7.5px] font-mono tracking-[0.18em] fill-uis-dark uppercase font-semibold">
                <textPath href="#textPath" startOffset="0%">
                  UNCLES IN SPACE ★ EVERY UNCLE HAS A ROLE ★
                </textPath>
              </text>
            </svg>
            {/* Center Pixel Face / Emblem */}
            <div className="w-12 h-12 rounded-full bg-uis-dark text-uis-bg flex items-center justify-center overflow-hidden border border-uis-border shadow-inner">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-uis-bg">
                <circle cx="12" cy="12" r="9" fill="#181816" stroke="#f4f3ee" strokeWidth="1.5" />
                <circle cx="9" cy="10" r="1.5" fill="#f4f3ee" />
                <circle cx="15" cy="10" r="1.5" fill="#f4f3ee" />
                <path d="M8.5 15.5Q12 17.5 15.5 15.5" stroke="#f4f3ee" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M7 11Q12 13 17 11" stroke="#e05a2b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Column 2: Statement */}
        <div className="p-5 flex flex-col justify-between space-y-4">
          <p className="text-xs leading-relaxed text-uis-muted font-sans">
            A catalog of uncles, roles, and quiet contributions across the galaxy.
          </p>
          <div className="border-b border-dashed border-uis-border" />
          <p className="text-xs leading-relaxed text-uis-dark font-sans">
            New field notes every now and then.<br />
            <span className="font-semibold text-uis-dark">Observe. Appreciate. Document.</span>
          </p>
        </div>

        {/* Column 3: Social & External Links */}
        <div className="p-4 sm:p-5 flex flex-col justify-center">
          <ul className="space-y-1.5 font-mono text-[11px] tracking-wider">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 py-0.5 border-b border-uis-border/60 hover:border-uis-orange hover:text-uis-orange transition-colors group"
                >
                  <span className="text-uis-muted group-hover:text-uis-orange transition-colors shrink-0">
                    {link.icon}
                  </span>
                  <span className="font-semibold text-uis-dark group-hover:text-uis-orange transition-colors">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Motto & Rocket Badge */}
        <div className="p-5 flex flex-col items-center justify-center text-center space-y-3 bg-uis-bg/40">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-uis-dark fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.5C12 2.5 7.5 7 7.5 13.5C7.5 16 8.5 18 9.5 19L9.5 21.5L12 20L14.5 21.5L14.5 19C15.5 18 16.5 16 16.5 13.5C16.5 7 12 2.5 12 2.5Z" stroke="#181816" strokeWidth="1.5" fill="#181816" />
              <circle cx="12" cy="10.5" r="1.75" fill="#f4f3ee" />
              <path d="M7.5 14L4.5 16.5L5.5 19.5L8.5 18" stroke="#181816" strokeWidth="1.2" fill="#181816" />
              <path d="M16.5 14L19.5 16.5L18.5 19.5L15.5 18" stroke="#181816" strokeWidth="1.2" fill="#181816" />
            </svg>
          </div>
          <div className="space-y-0.5">
            <p className="font-extrabold font-mono text-[11px] tracking-widest text-uis-dark uppercase">
              OBSERVE BETTER.
            </p>
            <p className="font-extrabold font-mono text-[11px] tracking-widest text-uis-dark uppercase">
              APPRECIATE MORE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

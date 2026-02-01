import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: 'Sparkly', href: '/products#sparkly' },
      { name: 'Delex', href: '/products#delex' },
      { name: 'MatchFlow', href: '/products#matchflow' },
    ],
    Company: [
      { name: 'Use Cases', href: '/use-cases' },
      { name: 'About', href: '/about' },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerSocials}>
              <a
                href="mailto:entitymatchinginfo@gmail.com"
                className={styles.footerSocial}
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/madmatcher"
                className={styles.footerSocial}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.footerLinkGroup}>
                <h4 className={styles.footerLinkTitle}>{category}</h4>
                <ul className={styles.footerLinkList}>
                  {links
                    .filter(
                      (link) =>
                        !['Terms for Use Cases', 'Privacy Policy', 'Terms of Service'].includes(
                          link.name
                        )
                    )
                    .map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith('http') ? (
                          <a
                            href={link.href}
                            className={styles.footerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link to={link.href} className={styles.footerLink}>
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} MadMatcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

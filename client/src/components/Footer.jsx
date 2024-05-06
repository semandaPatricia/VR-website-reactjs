import React, { useState, useEffect } from 'react';
import { resourcesLinks, platformLinks, communityLinks ,SocialLinks} from "../constants";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentYear(new Date().getFullYear());
      }, 1000); // Update every second to handle year change during transition

      return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
  return (
    <footer className="mt-20 m-5 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-bold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div  className="">
          <h3 className="text-md font-bold mb-4">socials</h3>
          <ul className="space-y-4">
            {SocialLinks.map((link,icon, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                 {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>

      </div>
      <p className="border-t mt-4 py-2 ">© {currentYear} Skala.</p>
    </footer>
  );
};

export default Footer;
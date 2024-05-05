import { resourcesLinks, platformLinks, communityLinks ,SocialLinks} from "../constants";
const Footer = () => {
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
    </footer>
  );
};

export default Footer;
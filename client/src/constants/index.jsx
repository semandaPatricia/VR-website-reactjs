import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { FaXTwitter, FaFacebookF , FaTiktok  } from "react-icons/fa6";



export const navItems = [
    { label: "Features", href: "feature" },
    { label: "Workflow", href: "workflow" },
    { label: "Pricing", href: "pricing" },
    { label: "Testimonials", href: "testimonials" },
  ];

   export const features = [
    {
      icon: <BotMessageSquare />,
      text: "Voice Control Integration",
      description:
        "Effortlessly navigate your VR environment using voice commands for a hands-free experience.",
    },
    {
      icon: <Fingerprint />,
      text: "Gesture Recognition",
      description:
        "Interact with objects in your VR world using intuitive gestures, enhancing immersion and user engagement.",
    },
    {
      icon: <ShieldHalf />,
      text: "Customizable Avatars",
      description:
        "Personalize your virtual presence with a wide range of customizable avatar options to reflect your identity.",
    },
    {
      icon: <BatteryCharging />,
      text: "Interactive Objects",
      description:
        "Bring your VR environment to life with interactive objects that respond to user input, enhancing realism.",
    },
    {
      icon: <PlugZap />,
      text: "Social Integration",
      description:
        "Connect with friends and colleagues in virtual spaces, fostering social interaction and community building.",
    },
    {
      icon: <GlobeLock />,
      text: "Performance Optimization",
      description:
        "Optimize your VR applications for smooth performance across different hardware configurations and platforms.",
    },
  ];
  

  export const checklistItems = [
    {
      title: "Version Control Integration",
      description:
        "Effortlessly manage code changes and collaborate with team members using built-in version control tools.",
    },
    {
      title: "Automated Code Review",
      description:
        "Ensure code quality and identify potential issues early with automated code review processes integrated into your workflow.",
    },
    {
      title: "AI-Powered Code Suggestions",
      description:
        "Leverage AI algorithms to receive intelligent suggestions and optimizations for your code, reducing development time and effort.",
    },
    {
      title: "Instant Deployment",
      description:
        "Deploy your VR applications with a single click, streamlining the process and enabling rapid iteration and sharing of work.",
    },
  ];
  

  export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$100",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];
  
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
  
export const SocialLinks = [
  {
    icon: <FaXTwitter />,
    text: "X",
 
  },
  {
    icon: <FaFacebookF />,
    text: "Facebook",
 
  },
  {
    icon: <FaTiktok />,
    text: "Ticktok",
 
  },
]
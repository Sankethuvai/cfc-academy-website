export const siteConfig = {
  academyName: "CFC Excellence Cricket Academy",
  location: "Aramghar X Road, Hyderabad",
  logoPath: "/images/cfc-logo.png",
  phoneDisplay: "07799237007",
  phoneDial: "7799237007",
  whatsappNumber: "917799237007",
  topBar: {
    phoneDisplay: "7799237007",
    locationLabel:
      "8CFF+WX8 CFC excellence - cricket academy, Aramghar X Road, Mohan Reddy Nagar, Hyderabad, Shivarampally Jagir, Telangana 500030",
    locationUrl: "https://share.google/eyE34lKKcTTAn3Bit",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/share/1azGgmhKFH/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/cfcexcellencecricketacademy/",
    google: "https://share.google/bCPAIY2P7wsIKv5CP",
  },
  headerCta: {
    label: "Book Free Trial",
  },
  heroVideoPath: "/videos/original-ground.mp4",
  instagramUrl: "https://instagram.com/cfcexcellenceacademy",
  mapEmbedUrl:
    "https://www.google.com/maps?q=17.3492,78.4362&z=15&output=embed",
  hero: {
    title: "Train Like a Champion",
    subtitle: "Join Hyderabad’s fastest growing cricket academy",
  },
  heroTicker: {
    campaign: "Summer Camp 2026",
    startsFrom: "Starting from April 6",
    ctaLabel: "Call Now",
  },
  about: {
    title: "About Us",
    paragraphs: [
      "CFC Excellence is a cricket academy built to help every trainee become a stronger athlete and a better individual through disciplined coaching.",
      "Our environment blends skill development, physical preparation, and game awareness so players learn how to perform consistently in real match situations.",
    ],
  },
  philosophy: {
    title: "Our Philosophy",
    paragraphs: [
      "We believe cricket should be accessible, enjoyable, and meaningful for everyone.",
      "Not every player will pursue competitive cricket, but every player can build confidence, character, discipline, and resilience through the game.",
      "Our coaching approach focuses on long-term growth, where technical ability and values develop together.",
    ],
  },
  whyChooseCards: [
    {
      title: "Coaches",
      description:
        "Train under experienced and certified coaches who provide close guidance on batting, bowling, fielding, and match intelligence.",
    },
    {
      title: "Programmes",
      description:
        "Structured programmes for all age groups and skill levels, from foundations to advanced performance pathways.",
    },
    {
      title: "Facilities",
      description:
        "Purpose-driven training environment with quality nets, fitness support, and conditions designed for serious practice.",
    },
  ],
  campusTour: {
    title: "Visit Us for a Campus Tour",
    description:
      "Explore our training setup, meet the coaching team, and understand the right programme for your child.",
    ctaLabel: "Book Campus Tour",
  },
  socialProof: {
    title: "Follow Us On Social Media",
    hashtag: "#CricketForAll",
    profileUrl: "https://www.instagram.com/cfcexcellencecricketacademy/",
  },
  partners: {
    title: "Our Partners",
    names: ["Local Cricket Clubs", "School Sports Programs", "Sports Nutrition Partners", "Community Sponsors"],
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const programs = [
  {
    title: "Batting Training",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bowling Training",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fielding Drills",
    image:
      "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fitness Training",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Match Practice",
    image:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Personal Coaching",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
  },
];

export const highlights = [
  "Certified Coaches",
  "Professional Nets",
  "Match Exposure",
  "Fitness Programs",
  "Personalized Training",
];

export const testimonials = [
  {
    quote:
      "The coaching quality is outstanding. My son’s confidence and technique improved in weeks.",
    author: "Parent of U-14 Trainee",
  },
  {
    quote:
      "Every session is structured and intense. It feels like professional training every day.",
    author: "Senior Player",
  },
  {
    quote:
      "Discipline and match awareness are taught with real focus. Highly recommended academy.",
    author: "Parent Review",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1562184552-fcaf95889a16?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
];

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

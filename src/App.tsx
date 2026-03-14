/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Music, 
  Utensils, 
  Palette, 
  Type, 
  Layout, 
  Users, 
  Coffee, 
  ChevronRight, 
  Flame, 
  Zap,
  Disc,
  Mic2,
  Monitor,
  MapPin,
  FlameKindling,
  Copy,
  Check,
  ArrowUp,
  X
} from 'lucide-react';

// --- Types ---
interface BrandElement {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string | React.ReactNode;
  items: { 
    name: string; 
    detail: string; 
    image?: string;
    mapEmbed?: string;
    link?: string;
    color?: string;
    hexTextColor?: string;
    fontFamily?: string;
    samples?: string[];
    objectFit?: 'cover' | 'contain';
  }[];
}

// --- Data ---
const BRAND_DATA: BrandElement[] = [
  {
    id: 'identity',
    title: 'Brand Identity',
    icon: <FlameKindling className="w-6 h-6" />,
    description: "Mojo's is a bold, flavour-first American comfort food destination. All flavour. No fuss.",
    items: [
      { 
        name: 'The Concept', 
        detail: "Mojo's is a bold, flavour-first American comfort food destination. Think crispy, indulgent, unapologetically satisfying — the kind of food that has regulars coming back twice a week and first-timers instantly hooked.\n\nBold. Flavor-first. Unapologetic.\n\nThe Vibe: Indulgent American comfort food.\n\nThe Food: Crispy, satisfying, and high-impact.\n\nThe Goal: Instant hooks and high-frequency regulars.",
        image: '/assets/imgs/the-style-vibe.jpg'
      },
      { 
        name: 'Smash Burgers', 
        detail: "The undisputed hero. Seven builds ranging from the classic Bacon Cheese to the showstopping Brisket, each one crafted with intention. These aren't afterthoughts — they're the reason people walk through the door.\n\nThe main event. Seven intentional builds—from the Classic Bacon Cheese to the signature Brisket.\n\nPurpose: The primary driver of foot traffic.\n\nRange: 7-8 distinct, chef-driven variations.\n\nQuality: Zero afterthoughts; pure intention.",
        image: '/assets/imgs/smash-burger.jpg'
      },
      { 
        name: 'Street-Style Starters', 
        detail: "Tacos on fried cheese tallow tortillas, loaded fries stacked with pulled pork and chipotle chicken. These are shareable, craveable, and highly Instagram-able.",
        image: '/assets/imgs/buttermilk-chicken-taco.jpg'
      },
      { 
        name: 'Southern Fried Chicken', 
        detail: "Woven throughout the menu as a recurring signature, from tenders to tacos to burgers. It's a thread that ties the whole offering together.",
        image: '/assets/imgs/southern-fried-wings.jpg'
      },
      { 
        name: 'The Feeling', 
        detail: "Mojo's doesn't take itself too seriously — but it takes its food very seriously. It's relaxed, confident, and a little bit rowdy. \"The best meal you didn't need to dress up for.\"",
        image: '/assets/imgs/the-feeling-group-shot.jpg'
      },
      { 
        name: 'The Tagline', 
        detail: "All flavour. No fuss.",
        image: '/assets/imgs/all-flavour-no-fuss.jpg'
      }
    ]
  },
  {
    id: 'logo',
    title: 'Logo Identity',
    icon: <Disc className="w-6 h-6" />,
    description: 'The visual heartbeat of Mojo\'s. A bold, circular emblem that signifies the "Fire & Smoke" philosophy.',
    items: [
      { 
        name: 'Master Logo: Variation 1', 
        detail: 'The primary mark featuring the iconic Mojo\'s typography with a distressed, wood-fired texture. Circular composition for maximum versatility across social and physical media.',
        image: '/assets/logos/logo-variation-1.png',
        objectFit: 'contain'
      },
      { 
        name: 'Master Logo: Variation 2', 
        detail: 'A simplified, high-contrast version for small-scale printing and embroidery. Removes fine distressing for clarity.',
        image: '/assets/logos/logo-variation-2.png',
        objectFit: 'contain'
      },
      { 
        name: 'Master Logo: Variation 3', 
        detail: 'A stylized version designed for digital displays and neon signage. Emphasizes the Crimson and Orange glow.',
        image: '/assets/logos/logo-variation-3.png',
        objectFit: 'contain'
      },
      { 
        name: 'Master Logo: Variation 4', 
        detail: 'A rugged, stencil-style variant for spray-painting on shipping crates and outdoor pit equipment.',
        image: '/assets/logos/logo-variation-4.png',
        objectFit: 'contain'
      }
    ]
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type className="w-6 h-6" />,
    description: 'The website uses four distinct font families to create a technical yet bold "Smokehouse" aesthetic.',
    items: [
      { 
        name: 'Display Font: Anton', 
        detail: 'Heavy, Condensed Sans-Serif. Usage: Large branding, hero titles, background watermarks.',
        fontFamily: 'font-display',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      },
      { 
        name: 'Heading Font: Space Grotesk', 
        detail: 'Modern Geometric Sans-Serif. Usage: Section labels, menu titles.',
        fontFamily: 'font-heading',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      },
      { 
        name: 'Body Font: Inter', 
        detail: 'Clean, highly legible Sans-Serif. Common Classes: font-sans.',
        fontFamily: 'font-sans',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      },
      { 
        name: 'Monospace Font: Roboto Mono', 
        detail: 'Technical Monospace. Usage: Prices, labels, "Back to top" button, small-caps metadata.',
        fontFamily: 'font-mono',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      }
    ]
  },
  {
    id: 'palette',
    title: 'Color Palette',
    icon: <Palette className="w-6 h-6" />,
    description: 'A foundation of charcoal and smoke, punctuated by the vibrant glow of live embers.',
    items: [
      { name: 'Charcoal Pit', detail: 'Main background. Deep, matte, and soot-inspired.', color: '#111111' },
      { name: 'Mojo Crimson', detail: 'Prices, accents, numbers. The primary heartbeat of the brand.', color: '#E8003D', hexTextColor: 'text-white' },
      { name: 'Neon Heat', detail: 'Hero banner, Sunday Roast panel. Vibrant and high-energy.', color: '#FF1F5A', hexTextColor: 'text-white' },
      { name: 'Ember Glow', detail: 'Watermark / shadow tones. Deep, smoldering heat.', color: '#C4003A', hexTextColor: 'text-white' },
      { name: 'Smoked Slate', detail: 'Menu card backgrounds. Subtle contrast for readability.', color: '#1A1A1A' },
      { name: 'Iron Grid', detail: 'Borders & dividers. Industrial-grade structural elements.', color: '#2E2E2E' },
      { name: 'Ash Grey', detail: 'Sub-category labels. Muted metadata and secondary info.', color: '#888888', hexTextColor: 'text-white' },
      { name: 'Bone White', detail: 'All primary text. Maximum contrast and clarity.', color: '#FFFFFF' },
      { name: 'Smoke White', detail: 'Text on red panels. Softened contrast for high-heat areas.', color: '#F0EDE8' }
    ]
  },
  {
    id: 'locations',
    title: 'Locations & Venues',
    icon: <MapPin className="w-6 h-6" />,
    description: 'Our outposts across Thailand, each maintaining the core Fire & Smoke identity.',
    items: [
      { 
        name: 'Lamai Outpost', 
        detail: 'Signature location for optimal size, covers, and location for tourists and grab delivery radius - not too big, not too small - has more refined vision brand', 
        mapEmbed: 'https://maps.google.com/maps?q=9.464096763954156,100.0434715411214&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/Rvg99Cx8WrZPm2bS7'
      },
      { 
        name: 'Chaloklum Hub', 
        detail: 'Slightly oversized for the our needs in Chaloklum, has V1 of previous branding ideas, lots of changes between chaloklum and lamai', 
        mapEmbed: 'https://maps.google.com/maps?q=9.786670871753794,100.00766608345157&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/Z1gZdZvnXPqdELsM7'
      },
      { 
        name: 'Thong Sala', 
        detail: 'Food Court - Quick, Dirty Take away, location good for tourists and KPG Delivery radius', 
        mapEmbed: 'https://maps.google.com/maps?q=Mojo\'s%20Fire%20and%20Smoke%20Thong%20Sala%20Koh%20Phangan&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/ReKr3REoTqDEpkRr6'
      },
      { 
        name: 'Baan Tai Night Market', 
        detail: 'Good Location overall, but market layout / inside location not adequte, good delivery location', 
        mapEmbed: 'https://maps.google.com/maps?q=9.699998076770726,100.02440791043722&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/vtM7A59EjdcjCCrY9'
      }
    ]
  },
  {
    id: 'tableware',
    title: 'Tableware',
    icon: <Utensils className="w-6 h-6" />,
    description: 'Industrial-grade materials that can handle the volume and the grease.',
    items: [
      { 
        name: 'Plateware', 
        detail: 'Matte black stoneware with irregular, organic edges. Feels like raw earth.',
        image: '/assets/imgs/matte-black-plateware.jpg'
      },
      { 
        name: 'Burger Plate', 
        detail: 'Heavy-set matte black plate designed for our signature smash burgers. Wide rim for easy handling and grease-resistant finish.',
        image: '/assets/imgs/matte-black-burger-taco-plates.jpg'
      },
      { 
        name: 'Taco Plate', 
        detail: 'Elongated platter for our Fire & Smoke tacos. Perfect for sharing and displaying vibrant salsa colors.',
        image: '/assets/imgs/matte-black-burger-taco-plates.jpg'
      },
      { 
        name: 'Loaded Fries Bowl', 
        detail: 'Deep, industrial-style bowl for our pit-fired loaded fries. Retains heat and stands up to heavy toppings.',
        image: '/assets/imgs/matte-black-burger-bowl.jpg'
      },
      { 
        name: 'Matte Black Cutlery & Plate Set', 
        detail: 'A complete set featuring our signature matte black plateware paired with brushed gunmetal flatware.',
        image: '/assets/imgs/matte-black-cutlery-plate-set.jpg'
      },
      { 
        name: 'Plateware & Cutlery', 
        detail: 'The perfect pairing of organic stoneware and industrial-grade steel.',
        image: '/assets/imgs/plateware-cutlery.jpg'
      }
    ]
  },
  {
    id: 'furniture',
    title: 'Furniture',
    icon: <Coffee className="w-6 h-6" />,
    description: 'Comfortable enough for a long set, durable enough for a mosh pit.',
    items: [
      { name: 'Tables', detail: 'Reclaimed barn wood tops with heavy I-beam steel bases. Bolt-head details exposed.', image: '/assets/imgs/furniture-style-ideas.jpg' },
      { name: 'Seating', detail: 'Distressed black leather booths with diamond stitching. Bar stools made from repurposed drum thrones.', image: '/assets/imgs/seating-styles.jpg' },
      { name: 'Bar Counter', detail: 'Poured concrete with embedded guitar picks and broken vinyl shards.', image: '/assets/imgs/bar-counter.jpg' },
      { name: 'Furniture Direction', detail: 'Custom "Stage Rig" trusses with adjustable PAR cans and warm Edison bulbs.', image: '/assets/imgs/chair-styles.jpg' }
    ]
  },
  {
    id: 'uniforms',
    title: 'Staff Uniforms',
    icon: <Users className="w-6 h-6" />,
    description: 'The crew is part of the show. No stiff collars here.',
    items: [
      { 
        name: 'Front of House', 
        detail: "Mojo's logo'd T (Front small logo - back Large Logo). Denim jeans or shorts, rolled up sleeves.",
        image: '/assets/imgs/mojos-vintage-tee-front.jpg'
      },
      { 
        name: 'Kitchen Crew', 
        detail: 'Chefs blacks, thin / easy to wear style, vintage washed, logo embroidery - rolled up sleeves, give a rough tough vibe',
        image: '/assets/imgs/mojos-chefs-blacks.jpg'
      },
      { name: 'The Full Look', detail: 'Dark / denim look, with pop of colour depending on style preference for bandanas - fits with the dark red / blacks of the colour branding - logo can be red also! make it pop.', image: '/assets/imgs/staff-full-uniform.jpg' },
      { 
        name: 'Accessories', 
        detail: 'Branded "Fire & Smoke" bandanas and guitar-pick-shaped name badges.',
        image: '/assets/imgs/mojos-bandana.jpg'
      }
    ]
  },
  {
    id: 'sound',
    title: 'Sound & Music',
    icon: <Music className="w-6 h-6" />,
    description: 'The heartbeat of Mojo’s. If it doesn’t have soul and grit, it doesn’t play.',
    items: [
      { 
        name: 'Classic Soul & Motown Royalty', 
        detail: 'Deep roots in 1960s–70s soul — Marvin Gaye, Aretha Franklin, Stevie Wonder, Sam & Dave, Wilson Pickett, Al Green. The foundation of the playlist, full of groove, emotion, and timeless vocal power.',
        image: '/assets/imgs/stevie-wonder-album.jpg'
      },
      { 
        name: 'The Blues Lineage', 
        detail: 'Ray Charles, B.B. King, John Lee Hooker, Bo Diddley, Big Joe Turner. This thread ties together the rawer, more rootsy side of the list, from boogie-woogie to soul blues, acting as the spiritual backbone.',
        image: '/assets/imgs/bb-king-album.jpg'
      },
      { 
        name: 'Funk, Disco & Groove', 
        detail: 'Earth, Wind & Fire, Kool & the Gang, James Brown, and Ike & Tina Turner. Highest-energy entries, made for moving, bridging soul to the dancefloor.',
        image: '/assets/imgs/james-brown-album.jpg'
      },
      { 
        name: 'Classic Rock & Its Outliers', 
        detail: 'The Rolling Stones, Led Zeppelin, Pink Floyd, Fleetwood Mac, The Police, Patti Smith, David Bowie, Roxy Music, The Cruel Sea, and Nick Cave. Rock that carries a similar spirit to soul/blues.',
        image: '/assets/imgs/rolling-stones-album.jpg'
      }
    ]
  },
  {
    id: 'menu',
    title: 'Menu Direction',
    icon: <Utensils className="w-6 h-6" />,
    description: (
      <>
        Mojo’s is a dedicated <strong className="text-white font-bold">lunch, dinner, and late-night destination</strong> built on the pillars of <strong className="text-white font-bold">legendary smash burgers, tacos, starters and loaded fries</strong>. To maintain our identity, we prioritize <strong className="text-white font-bold">perfecting the core menu</strong> over expansion; while <strong className="text-white font-bold">Sunday Roasts and localized brunches</strong> align with our roots, early morning coffee, juices, and breakfast are excluded to <strong className="text-white font-bold">prevent brand dilution</strong>. By sticking to what we do best, we ensure every bite is a <strong className="text-white font-bold">"hero" experience</strong> that protects our position as a <strong className="text-white font-bold">premier burger and beer venue</strong>.
      </>
    ),
    items: [
      { 
        name: 'The Smash Burger', 
        detail: 'Our core focus. High-quality beef, smashed thin for maximum crust, served on toasted buns with signature Mojo sauce.',
        image: '/assets/imgs/smash-burger.jpg'
      },
      { 
        name: 'Fire & Smoke Tacos', 
        detail: 'Brisket and Pulled Pork served on fried cheese tallow tortillas with salsa roja and fresh cilantro.',
        image: '/assets/imgs/buttermilk-chicken-taco.jpg'
      },
      { 
        name: 'Chicken Loaded Fries', 
        detail: 'Our signature fries topped with buttermilk fried chicken and spicy Mojo sauce.',
        image: '/assets/imgs/chicken-loaded-fries.jpg'
      },
      {
        name: 'Wings & Tenders',
        detail: 'Crispy, double-fried wings tossed in our signature dry rubs or wet sauces.',
        image: '/assets/imgs/southern-fried-wings.jpg'
      },
      {
        name: 'Southern Fried Tenders',
        detail: 'Hand-breaded buttermilk chicken tenders, served with a side of pit-fire salsa.',
        image: '/assets/imgs/chicken-tenders.jpg'
      },
      { 
        name: 'The Sweet Stuff', 
        detail: 'Indulgent finishers: Basque burnt cheesecake and ultra-thick honeycomb malt shakes.',
        image: '/assets/imgs/chocolate-brownie.jpg'
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: <Monitor className="w-6 h-6" />,
    description: 'Our presence across physical and digital stages. Every touchpoint is a performance.',
    items: [
      { 
        name: 'Take Out Packaging', 
        detail: 'Pizza-style boxes for tacos/burgers with "Gig Poster" graphics. Heavy-duty, grease-resistant, and designed to be a collectible artifact.',
        image: '/assets/imgs/take-away-branding.jpg'
      },
      { 
        name: 'Website / Online Presence', 
        detail: 'High-contrast, high-performance digital hub. Featuring live pit-cams, online ordering, and a "Tour Dates" style event calendar.',
        image: '/assets/imgs/website-hero-img.jpg'
      },
      { 
        name: 'Social Media Channels', 
        detail: 'Aggressive, high-energy content. Focusing on the "Grab" shot, the sizzle of the pit, and the roar of the crowd. Consistent use of Mojo Crimson filters.',
        image: '/assets/imgs/social-media-icons.jpg'
      },
      { 
        name: 'Sunday Roast Marketing', 
        detail: 'Specialized "Family Set" campaigns. Emphasizing the "Low & Slow" tradition with a rock-and-roll twist. Large-format platters for the whole crew.',
        image: '/assets/imgs/sunday-roast.jpg'
      }
    ]
  }
];

// --- Components ---

const NavItem = ({ element, active, onClick }: { element: BrandElement, active: boolean, onClick: () => void, key?: React.Key }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 transition-all duration-300 border-l-4 ${
      active 
        ? 'bg-white/5 border-red-600 text-white' 
        : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/2'
    }`}
  >
    <div className={`${active ? 'text-red-600' : 'text-zinc-600'}`}>
      {element.icon}
    </div>
    <span className="font-medium uppercase tracking-widest text-sm">{element.title}</span>
    {active && (
      <motion.div layoutId="active-nav" className="ml-auto">
        <ChevronRight className="w-4 h-4 text-red-600" />
      </motion.div>
    )}
  </button>
);

const DetailCard = ({ item, sectionId }: { item: { name: string, detail: string, image?: string, mapEmbed?: string, link?: string, color?: string, hexTextColor?: string, fontFamily?: string, samples?: string[], objectFit?: 'cover' | 'contain' }, sectionId: string, key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-red-600/50 transition-all duration-300 overflow-hidden"
    >
      {item.color ? (
        <div className="mb-6 aspect-square rounded-md overflow-hidden border border-zinc-800 flex items-center justify-center relative group/color" style={{ backgroundColor: item.color }}>
          <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${item.hexTextColor ? item.hexTextColor : 'text-white/40 mix-blend-difference'}`}>
            {item.color}
          </span>
        </div>
      ) : item.mapEmbed ? (
        <div className="mb-6 aspect-square rounded-md overflow-hidden border border-zinc-800 bg-black">
          <iframe
            title={item.name}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9) brightness(0.8)' }}
            src={item.mapEmbed}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      ) : item.image && (
        <div className="mb-6 aspect-square rounded-md overflow-hidden border border-zinc-800 bg-black p-4 relative group/image">
          <img 
            src={item.image} 
            alt={item.name} 
            className={`w-full h-full ${item.objectFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
        <Zap className="w-4 h-4 text-red-600" />
      </div>
      <h4 className={`text-red-500 font-bold uppercase tracking-tighter text-lg mb-2 ${item.fontFamily || ''}`}>{item.name}</h4>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4 whitespace-pre-line">{item.detail}</p>
      
      {item.link && (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 hover:text-red-500 transition-colors border border-red-600/20 px-3 py-2 rounded bg-red-600/5"
        >
          <MapPin className="w-3 h-3" />
          View on Google Maps
        </a>
      )}

      {item.fontFamily && item.samples && (
        <div className={`mt-6 p-6 bg-black/40 rounded-lg border border-zinc-800/50 ${item.fontFamily}`}>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-zinc-600 mb-4 border-b border-zinc-800 pb-2">Font Preview</p>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-700">Upper Case</span>
              <span className="text-2xl md:text-3xl text-zinc-100 break-all">{item.samples[0]}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-700">Lower Case</span>
              <span className="text-2xl md:text-3xl text-zinc-100 break-all">{item.samples[1]}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-700">Alphabet</span>
              <span className="text-xl md:text-2xl text-zinc-100 break-all leading-tight">The quick brown fox jumps over the lazy dog.</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function App() {
  const [activeId, setActiveId] = useState(BRAND_DATA[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll listener for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active section
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    BRAND_DATA.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-red-600 selection:text-white scroll-smooth">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm rotate-3">
              <Flame className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tighter italic">
              Mojo's <span className="text-red-600">Fire & Smoke</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            <span>Est. 2026</span>
            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
            <span>Rockin' Smash Burgers</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/imgs/website-hero-img.jpg" 
            alt="Mojo's Hero" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">Official Branding Guidelines</span>
            <h1 className="text-[15vw] md:text-[12vw] font-display leading-[0.85] uppercase tracking-tighter mb-8">
              Mojo's <br />
              <span className="text-red-600">Fire & Smoke</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              All Flavour. No Fuss. The technical blueprint for the ultimate American comfort food destination.
            </p>
            <button 
              onClick={() => scrollToSection('identity')}
              className="group relative px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm overflow-hidden"
            >
              <span className="relative z-10">Explore the Brand</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-10 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore the Brand</span>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-zinc-500 rotate-90" />
        </div>
      </section>

      <div className="flex">
        {/* Sticky Sidebar Navigation */}
        <aside className="w-72 sticky top-20 h-[calc(100vh-80px)] border-r border-zinc-800 bg-[#050505] hidden lg:block overflow-y-auto">
          <div className="py-8">
            <div className="px-6 mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Brand Architecture</p>
            </div>
            <nav>
              {BRAND_DATA.map((element) => (
                <NavItem
                  key={element.id}
                  element={element}
                  active={activeId === element.id}
                  onClick={() => scrollToSection(element.id)}
                />
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-8 left-6 right-6 p-4 bg-red-600/10 border border-red-600/20 rounded-lg">
            <p className="text-[10px] text-red-500 font-bold uppercase mb-1">Confidential</p>
            <p className="text-[9px] text-zinc-500 leading-tight">Internal use only. All designs are property of Mojo's Fire & Smoke.</p>
          </div>
        </aside>

        {/* Scrollable Content Area */}
        <div className="flex-1 p-6 md:p-12 lg:p-24">
          <div className="max-w-6xl mx-auto space-y-32 md:space-y-64">
            {BRAND_DATA.map((element) => (
              <section 
                key={element.id} 
                id={element.id} 
                className="scroll-mt-32"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-zinc-900 rounded-lg text-red-600 border border-zinc-800">
                        {element.icon}
                      </div>
                      <span className="text-red-600 font-mono text-sm tracking-widest">SECTION_{element.id.toUpperCase()}</span>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">
                      {element.title}
                    </h2>
                    <div className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed mb-12">
                      {element.description}
                    </div>
                  </div>

                  {/* Grid of details */}
                  <div className={`grid gap-8 mb-20 ${element.id === 'palette' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {element.items.map((item, idx) => (
                      <DetailCard key={idx} item={item} sectionId={element.id} />
                    ))}
                  </div>

                  {/* Visual Moodboard Element */}
                  {element.id !== 'marketing' && (
                    <div className={`relative rounded-2xl overflow-hidden border border-zinc-800 group transition-all duration-500 ${
                      element.id === 'uniforms' ? 'aspect-[16/10]' : 'aspect-video'
                    }`}>
                      <img 
                        src={
                          element.id === 'identity'
                            ? '/assets/imgs/the-style-vibe.jpg'
                            : element.id === 'palette'
                              ? '/assets/imgs/colour-palette-hero-img.jpg'
                              : element.id === 'tableware'
                                ? '/assets/imgs/tableware-hero-img.jpg'
                                : element.id === 'locations' 
                              ? 'https://i.imgur.com/gNL13PE.jpeg' 
                              : element.id === 'logo'
                                ? '/assets/imgs/mojos-logo-hero.jpg'
                                : element.id === 'typography'
                                  ? '/assets/imgs/typography-hero-image.jpg'
                                  : element.id === 'sound'
                                    ? '/assets/imgs/music-playlist-bg.jpg'
                                    : element.id === 'menu'
                                      ? '/assets/imgs/food-hero-shot.jpg'
                                      : element.id === 'uniforms'
                                        ? '/assets/imgs/staff-full-uniform.jpg'
                                        : element.id === 'furniture'
                                          ? '/assets/imgs/furniture-style-ideas.jpg'
                                          : `https://picsum.photos/seed/${element.id}/1200/800?grayscale`
                        } 
                        alt={element.title}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                          element.id === 'uniforms' 
                            ? 'object-top opacity-90' 
                            : 'object-[center_35%] opacity-40'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                      
                      {element.id === 'sound' && (
                        <a 
                          href="https://open.spotify.com/playlist/3VUPA31RZIHGmww45MSbTq?si=b76a62fbd4bf40ea" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 backdrop-blur-[2px]"
                        >
                          <div className="flex flex-col items-center gap-4 scale-75 group-hover:scale-100 transition-transform duration-500">
                            <div className="bg-[#1DB954] p-5 rounded-full shadow-2xl shadow-[#1DB954]/20">
                              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.464-1.027.249-2.846-1.738-6.429-2.131-10.648-1.169-.403.092-.809-.16-.901-.563-.092-.403.16-.809.563-.901 4.621-1.057 8.583-.605 11.764 1.337.353.215.464.674.249 1.027zm1.468-3.258c-.272.441-.849.581-1.29.309-3.258-2.002-8.225-2.583-12.08-1.413-.498.151-1.022-.133-1.173-.631-.151-.498.133-1.022.631-1.173 4.407-1.337 9.888-.68 13.603 1.604.441.272.581.849.309 1.29zm.126-3.403c-3.907-2.321-10.347-2.534-14.108-1.393-.599.182-1.238-.162-1.42-.761-.182-.599.162-1.238.761-1.42 4.316-1.31 11.439-1.063 15.903 1.588.538.319.715 1.012.396 1.55-.319.538-1.012.715-1.55.396z"/>
                              </svg>
                            </div>
                            <span className="text-white font-bold uppercase tracking-widest text-[10px] bg-black/60 px-4 py-2 rounded-full border border-white/10">Listen on Spotify</span>
                          </div>
                        </a>
                      )}

                      <div className="absolute bottom-8 left-8">
                        <div className="flex items-center gap-2 mb-2">
                          <Disc className="w-4 h-4 text-red-600 animate-spin-slow" />
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Moodboard Reference</span>
                        </div>
                        <p className="text-2xl font-bold uppercase italic tracking-tight">Visualizing the {element.title} vibe</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="lg:ml-72 border-t border-zinc-800 py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-red-600 flex items-center justify-center rounded-sm rotate-6">
              <FlameKindling className="text-white w-10 h-10" />
            </div>
            <div>
              <p className="text-xl font-black uppercase tracking-widest text-white italic">Mojo's Fire & Smoke</p>
              <p className="text-xs text-zinc-500 mt-1">© 2026 All Rights Reserved. Smoked low, played loud.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowPrivacyModal(true)}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-red-600 transition-colors"
          >
            Privacy Policy
          </button>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyModal(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                  Privacy <span className="text-red-600">Policy</span>
                </h3>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto text-zinc-400 font-light leading-relaxed space-y-6">
                <section>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Introduction</h4>
                  <p>At Mojo's Fire & Smoke, we value your privacy. This policy outlines how we handle information related to our branding guidelines and internal documentation.</p>
                </section>
                <section>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Data Collection</h4>
                  <p>This branding site is for internal informational purposes. We do not collect personal data from visitors. Any interactions with this site are logged for performance monitoring only.</p>
                </section>
                <section>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Confidentiality</h4>
                  <p>All designs, color palettes, and brand assets contained within this document are the exclusive property of Mojo's Fire & Smoke. Unauthorized distribution is strictly prohibited.</p>
                </section>
                <section>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Third-Party Links</h4>
                  <p>Our site may contain links to external services like Spotify or Google Maps. These services have their own privacy policies which we encourage you to review.</p>
                </section>
                <p className="text-[10px] text-zinc-600 pt-4 border-t border-zinc-800">Last Updated: March 2026</p>
              </div>
              <div className="p-6 bg-zinc-950 flex justify-end">
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2 bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-600/20 border border-white/10 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #E8003D;
        }
      `}</style>
    </div>
  );
}

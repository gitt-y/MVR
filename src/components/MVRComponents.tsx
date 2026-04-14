import { motion, useScroll, useTransform } from 'motion/react';
import { PartyPopper, Calendar, Music, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative ${className} flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="mvr-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E31E24" />
          <stop offset="25%" stopColor="#F7941D" />
          <stop offset="50%" stopColor="#FFF200" />
          <stop offset="75%" stopColor="#00A651" />
          <stop offset="100%" stopColor="#0072BC" />
        </linearGradient>
      </defs>
      <path 
        d="M10 80 L50 20 L90 80 M30 80 L50 50 L70 80" 
        fill="none" 
        stroke="url(#mvr-gradient)" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-display font-bold text-2xl tracking-tight hidden sm:block">
            MVR <span className="text-slate-500 font-medium">Hospitality</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Events', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-slate-600 hover:text-mvr-orange transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-mvr-orange transition-all hover:scale-105 active:scale-95 shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-mvr-red/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-mvr-blue/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-mvr-orange" />
          <span>Premier Event Organizers</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.9]"
        >
          Crafting <span className="mvr-gradient-text">Unforgettable</span> <br />
          Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
        >
          MVR Hospitality Services brings your vision to life with vibrant energy, 
          professional precision, and a touch of magic for every occasion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-mvr-orange transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2 group">
            Start Planning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-mvr-blue transition-all hover:scale-105 shadow-lg">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-1/4 left-10 hidden lg:block">
        <div className="p-4 bg-white rounded-2xl shadow-2xl rotate-[-12deg] border border-slate-100">
          <PartyPopper className="w-8 h-8 text-mvr-red" />
        </div>
      </motion.div>
      <motion.div style={{ y: y1, opacity }} className="absolute bottom-1/4 right-10 hidden lg:block">
        <div className="p-4 bg-white rounded-2xl shadow-2xl rotate-[12deg] border border-slate-100">
          <Music className="w-8 h-8 text-mvr-blue" />
        </div>
      </motion.div>
    </section>
  );
};

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  colorClass: string;
  delay: number;
  key?: number | string;
}

const ServiceCard = ({ icon: Icon, title, description, colorClass, delay }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
  >
    <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "From corporate galas to intimate celebrations, we handle every detail with professional care.",
      colorClass: "bg-mvr-red"
    },
    {
      icon: PartyPopper,
      title: "Party Management",
      description: "Themed parties, birthdays, and anniversaries that your guests will talk about for years.",
      colorClass: "bg-mvr-orange"
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Live bands, DJs, and performers curated to match the vibe of your unique event.",
      colorClass: "bg-mvr-blue"
    },
    {
      icon: Users,
      title: "Hospitality",
      description: "Premium guest services and staffing to ensure a seamless experience for everyone.",
      colorClass: "bg-mvr-green"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="mvr-gradient-text">Specialized</span> Services
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide end-to-end solutions for all your event and hospitality needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/event/800/1000" 
              alt="Event Management" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-48 h-48 bg-mvr-orange rounded-3xl -z-10 opacity-20"
          />
          <motion.div
            animate={{ 
              x: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-64 h-64 bg-mvr-blue rounded-full -z-10 opacity-10 blur-3xl"
          />
        </div>
        
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-8"
          >
            Who is <span className="mvr-gradient-text">MVR Hospitality?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-6 leading-relaxed"
          >
            Based on a foundation of creativity and excellence, MVR Hospitality Services 
            has emerged as a leader in event organization and entertainment. We don't 
            just plan events; we create memories that resonate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 mb-8 leading-relaxed"
          >
            Our team of experts brings together years of experience in hospitality, 
            ensuring every party, corporate function, or wedding is executed with 
            vibrant flair and professional integrity.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: "Events Organized", value: "500+" },
              { label: "Happy Clients", value: "10k+" },
              { label: "Team Experts", value: "50+" },
              { label: "Cities Covered", value: "12+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
              >
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const images = [
    "https://picsum.photos/seed/party1/600/600",
    "https://picsum.photos/seed/party2/600/800",
    "https://picsum.photos/seed/party3/600/600",
    "https://picsum.photos/seed/party4/600/800",
    "https://picsum.photos/seed/party5/600/600",
    "https://picsum.photos/seed/party6/600/800",
  ];

  return (
    <section id="events" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Moments of <span className="mvr-gradient-text">Pure Joy</span>
            </motion.h2>
            <p className="text-slate-400 max-w-xl text-lg">
              A glimpse into the vibrant celebrations we've had the pleasure of organizing.
            </p>
          </div>
          <button className="px-8 py-3 border border-slate-700 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all">
            View Full Gallery
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl"
            >
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h4 className="font-bold text-xl mb-1">Grand Celebration</h4>
                  <p className="text-slate-300 text-sm italic">Summer 2023</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        <div className="flex-1 p-12 lg:p-20 bg-slate-900 text-white">
          <h2 className="font-display text-4xl font-bold mb-8">Let's Create <br />Something <span className="mvr-gradient-text">Epic.</span></h2>
          <p className="text-slate-400 text-lg mb-12">
            Ready to start planning your next big event? Our team is here to help you every step of the way.
          </p>
          
          <div className="space-y-8">
            {[
              { label: "Email Us", value: "hello@mvrhospitality.com" },
              { label: "Call Us", value: "+1 (555) 123-4567" },
              { label: "Visit Us", value: "123 Event Plaza, Creative City" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                <div className="text-xl font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-[1.5] p-12 lg:p-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-mvr-orange transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-mvr-blue transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Event Type</label>
              <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-mvr-green transition-colors appearance-none">
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Private Party</option>
                <option>Entertainment Show</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-mvr-orange transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
            </div>
            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-mvr-orange transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    
    {/* Decorative background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-mvr-orange)_0%,_transparent_70%)]" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <Logo className="w-8 h-8" />
        <span className="font-display font-bold text-xl tracking-tight">
          MVR Hospitality
        </span>
      </div>
      
      <div className="text-slate-500 text-sm font-medium">
        © {new Date().getFullYear()} MVR Hospitality Services. All rights reserved.
      </div>
      
      <div className="flex items-center gap-6">
        {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
          <a key={social} href="#" className="text-slate-400 hover:text-mvr-orange transition-colors text-sm font-bold uppercase tracking-widest">
            {social}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export { Navbar, Hero, Services, About, Gallery, Contact, Footer };

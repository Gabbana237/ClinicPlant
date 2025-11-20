import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const images = [
    '/slider/pepper.jpg',
    '/slider/corn.jpg',
    '/slider/cassava.jpg',
    '/slider/potato.jpg',
    '/slider/tomates-rouges-fraîches-biologiques-et-délicieuses-crues-et-suspendues-à-la-vigne-dune-plante.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     {/* Header */}
<motion.header 
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: .6, ease: "easeOut" }}
  className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-2 sm:py-3"
>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    
    <motion.img
      src="../../public/Gemini_Generated_Image_lg15a9lg15a9lg15-removebg-preview.png"
      alt="Logo Clinique des Plantes"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-32 sm:w-36 md:w-40"
    />

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {["fonctionnalites", "temoignages", "contact"].map((item, i) => (
        <motion.a
          key={item}
          href={`#${item}`}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="text-white/80 hover:text-white transition text-base lg:text-lg"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </motion.a>
      ))}
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
      aria-label="Menu"
    >
      {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="md:hidden mt-3 backdrop-blur-md bg-black/80 rounded-2xl overflow-hidden"
      >
        <nav className="flex flex-col">
          {["fonctionnalites", "temoignages", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-base px-6 py-4 hover:bg-white/10 transition border-b border-white/10"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Bienvenue sur <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .6 }}
                className="text-yellow-300 drop-shadow-2xl"
              >
                La Clinique Des Plantes
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .8 }}
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-10 leading-relaxed text-emerald-100 max-w-3xl mx-auto"
            >
              L'application mobile gratuite pour diagnostiquer, soigner et faire prospérer vos plantes — en quelques clics.
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-row gap-6 justify-center items-center mb-14"
            >
              <a href="https://apps.apple.com/fr/app/clinique-des-plantes" target="_blank">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&releaseDate=1318032000"
                alt="App Store"
                className="h-14 sm:h-16 md:h-[72px]" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.cliniquedesplantes" target="_blank">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
                alt="Google Play"
                className="h-[68px] sm:h-20 md:h-[88px]" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { value: "15K+", label: "Diagnostics" },
                { value: "95%", label: "Précision" },
                { value: "500+", label: "Espèces" },
                { value: "24/7", label: "Disponible" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="backdrop-blur-sm bg-white/5 rounded-xl py-6"
                >
                  <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.value}</div>
                  <div className="text-emerald-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

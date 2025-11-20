import React from 'react';
import { 
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Diagnostic de plantes", href: "#diagnostic" },
      { name: "Base de connaissances", href: "#knowledge" },
      { name: "Guides pratiques", href: "#guides" },
      { name: "Blog", href: "#blog" }
    ],

    legal: [
      { name: "Mentions légales", href: "#legal" },
      { name: "Politique de confidentialité", href: "#privacy" },
      { name: "Conditions d'utilisation", href: "#terms" },
      { name: "Cookies", href: "#cookies" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section principale */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">La Clinique Des Plantes</span>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Votre assistant IA pour diagnostiquer et soigner vos plantes. 
              Sauvez vos cultures et jardins grâce à l'intelligence artificielle.
            </p>

            {/* Informations de contact */}
            <div className="space-y-3">
              <a href="mailto:contact@cliniqueplantes.com" className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                contact@cliniqueplantes.com
              </a>
              <a href="tel:+237123456789" className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                +237 691 224 142
              </a>
              <div className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                Dschang, Cameroun
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-5 text-emerald-400">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-5 text-emerald-400">
              Entreprise
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-5 text-emerald-400">
              Légal
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700/50"></div>

        {/* Section inférieure */}
        <div className="py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3 md:gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm md:text-base text-gray-400 flex items-center gap-2 justify-center md:justify-end">
              © {currentYear} La Clinique Des Plantes. Fait avec 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              au Cameroun
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
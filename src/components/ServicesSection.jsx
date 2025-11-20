import React from 'react';
import { 
  Camera,
  Scan,
  FileCheck,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../../public/images/1.png';
import image2 from '../../public/images/2.png';
import image3 from '../../public/images/3.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const ServicesSection = () => {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Capturez votre plante",
      description: "Prenez une photo claire de votre plante malade…",
      features: [
        "Photo instantanée ou depuis galerie",
        "Zoom automatique sur les zones affectées",
        "Guidage pour une capture optimale"
      ],
      image: image1,
      color: "from-emerald-400 to-teal-500",
      reverse: false
    },
    {
      number: "02",
      icon: Scan,
      title: "Analyse intelligente IA",
      description: "Notre intelligence artificielle analyse instantanément…",
      features: [
        "Reconnaissance de 20+ maladies",
        "Analyse en moins de 30 secondes",
        "Technologie de deep learning avancée"
      ],
      image:  image2,
      color: "from-cyan-400 to-blue-500",
      reverse: true
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Diagnostic précis",
      description: "Recevez un rapport détaillé identifiant la maladie…",
      features: [
        "Rapport complet et illustré",
        "Niveau de gravité indiqué",
        "Causes et facteurs de risque"
      ],
      image: image3,
      color: "from-blue-400 to-indigo-500",
      reverse: false
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "Solutions personnalisées",
      description: "Obtenez des recommandations de traitement…",
      features: [
        "Plan de traitement personnalisé",
        "Produits naturels et chimiques",
        "Conseils d'entretien préventif"
      ],
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop",
      color: "from-violet-400 to-purple-500",
      reverse: true
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div 
          className="text-center mb-16 md:mb-24 max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Processus simple et rapide</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Comment fonctionne<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              La Clinique Des Plantes ?
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-4">
            En seulement 4 étapes efficaces grâce à notre IA.
          </p>
        </motion.div>

        {/* ÉTAPES */}
        <div className="space-y-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div 
                key={index}
                className={`flex ${step.reverse ? 'flex-row-reverse' : 'flex-row'} gap-12 items-center`}
              >

                {/* IMAGE ANIMÉE */}
                <motion.div 
                  className="w-1/2"
                  variants={step.reverse ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div
                    variants={zoomIn}
                    className="group bg-white rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={step.image}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* TEXTE ANIMÉ */}
                <motion.div 
                  className="w-1/2 space-y-6"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  <div className="space-y-3">
                    {step.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-start gap-3"
                        variants={fadeUp}
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${step.color} rounded-md flex items-center justify-center text-white`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA animé */}
        <motion.div 
          className="text-center mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="/diagnostic"
            className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
          >
            Commencer le diagnostic
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-4 text-sm text-gray-500">
            ✓ Gratuit • ✓ Sans inscription • ✓ Résultats instantanés
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;

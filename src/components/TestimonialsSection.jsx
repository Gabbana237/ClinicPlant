import React, { useState, useEffect } from 'react';
import { 
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "Merveille Ngono",
      role: "Ménagère à Yaoundé",
      rating: 5,
      text: "Vraiment incroyable ! Mon plantain jaunissait depuis des semaines. Grâce aux conseils de l'application, j'ai su exactement quoi faire. Maintenant tout pousse très bien !"
    },
    {
      id: 2,
      name: "Jean-Baptiste Kouamo",
      role: "Agriculteur à Bafoussam",
      rating: 5,
      text: "C'est un outil révolutionnaire ! Le diagnostic a détecté tôt la maladie du maïs. J'ai limité les pertes et économisé beaucoup d'argent. Je recommande à tous les agriculteurs."
    },
    {
      id: 3,
      name: "Sidoine Mbianda",
      role: "Paysagiste à Douala",
      rating: 5,
      text: "Je l'utilise pour mes clients depuis plusieurs mois. Les analyses sont précises et rapides. Ça m'aide à proposer un meilleur service et à gagner du temps."
    },
    {
      id: 4,
      name: "Aissatou Abdoulaye",
      role: "Vendeuse de plantes au marché de Maroua",
      rating: 5,
      text: "Les clients demandent souvent des conseils. Maintenant je leur montre l'application, et ça les rassure beaucoup. Ils reviennent toujours satisfaits."
    },
    {
      id: 5,
      name: "Junior Tchouaké",
      role: "Étudiant en agronomie",
      rating: 5,
      text: "L'application m'aide dans mes études. Elle détecte certaines maladies que je ne reconnaissais même pas. C'est devenu mon assistant quotidien !"
    },
    {
      id: 6,
      name: "Martin Essomba",
      role: "Retraité passionné de jardinage",
      rating: 5,
      text: "À mon âge, je voulais juste entretenir mon potager. L'application est simple à utiliser et m'aide à surveiller mes tomates facilement."
    }
  ];

  // Gestion responsive du nombre de cartes affichées
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablette
      } else {
        setCardsPerView(3); // Desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  // Auto-défilement
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-teal-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-80 md:h-80 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* En-tête */}
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Témoignages</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Ils ont sauvé leurs plantes
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              grâce à notre application
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Boutons de navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-teal-50 transition-all hover:scale-110"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-teal-50 transition-all hover:scale-110"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
          </button>

          {/* Conteneur des cartes */}
          <div className="overflow-hidden px-2 md:px-0">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0 flex gap-3 md:gap-4 lg:gap-6"
                >
                  {testimonials
                    .slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView)
                    .map((testimonial) => (
                      <div 
                        key={testimonial.id} 
                        className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 md:p-6 flex-1 min-w-0 hover:shadow-2xl transition-shadow duration-300"
                      >
                        
                        {/* Étoiles */}
                        <div className="flex gap-1 mb-3 md:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Texte du témoignage */}
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-5 italic">
                          "{testimonial.text}"
                        </p>

                        {/* Profil */}
                        <div className="pt-3 md:pt-4 border-t border-gray-100">
                          <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-teal-500 to-emerald-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default TestimonialsSection;
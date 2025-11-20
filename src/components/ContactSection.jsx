import React, { useState } from 'react';
import { 
  Send,
  Mail,
  MessageSquare,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler l'envoi
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ email: '', message: '' });
      
      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Contactez-nous</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Une question ?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Nous sommes là pour vous aider
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Envoyez-nous un message et nous vous répondrons rapidement
            </p>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
            {isSubmitted ? (
              // Message de succès
              <div className="text-center py-8 md:py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-emerald-100 rounded-full mb-4 md:mb-6">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  Message envoyé !
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                
                {/* Champ Email */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-3">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="exemple@email.com"
                    className="w-full px-4 md:px-5 py-3 md:py-4 text-sm md:text-base border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-3">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Décrivez votre question ou problème..."
                    className="w-full px-4 md:px-5 py-3 md:py-4 text-sm md:text-base border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-none"
                  />
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                {/* Info rapide */}
                <p className="text-xs md:text-sm text-center text-gray-500">
                  ⚡ Réponse sous 24h • 🔒 Vos données sont protégées
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
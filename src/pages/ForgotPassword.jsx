import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle2, X, Mail } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    // Simule l'appel API (2 secondes)
    setTimeout(() => {
      // Stocke l'email pour la page suivante
      localStorage.setItem("reset_email", email);

      // Affiche le toast
      setToast({ message: " Code de réinitialisation envoyé !", type: "success" });

      // Redirige après un court délai (pour voir le toast)
      setTimeout(() => {
        navigate("/email-verification");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-white px-4 relative">
      {/* 🍞 Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl max-w-md bg-emerald-600 text-white">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <p className="font-medium">{toast.message}</p>
            <button 
              onClick={() => setToast(null)}
              className="ml-auto hover:opacity-80 transition-opacity"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* 🌀 Loader plein écran */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
            <div className="relative">
              <Mail className="h-16 w-16 text-emerald-600 animate-bounce" />
              <div className="absolute inset-0 h-16 w-16">
                <Loader2 className="h-16 w-16 text-yellow-400 animate-spin" />
              </div>
            </div>
            <p className="text-lg font-semibold text-emerald-800">Envoi en cours...</p>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse delay-100"></div>
              <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      )}

      {/* En-tête */}
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-emerald-100 p-4 rounded-full">
            <Mail className="h-10 w-10 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800">
          La Clinique Des Plantes
        </h1>
        <p className="text-sm text-emerald-600 mt-1">
          Réinitialisez votre mot de passe
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="w-full max-w-md p-5 bg-white rounded-xl shadow-lg border border-emerald-100">
        <p className="text-sm text-gray-600 text-center mb-6">
          Entrez votre adresse email pour recevoir un code de réinitialisation.
        </p>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow text-black"
            placeholder="ex: exemple@email.com"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading }
          style={{ backgroundColor: "#FACC15" }}
          className="w-full py-3 px-4 text-emerald-800 font-semibold rounded-xl hover:bg-yellow-300 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" /> Envoi en cours...
            </>
          ) : (
            "Envoyer le code"
          )}
        </button>
      </form>

      {/* Liens */}
      <div className="mt-6 text-center w-full max-w-md text-sm px-4">
        <a href="/login" className="text-yellow-500 hover:text-yellow-600 font-medium">
          Retour à la connexion
        </a>
        <p className="mt-3">
          Pas encore inscrit ?{" "}
          <a href="/register" className="text-yellow-500 hover:text-yellow-600 font-medium">
            Créer un compte
          </a>
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
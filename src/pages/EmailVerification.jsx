import React, { useState } from "react";
import { Loader2, CheckCircle2, X, Mail } from 'lucide-react';

const EmailVerification = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // 🔘 Simule le flux : clic → loader → toast
  const handleVerify = () => {
    setLoading(true);
    setToast(null); // masquer ancien toast

    // Simule la vérification (2s)
    setTimeout(() => {
      setLoading(false);
      // Affiche le toast de confirmation
      setToast({ message: " Email vérifié ! Connexion en cours...", type: "success" });

      // Masque le toast après 4s
      setTimeout(() => setToast(null), 4000);
    }, 2000);
  };

  // ——— Données statiques pour l’UI ———
  const email = "votre@email.com";
  const code = ["", "", "", "", "", ""];
  const canResend = true;
  const resendLoading = false;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-white px-4 relative">
      {/* 🍞 Toast de confirmation */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl max-w-md ${
            toast.type === 'success' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
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

      {/* 🌀 Loader attrayant (comme dans Login) */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
            <div className="relative">
              <Mail className="h-16 w-16 text-emerald-600 animate-bounce" />
              <div className="absolute inset-0 h-16 w-16">
                <Loader2 className="h-16 w-16 text-yellow-400 animate-spin" />
              </div>
            </div>
            <p className="text-lg font-semibold text-emerald-800">Vérification en cours...</p>
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
          Vérifiez votre adresse email
        </p>
      </div>

      {/* Formulaire */}
      <div className="w-full max-w-md p-5 bg-white rounded-xl shadow-lg border border-emerald-100">
        <p className="text-sm text-gray-600 text-center mb-2">
          Nous avons envoyé un code à :
        </p>
        <p className="text-sm font-semibold text-emerald-700 text-center mb-6">
          {email}
        </p>

        <div className="flex gap-2 justify-center mb-6">
          {code.map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
          ))}
        </div>

        {/* Bouton */}
        <button
          onClick={handleVerify}
          disabled={loading}
          style={{ backgroundColor: "#FACC15" }}
          className="w-full py-3 px-4 text-emerald-800 font-semibold rounded-xl hover:bg-yellow-300 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" /> Vérification...
            </>
          ) : (
            "Vérifier le code"
          )}
        </button>

        {/* Renvoi */}
        <div className="text-center mt-4">
          {canResend ? (
            <button
              disabled={resendLoading}
              className="text-sm text-yellow-500 hover:text-yellow-600 disabled:opacity-50 font-medium"
            >
              Renvoyer le code
            </button>
          ) : (
            <p className="text-sm text-gray-600">Renvoyer dans 30 s</p>
          )}
        </div>
      </div>

      {/* Liens */}
      <div className="mt-6 text-center w-full max-w-md text-sm px-4">
        <a href="/login" className="text-yellow-500 hover:text-yellow-600 font-medium">
          Retour à la connexion
        </a>
        <p className="mt-3">
          Problème ?{" "}
          <a href="/support" className="text-yellow-500 hover:text-yellow-600 font-medium">
            Contactez le support
          </a>
        </p>
      </div>

      {/* Animations CSS (identiques à Login) */}
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

export default EmailVerification;
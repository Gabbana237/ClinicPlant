import { useState, useEffect } from 'react';
import { Loader2, Leaf, CheckCircle2, X, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toast, setToast] = useState(null);

  // Vérifier si l'utilisateur vient de s'inscrire
  useEffect(() => {
    const justRegistered = sessionStorage.getItem('justRegistered');
    if (justRegistered === 'true') {
      showToast(' Connectez-vous pour continuer', 'success');
      sessionStorage.removeItem('justRegistered');
    }
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Simulation d'une requête API
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% de succès pour la démo

      if (success) {
        showToast('Connexion réussie ! Bienvenue', 'success');
        
        // Simuler la redirection
        setTimeout(() => {
          // window.location.href = '/dashboard'; // Décommentez en production
          setLoading(false);
        }, 1500);
      } else {
        setErrorMsg('Email ou mot de passe incorrect');
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-white px-4 relative">
      {/* Toast de confirmation */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl max-w-md ${
            toast.type === 'success' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
            {toast.type === 'success' ? (
              <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            ) : (
              <X className="h-6 w-6 flex-shrink-0" />
            )}
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

      {/* Loader plein écran */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
            <div className="relative">
              <Lock className="h-16 w-16 text-emerald-600 animate-bounce" />
              <div className="absolute inset-0 h-16 w-16">
                <Loader2 className="h-16 w-16 text-yellow-400 animate-spin" />
              </div>
            </div>
            <p className="text-lg font-semibold text-emerald-800">Connexion en cours...</p>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse delay-100"></div>
              <div className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      )}

      {/* En-tête avec icône */}
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-emerald-100 p-4 rounded-full">
            <Leaf className="h-10 w-10 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-2">
          La Clinique Des Plantes
        </h1>
        <p className="text-sm text-emerald-600">Connectez-vous pour accéder à vos diagnostics</p>
      </div>

      {/* Formulaire */}
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-xl border border-emerald-100">
        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-black"
            placeholder="votre@email.com"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-black"
            placeholder="••••••••"
          />
        </div>

        {/* Message d'erreur */}
        {errorMsg && (
          <div className="mb-5 p-4 rounded-xl text-sm font-medium flex items-center gap-3 bg-red-50 text-red-700 border border-red-200">
            <X className="h-5 w-5 flex-shrink-0" />
            {errorMsg}
          </div>
        )}

        {/* Bouton submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 px-4 bg-yellow-400 text-emerald-800 font-bold rounded-xl hover:bg-yellow-300 active:scale-98 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" /> Connexion...
            </>
          ) : (
            <>
              <Lock className="h-5 w-5" />
              Se connecter
            </>
          )}
        </button>
      </div>

      {/* Liens supplémentaires */}
      <div className="mt-6 text-center w-full max-w-md text-sm px-4">
        <a 
          href="/forgot" 
          className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
        >
          Mot de passe oublié ?
        </a>
        <p className="mt-3 text-gray-600">
          Pas encore inscrit ?{' '}
          <a 
            href="/register" 
            className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
          >
            Créer un compte
          </a>
        </p>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .active\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default Login;
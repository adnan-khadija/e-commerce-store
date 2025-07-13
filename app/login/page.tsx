// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-50 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Connexion</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-white border border-yellow-500 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="exemple@domaine.com"
            />
          </div>
          <div>
            <label className="block text-black mb-1">Mot de passe</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-white border border-yellow-500 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-gray-600 mt-4 text-sm text-center">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-yellow-500 hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
}

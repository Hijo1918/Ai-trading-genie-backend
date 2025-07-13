export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
        Welcome to <span className="text-indigo-500">Ai Trading Genie</span>
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10">
        Trade smarter with AI-powered strategies, real-time data, and crypto integrations.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => alert("Redirect to login")}
          className="px-6 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-md"
        >
          Login
        </button>

        <button
          onClick={() => alert("Redirect to signup")}
          className="px-6 py-3 text-lg font-semibold border border-indigo-600 text-indigo-400 hover:bg-indigo-900 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}

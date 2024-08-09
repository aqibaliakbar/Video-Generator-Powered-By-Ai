import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FiPlay, FiLink } from "react-icons/fi";

function App() {
  const [url, setUrl] = useState("");

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted URL:", url);
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <animated.div
          style={fadeIn}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold">
              <span className="block">URL to Video</span>
              <span className="gradient-text">Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transform any web content into engaging videos with just a URL.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FiLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full border-2 border-gray-700 rounded-lg bg-gray-800 text-white px-10 py-3 focus:outline-none focus:border-emerald-500 transition"
                  type="url"
                  placeholder="https://..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <button
                className="btn-primary w-full flex items-center justify-center space-x-2"
                type="submit"
              >
                <FiPlay />
                <span>Create Video</span>
              </button>
            </form>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="relative w-full pb-[177.78%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <div className="absolute inset-0 bg-gray-700 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Video Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </main>
    </div>
  );
}

export default App;

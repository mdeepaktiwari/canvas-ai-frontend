import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { ArrowIcon, ImageIcon, WriteIcon } from "../component/Icons";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CanvasAI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 font-medium">
              Unleash Your Creativity with AI-Powered Content & Image Generation
            </p>
            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              CanvasAI is your creative companion, combining cutting-edge artificial intelligence 
              with intuitive design. Transform ideas into compelling content and stunning visuals 
              in seconds. Whether you're crafting articles, optimizing SEO, or generating custom 
              images, CanvasAI empowers you to create with confidence and style.
            </p>
            {!isAuthenticated && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-200"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2.5 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
            What is CanvasAI?
          </h2>
          <p className="text-center text-gray-400 mb-8 text-sm">
            Your intelligent workspace for content creation and visual storytelling
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></span>
                Intelligent Content Creation
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Transform your writing with AI-powered tools that understand context and nuance. 
                Rewrite, expand, shorten, or generate complete articles with SEO optimization. 
                Our advanced algorithms preserve your unique voice while enhancing clarity, 
                engagement, and impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
                Stunning Visual Generation
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Bring your ideas to life with AI-generated images in multiple resolutions. 
                Create custom visuals that match your brand, style, and vision. From square 
                thumbnails to cinematic landscapes, generate professional-quality images 
                instantly and build your visual library effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isAuthenticated && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              to="/content"
              className="group relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg p-5 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <WriteIcon style="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">
                    Create Content
                  </h3>
                  <p className="text-xs text-gray-400">
                    Rewrite, expand, shorten & generate articles
                  </p>
                </div>
                <ArrowIcon style="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/image"
              className="group relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-5 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon style="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">
                    Create Images
                  </h3>
                  <p className="text-xs text-gray-400">
                    Generate custom visuals in any resolution
                  </p>
                </div>
                <ArrowIcon style="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Why Choose CanvasAI?
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to create, manage, and optimize your content
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-xl p-6 text-center hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">∞</div>
            <h3 className="text-white font-bold text-lg mb-2">
              Unlimited Creativity
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              No limits, no restrictions. Generate as much content and as many images 
              as your creativity demands. Your imagination is the only boundary.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-white font-bold text-lg mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Powered by state-of-the-art AI models, get results in seconds, not hours. 
              Focus on creating while CanvasAI handles the heavy lifting.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-xl p-6 text-center hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-white font-bold text-lg mb-2">
              Secure & Private
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your creative work is yours alone. Enterprise-grade security ensures 
              your data stays private and protected at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ServerStatusBanner() {
  return (
    <div className="w-full bg-indigo-600 text-white shadow-lg">
      <div className="server-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1 loading-dot">
              {[...Array(3)].map((_, i) => (
                <span key={i} />
              ))}
            </div>

            <div className="server-banner-text">
              <p className="text-sm font-medium animate-slide">
                Starting server... This will take a moment
              </p>
              <p className="text-sm font-medium animate-slide">
                Free tier requires ~30 seconds to wake up
              </p>
              <p className="text-sm font-medium animate-slide">
                Thanks for your patience! Almost ready...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

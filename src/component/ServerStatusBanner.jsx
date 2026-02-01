import React, { useEffect, useState } from "react";

export default function ServerStatusBanner({ visible = true }) {
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      return;
    }

    const hideTimeout = setTimeout(() => {
      setShouldRender(false);
    }, 500);

    return () => clearTimeout(hideTimeout);
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`server-status-banner w-full bg-indigo-600 text-white shadow-lg ${
        visible ? "" : "is-hidden"
      }`}
    >
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
                Server may take ~30 seconds to start
              </p>
              <p className="text-sm font-medium animate-slide">
                The backend server is hosted on free tier
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

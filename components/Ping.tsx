import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          {/* Animated ping */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary backdrop-opacity-75"></span>
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;

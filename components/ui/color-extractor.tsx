"use client"; // This is necessary for Client Components in the App Router

import React, { useState, useEffect, useRef } from "react";

export const ImageColorExtractor = ({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) => {
  const [color, setColor] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Handle CORS for external images

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      // Example: Get color of pixel at (10, 10)
      const pixelData = ctx.getImageData(10, 10, 1, 1).data;
      const rgbaColor = `rgba(${pixelData[0]}, ${pixelData[1]}, ${
        pixelData[2]
      }, ${pixelData[3] / 255})`;

      setColor(rgbaColor);
    };

    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div
      style={{
        background: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "30%",
      }}
      className={`overflow-hidden z-10 relative before:content-[' '] before:absolute before:w-full before:h-[150%] before:bg-gradient-to-tr before:bg-green-300/10 before:from-green-900/80 before:to-gray-900 before:blur-[80px] before:-z-[1] `}
    >
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {children}
    </div>
  );
};

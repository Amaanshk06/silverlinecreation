import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import CustomCursor from "./components/ui/CustomCursor"; // ⬅ import here

function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div>
      {!videoEnded ? (
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            display: "block",
            zIndex: 9999,
          }}
        >
          <source
            src={
              isMobile
                ? "/assets/videos/constructionMobile.mp4"
                : "/assets/videos/construction.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <CustomCursor /> {/* ⬅ cursor appears only after video ends */}
          <Routes />
        </>
      )}
    </div>
  );
}

export default App;

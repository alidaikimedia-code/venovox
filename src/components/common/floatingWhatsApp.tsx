"use client";

import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        id="voxy-whatsapp-button"
        className={visible ? "show" : "hide"}
        onClick={() => window.open("https://wa.me/60128008888", "_blank")}
      >
        <img
          src="/voxy.png"
          alt="Chat"
        />
      </div>

      <style jsx>{`
        #voxy-whatsapp-button {
          position: fixed;
          bottom: 5px;
          right: 5px;
          width: 250px;
          height: 250px;
          cursor: pointer;
          z-index: 999999999;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        #voxy-whatsapp-button img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }

        .hide {
          opacity: 0;
          transform: translateY(30px);
          pointer-events: none;
        }
      `}</style>
    </>
  );
}

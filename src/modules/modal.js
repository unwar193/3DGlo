"use strict";

import { animate } from "./helpers.js";

const modal = () => {
  const popup = document.querySelector(".popup"),
    popupBtn = document.querySelectorAll(".popup-btn"),
    popupContent = popup.querySelector(".popup-content")

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.style.display = "block";
      if (screen.width > 768) {
        animate({
          duration: 400,
          timing(timeFraction) {
              return Math.pow(timeFraction, 3)
          },
          draw(progress) {
            popupContent.style.top = 25 * progress  + '%';
          },
        });
      }
    });
  });

  popup.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      popup.style.display = "none";
    }
  });
};

export default modal;

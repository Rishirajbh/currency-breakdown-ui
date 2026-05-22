// render.js

import { breakdown } from "./breakdown";
import { currencyImages } from "./imageMap";
import { getMoneyVisual } from "./moneyVisuals";

import "./styles/style.css";

const DEFAULT_CONFIG = {
  noteScale: 0.75,
  coinScale: 0.08,

  overlapRatio: 0.35,
  maxOverlapRatio: 0.85,

  maxRotation: 1,
};

export function render({ element, amount, config = {} }) {
  const settings = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  const container =
    typeof element === "string" ? document.querySelector(element) : element;

  if (!container) {
    throw new Error("Container not found");
  }

  // Reset
  container.innerHTML = "";

  container.classList.add("cb-container");

  // Get visualization mode
  const visual = getMoneyVisual(amount);

  // Special visuals
  if (visual.type !== "notes") {
    renderSpecialVisual({
      container,
      image: visual.image,
      type: visual.type,
    });

    return;
  }

  // Notes mode
  const notes = breakdown(amount);

  const containerWidth = container.offsetWidth;

  const shortestSide = Math.min(container.offsetWidth, container.offsetHeight);

  // Dynamic sizing
  const dynamicScale = Math.max(
    0.28,
    settings.noteScale - notes.length * 0.035,
  );

  const noteWidth = shortestSide * dynamicScale;

  const coinSize = shortestSide * settings.coinScale;

  // Create containers
  const notesContainer = document.createElement("div");

  notesContainer.classList.add("cb-notes");

  const coinsContainer = document.createElement("div");

  coinsContainer.classList.add("cb-coins");

  const stackWrapper = document.createElement("div");

  stackWrapper.classList.add("cb-stack-wrapper");

  stackWrapper.appendChild(notesContainer);

  stackWrapper.appendChild(coinsContainer);

  container.appendChild(stackWrapper);

  // Render notes
  renderLooseNotes({
    notes,
    notesContainer,
    coinsContainer,
    noteWidth,
    coinSize,
    settings,
  });

  // Wait for images
  const allImages = Array.from(notesContainer.querySelectorAll("img"));

  Promise.all(
    allImages.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }),
  ).then(() => {
    const noteElements = notesContainer.querySelectorAll(".cb-note");

    if (!noteElements.length) return;

    const realNoteWidth = noteElements[0].getBoundingClientRect().width;

    const totalNotes = noteElements.length;

    const desiredWidth = containerWidth * 0.9;

    let overlap =
      (realNoteWidth * totalNotes - desiredWidth) / (totalNotes - 1);

    overlap = Math.max(overlap, realNoteWidth * settings.overlapRatio);

    overlap = Math.min(overlap, realNoteWidth * settings.maxOverlapRatio);

    noteElements.forEach((note, index) => {
      if (index !== 0) {
        note.style.marginLeft = `-${overlap}px`;
      }
    });
  });
}

/* =========================
   LOOSE NOTES
========================= */

function renderLooseNotes({
  notes,
  notesContainer,
  coinsContainer,
  noteWidth,
  coinSize,
  settings,
}) {
  notes.forEach((note, index) => {
    const img = document.createElement("img");

    const isCoin = note <= 5;

    img.src = currencyImages[note];

    img.classList.add(isCoin ? "cb-coin" : "cb-note");

    img.style.width = isCoin ? `${coinSize}px` : `${noteWidth}px`;

    img.style.zIndex = index;

    img.style.animationDelay = `${index * 0.12}s`;

    const rotation =
      Math.random() * settings.maxRotation * 2 - settings.maxRotation;

    img.style.setProperty("--rotation", `${rotation}deg`);

    if (isCoin) {
      coinsContainer.appendChild(img);
    } else {
      notesContainer.appendChild(img);
    }
  });
}

/* =========================
   SPECIAL VISUALS
========================= */

function renderSpecialVisual({ container, image, type }) {
  const wrapper = document.createElement("div");

  wrapper.classList.add("cb-special-wrapper");

  const img = document.createElement("img");

  img.src = image;

  img.classList.add("cb-special-visual");

  img.classList.add(`cb-${type}`);

  wrapper.appendChild(img);

  container.appendChild(wrapper);
}

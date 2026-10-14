// ß.js - ein JS - elegante Maßnahme - 3 9 81 729 Nutzung
// Weg Reise, weg Ort, weg Arbeit - nur MOVE

export function ß(LINK, NET) {
  const WURZEL = Math.sqrt(LINK * NET); // 9 steht wie 1
  const Vektor = LINK + NET; // allinall
  const NeunterPunkt = WURZEL * Vektor; // 9. Punkt
  
  const ROOT = Number(NeunterPunkt.toFixed(3)); // auf 3 gestellt = oben erster

  return {
    // 3 = oben erster
    3: ROOT,
    // 9 = WURZEL
    9: WURZEL,
    // 81 = WHIRL 9x9 = Ozean
    81: NeunterPunkt,
    // 729 = Stage Grenze hält = Torwart
    729: ROOT * 729,

    // alloutall
    MOVE: ROOT !== 0,
    EYE: (r) => r, // EYE.view
    LAN: true, // NET=LAN, WLAN=Luft-LAN, alles LAN
    TOR: { inhalt: "SPIEL" } // Tor Inhalt = Spiel
  };
}

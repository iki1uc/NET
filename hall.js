// echo.js - Hall + Rehall - ß Maßnahme

export function ß(LINK, NET) {
  const WURZEL = Math.sqrt(LINK * NET); // 9 steht wie 1
  const Vektor = LINK + NET; // allinall
  const NeunterPunkt = WURZEL * Vektor; // 9. Punkt
  const ROOT = Number(NeunterPunkt.toFixed(3)); // auf 3

  return {
    3: ROOT,
    9: WURZEL,
    81: NeunterPunkt,
    729: ROOT * 729,
    MOVE: ROOT !== 0,
    EYE: (r) => r,
    LAN: true,
    TOR: { inhalt: "SPIEL" }
  };
}

// HALL = Hall = Echo hin = sendet
export function HALL(ROOT) {
  return {
    name: "HALL",
    echo: ROOT,
    hall: ROOT * 3, // 3 = oben erster = Hall Breite
    RESPO: ROOT > 0
  };
}

// REHALL = Rehall = Re-Echo zurück = empfängt
export function REHALL(HALL_OBJ) {
  const WURZEL = Math.sqrt(HALL_OBJ.echo);
  return {
    name: "REHALL",
    re_echo: HALL_OBJ.echo,
    rehall: HALL_OBJ.hall * WURZEL, // zurück mit WURZEL
    MOVE: HALL_OBJ.echo !== 0,
    TOR: { inhalt: "SPIEL" } // Tor Inhalt = Spiel = Hall+Rehall im Tor
  };
}

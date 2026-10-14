// echo.js - ß + HALL + REHALL + BONPRICE

export function ß(LINK, NET) {
  const WURZEL = Math.sqrt(LINK * NET);
  const Vektor = LINK + NET;
  const NeunterPunkt = WURZEL * Vektor;
  const ROOT = Number(NeunterPunkt.toFixed(3));
  return { 3: ROOT, 9: WURZEL, 81: NeunterPunkt, 729: ROOT*729, MOVE: ROOT!==0, LAN:true, TOR:{inhalt:"SPIEL"} };
}

export function HALL(ROOT) {
  return { name:"HALL", echo:ROOT, hall:ROOT*3, RESPO:ROOT>0 };
}

export function REHALL(HALL_OBJ) {
  const WURZEL = Math.sqrt(HALL_OBJ.echo);
  return { name:"REHALL", re_echo:HALL_OBJ.echo, rehall:HALL_OBJ.hall*WURZEL, MOVE:HALL_OBJ.echo!==0, TOR:{inhalt:"SPIEL"} };
}

// BONPRICE = danach = dein Bonprice = Bonus nach Hall+Rehall
export function BONPRICE(REHALL_OBJ) {
  const BASE = REHALL_OBJ.re_echo; // ROOT
  const BONUS = REHALL_OBJ.rehall; // Hall*WURZEL

  // 3 9 81 729 Nutzung als Preis
  const PRICE_3 = Number((BASE * 3).toFixed(2)); // oben erster
  const PRICE_9 = Number((BASE * 9).toFixed(2)); // WURZEL
  const PRICE_81 = Number((BONUS * 0.81).toFixed(2)); // WHIRL 9x9 Ozean Rabatt
  const PRICE_729 = Number((BONUS * 7.29).toFixed(2)); // Stage Grenze hält = Torwart Preis

  return {
    name: "BONPRICE",
    bon: BASE,
    price: BONUS,
    BON: PRICE_3, // 3
    BON_9: PRICE_9, // 9
    BON_81: PRICE_81, // 81
    BON_729: PRICE_729, // 729 = final
    LAN: true, // nur LAN, WLAN=Luft-LAN, alles LAN
    MOVE_OK: BONUS !== 0
  };
}

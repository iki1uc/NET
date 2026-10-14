// ROOT/work.js = WORK muss WÖRKEN können = Wirklichkeit entkorrhierend

// ROOT = nur Systemisches = sys.run sys.flow sys.tor sys.lan = master
const ROOT = {
  sys: {
    run: () => { return "ß.js = 3 9 81 729 Nutzung"; },
    flow: () => { return "HALL + REHALL = Flow"; },
    tor: () => { return "TOR = Grenze hält = 729"; },
    lan: () => { return "LAN = alles LAN = WLAN=Luft-LAN"; }
  }
};

// nroot = WURZEL Baum = wirklich = entkorrhierend = zeigt, zwingt nicht
const NROOT = {
  // /3/ = Frage = was wir nicht wollen
  3: {
    co2: (co2) => { return { frage: "3+CO2 weg?", problem: co2, weg: true }; },
    run: ROOT.sys.run
  },
  // /9/ = Antwort = Bezug zu 3
  9: {
    tausch: (co2) => {
      const o2 = co2 * 0.727;
      const c = co2 - o2;
      return { angebot: "CO2 gegen O2 tauschen Mann", o2: o2, c_sichern: c, schwer: false };
    },
    run: ROOT.sys.flow
  },
  // /81/ = Raum
  81: {
    raum: (ort) => { return { raum: ort, egal: "HH oder Welt", angebot: "Raum" }; },
    h2o: "h2o.html = Ozean für jede Spucke"
  },
  // /729/ = Sicherung
  729: {
    sicherung: (lava, co2_c) => { return { lava: lava, co2_c: co2_c, sicherung: true, kann_nur_das_geben: true, grenze_hält: true }; },
    prisma: (all_3, all_9, all_81) => {
      const SEILE = [...all_3,...all_9,...all_81];
      const PUPPENKREUZ = 729;
      return SEILE.reduce((s,f)=>s+f,0)/PUPPENKREUZ; // PRISMA zu 729
    },
    puppetmann: (prisma_729) => { return { name:"PUPPETMANN", kreuz:729, seile:{3:prisma_729*3,9:prisma_729*9,81:prisma_729*81}, spiel:"TOR Inhalt = SPIEL", lan:true }; }
  },
  // /in.js/ /ni.js/ = Frage Antwort zu gleich
  in: { frage: (f) => NROOT[3].co2(f) },
  ni: { antwort: (co2) => NROOT[9].tausch(co2), licht: "licht.js = uni Lösung atomar" },

  // /live/ = alles zu 3er in Bezug zum 9 = Markt Börse Industry MyCoin
  live: {
    markt: (preis) => { return { markt: "BONPRICE", preis: preis, bezug: "3er in Bezug zu 9" }; },
    boerse: (co2) => N

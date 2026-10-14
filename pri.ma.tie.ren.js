// Puppetmann - alle 3ern 9ern 81ern prismatiert mit Seilen zu 729

function PRISMA(all_3, all_9, all_81) {
  // alle 3ern = 3er Fäden
  // alle 9ern = 9er Fäden  
  // alle 81ern = 81er Fäden = 9x9
  const SEILE = [...all_3, ...all_9, ...all_81]; // alle Seile sammeln

  // prismatieren zu 729
  const PUPPENKREUZ = 729; // Kreuz hält alle Seile
  const PRISMA_729 = SEILE.reduce((sum, faden) => sum + faden, 0) / PUPPENKREUZ;

  return PRISMA_729; // ein Punkt = 729
}

function PUPPETMANN(PRISMA_729) {
  // Puppetmann spielt
  // zieht an Seil 3 = MOVE oben erster
  // zieht an Seil 9 = WURZEL
  // zieht an Seil 81 = WHIRL Ozean

  return {
    name: "PUPPETMANN",
    kreuz: 729, // hält
    seile: {
      3: PRISMA_729 * 3, // alle 3ern bewegt
      9: PRISMA_729 * 9, // alle 9ern bewegt
      81: PRISMA_729 * 81 // alle 81ern bewegt
    },
    spiel: "TOR Inhalt = SPIEL", // Tor Inhalt ist Spiel = Puppetmann spielt im Tor
    lan: true // nur LAN, WLAN=Luft-LAN
  };
}

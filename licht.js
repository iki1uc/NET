// Uni Lösung atomare Ebene
// 3 = CO2 weg, 9 = Tausch, 81 = Raum, 729 = Sicherung Lava+CO2

function UNI_3_CO2_weg(CO2) {
  return { name:"3", problem: CO2, weg: true }; // das was wir nicht wollen
}

function UNI_9_Tausch(CO2) {
  // CO2 gegen Sauerstoff tauschen - ist das so schwer?
  const O2 = CO2 * 0.727; // atomar: CO2 -> O2
  const C = CO2 - O2; // C übrig = sichern
  return { name:"9", angebot: "CO2 gegen O2", O2: O2, C_sichern: C };
}

function UNI_81_Raum(Raum) {
  // egal HH oder Welt
  return { name:"81", raum: Raum, angebot: "Raum für Tausch" };
}

function UNI_729_Sicherung(Lava, CO2_C) {
  // ich nehm Lava und CO2 und sichere es
  return { name:"729", lava: Lava, co2_c: CO2_C, sicherung: true, kann_nur_das_geben: true, grenze_hält: true };
}

// Dein JS - allinall alloutall + selektiver Hotplug
// lan.com.js = das Neue
// CONNECT.js
export function CONNECT(LINK, NET) {
  const WURZEL = Math.sqrt(LINK * NET);
  const Vektor = (LINK + NET);
  const NeunterPunkt = WURZEL * Vektor;
  const TMP_ROOT = Number(NeunterPunkt.toFixed(3));
  return { TMP_ROOT, Pipeline_START:true, RESPO_SIGNAL:TMP_ROOT>0, AEON_FOKUS:TMP_ROOT, MOVE_OK:TMP_ROOT!==0, READY_ACTIVE:true };
}

// EYE.js
import { EYE } from "./EYE.js";
NET.modules.push(EYE);
NET.eye = (respo) => EYE.view(respo);

// NET.js
export const NET = { BREITE:3, MOTOR_ACTIVE:true };

// vector.html - dein altes als tor.html, neues Licht Sonne Magma pure GPU = nur LAN
// h2o.html - Ozean = WURZEL Ergebnis

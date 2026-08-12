import { EYE } from "./EYE.js";

NET.modules.push(EYE);

NET.eye = function(respo) {
  return EYE.view(respo);
};

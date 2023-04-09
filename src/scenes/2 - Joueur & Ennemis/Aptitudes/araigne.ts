import Entite from "../Entite";

export function toucheEspace__SPACE(araigne: Entite, input?: any) {
  araigne.body.setVelocityY(-400);
}

// You can write more code here

/* START OF COMPILED CODE */

import BaseEntite from "./BaseEntite";
/* START-USER-IMPORTS */
import { Aptitudes } from "./Aptitudes/_autoImport"
import BaseJeu from "../0 - Initialisation/BaseJeu";
/* END-USER-IMPORTS */

export default interface Entite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Entite extends BaseEntite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 21, y ?? -1, texture || "huipat", frame ?? "huipat.png");

		scene.physics.add.existing(this, false);
		this.body.setSize(200, 189, false);

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

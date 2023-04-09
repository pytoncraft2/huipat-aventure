
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import BaseTouteEntite from "./BaseTouteEntite";
import BaseDetecteurs from "./BaseDetecteurs";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Araigne {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Araigne extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 137, y ?? 35);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// baseTouteEntite
		const baseTouteEntite = new BaseTouteEntite(scene, 0, 28, "araigne", "araigne.png");
		this.add(baseTouteEntite);

		// baseDetecteurs
		const baseDetecteurs = new BaseDetecteurs(scene, 110, 1);
		this.add(baseDetecteurs);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

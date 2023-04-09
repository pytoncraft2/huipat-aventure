
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import BaseTouteEntite from "./BaseTouteEntite";
import BaseDetecteurs from "./BaseDetecteurs";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Huipat {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Huipat extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 119, y ?? 73);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// baseTouteEntite
		const baseTouteEntite = new BaseTouteEntite(scene, 0, 18);
		this.add(baseTouteEntite);

		// baseDetecteurs
		const baseDetecteurs = new BaseDetecteurs(scene, 9, 8);
		this.add(baseDetecteurs);

		// baseDetecteurs_1
		const baseDetecteurs_1 = new BaseDetecteurs(scene, 171, 12);
		this.add(baseDetecteurs_1);

		this.baseTouteEntite = baseTouteEntite;
		this.baseDetecteurs = baseDetecteurs;
		this.baseDetecteurs_1 = baseDetecteurs_1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public baseTouteEntite: BaseTouteEntite;
	public baseDetecteurs: BaseDetecteurs;
	public baseDetecteurs_1: BaseDetecteurs;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

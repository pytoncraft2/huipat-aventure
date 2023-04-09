
// You can write more code here

/* START OF COMPILED CODE */

import BaseTouteEntite from "./BaseTouteEntite";
import BaseDetecteurs from "./BaseDetecteurs";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Huipat {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Huipat extends BaseTouteEntite {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 119, y ?? 73);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// baseDetecteurs_1
		const baseDetecteurs_1 = new BaseDetecteurs(scene, 52, 13);
		baseDetecteurs_1.scaleX = 1;
		baseDetecteurs_1.scaleY = 1;
		this.add(baseDetecteurs_1);

		// huipat_png
		const huipat_png = scene.add.image(-20, 24, "huipat", "huipat.png");
		this.add(huipat_png);

		this.baseDetecteurs_1 = baseDetecteurs_1;

		/* START-USER-CTR-CODE */
		console.log(this.actionGlobal());
		/* END-USER-CTR-CODE */
	}

	public baseDetecteurs_1: BaseDetecteurs;

	/* START-USER-CODE */
	preUpdate() {
		console.log("PRE UPD");

		this.droite()
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

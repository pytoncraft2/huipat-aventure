
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerController from "../../components/PlayerController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BoutonJoueur extends Phaser.GameObjects.Ellipse {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 1.8150359184173324;
		this.scaleY = 1.8150359184173324;
		this.setOrigin(0, 0.5);
		this.alpha = 0.3;
		this.isFilled = true;

		// this (components)
		new PlayerController(this);

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

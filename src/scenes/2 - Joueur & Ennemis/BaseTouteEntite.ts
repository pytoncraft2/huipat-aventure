
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface BaseTouteEntite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class BaseTouteEntite extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 192, y ?? 153.96633260508813);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// huipat_png
		const huipat_png = scene.add.image(-83, -28, "huipat", "huipat.png") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(huipat_png, false);
		huipat_png.body.setSize(162, 178, false);
		this.add(huipat_png);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	actionGlobal() {
		console.log("ACTION GLOBAL");
	}

	droite() {
		this.body.setVelocityX(40);
	}

	gauche() {
		this.body.setVelocityX(-40);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

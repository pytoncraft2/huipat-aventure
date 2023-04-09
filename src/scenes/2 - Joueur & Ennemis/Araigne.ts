
// You can write more code here

/* START OF COMPILED CODE */

import BaseTouteEntite from "./BaseTouteEntite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Araigne {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Araigne extends BaseTouteEntite {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 129, y ?? 53);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// araigne_png
		const araigne_png = scene.add.image(0, 0, "araigne", "araigne.png");
		this.add(araigne_png);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	preUpdate() {
		console.log("ok");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

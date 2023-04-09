
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

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	actionGlobal() {
		console.log("ACTION GLOBAL");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseDetecteurs extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 468.5408192896793, y ?? 200);

		// detecteur
		const detecteur = scene.add.rectangle(76, 18, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(detecteur, false);
		detecteur.body.moves = false;
		detecteur.body.pushable = false;
		detecteur.body.setSize(128, 128, false);
		detecteur.isFilled = true;
		this.add(detecteur);

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

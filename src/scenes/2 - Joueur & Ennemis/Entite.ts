
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Entite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Entite extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "liste_atlas", frame ?? "huipat_atlas.png");

		scene.physics.add.existing(this, false);
		this.body.setSize(200, 189, false);

		/* START-USER-CTR-CODE */
		this.body.setSize(this.displayWidth, this.displayHeight);
		const r = this.scene.textures.get('liste_atlas')
		console.log(r);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	preUpdate() {
		//console.log(this);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

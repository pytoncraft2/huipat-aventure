
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// jouer
		const jouer = this.add.text(400, 300, "", {});
		jouer.setOrigin(0.5, 0.5);
		jouer.text = "Jouer";
		jouer.setStyle({ "fontSize": "26px" });

		this.jouer = jouer;

		this.events.emit("scene-awake");
	}

	public jouer!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.jouer
			.setInteractive()
			.on('pointerdown', () => this.scene.start('Tuto'));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tuto extends BaseJeu {

	constructor() {
		super("Tuto");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// tuto
		const tuto = this.add.text(400, 300, "", {});
		tuto.setOrigin(0.5, 0.5);
		tuto.text = "Tuto";
		tuto.setStyle({ "fontSize": "26px" });

		this.tuto = tuto;

		this.events.emit("scene-awake");
	}

	public tuto!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.tuto
			.setInteractive()
			.on('pointerdown', () => this.scene.start('SceneMain'));
		this.testExtendBaseJeu()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
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
		const tuto = this.add.text(960, 540, "", {});
		tuto.setOrigin(0.5, 0.5);
		tuto.text = "Tuto";
		tuto.setStyle({ "fontSize": "26px" });

		// infosScene
		const infosScene = new InfosScene(this, 960, 439);
		this.add.existing(infosScene);

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

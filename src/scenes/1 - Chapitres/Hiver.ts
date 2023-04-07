
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InfosScene from "../3 - Utilitaires/InfosScene";
import Entite from "./Entite";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hiver extends Phaser.Scene {

	constructor() {
		super("Hiver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// infosScene
		const infosScene = new InfosScene(this, 980, 478, "fond2");
		this.add.existing(infosScene);

		// entite
		const entite = new Entite(this, 871, 298);
		this.add.existing(entite);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 865, 508);
		this.add.existing(platformePrefab);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

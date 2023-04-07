
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EcranInfo from "../3 - Utilitaires/EcranInfo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	editorCreate(): void {

		// ecranInfo
		const ecranInfo = new EcranInfo(this, -4, 17);
		this.add.existing(ecranInfo);

		this.ecranInfo = ecranInfo;

		this.events.emit("scene-awake");
	}

	public ecranInfo!: EcranInfo;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		console.log("ZZZZZZZZZZ: ", this.ecranInfo);
		
	}

	testExtendBaseJeu() {
		console.log(this.ecranInfo);
		
		console.log("Base Jeu extended");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

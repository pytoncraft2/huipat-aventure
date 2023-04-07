
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	editorCreate(): void {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	testExtendBaseJeu() {
		console.log("Base Jeu extended");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

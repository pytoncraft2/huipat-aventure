
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseEntite extends Phaser.GameObjects.Sprite {

	editorCreate(): void {

		// lists
		const list: Array<any> = [];

		this.list = list;

		this.events.emit("scene-awake");
	}

	private list!: Array<any>;

	/* START-USER-CODE */
	events!: Phaser.Events.EventEmitter

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

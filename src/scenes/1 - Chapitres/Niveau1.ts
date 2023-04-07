
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseJeu {

	constructor() {
		super("SceneMain");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(400, 300, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Niveau 1";
		text_1.setStyle({ "fontSize": "26px" });

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

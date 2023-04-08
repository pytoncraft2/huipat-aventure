
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hiver extends BaseJeu {

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

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1628, 626);
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 545, 811);
		platformes.add(platformePrefab_1);

		this.platformes = platformes;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Layer;

	/* START-USER-CODE */

	// Write your code here

	// create() {

	// 	this.editorCreate();
	// 	this.go();
	// 	this.fermerEcranTransitionNiveau();
	// 	this.liste_platformes.removeAll().list.push(...this.platformes.list);
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

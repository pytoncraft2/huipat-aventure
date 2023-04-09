
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
import Entite from "../2 - Joueur & Ennemis/Entite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Lac extends BaseJeu {

	constructor() {
		super("Lac");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// infosScene
		const infosScene = new InfosScene(this, 960, 540, "fond3");
		this.add.existing(infosScene);

		// platformes
		const platformes = this.add.layer();

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 1016, 980);
		platformes.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 1093, 625);
		platformes.add(platformePrefab_2);

		// entites
		const entites = this.add.layer();

		// entite
		const entite = new Entite(this, 866, 531, "fille", "RunRight01.png");
		entites.add(entite);

		// entite_1
		const entite_1 = new Entite(this, 1225, 530, "fille", "RunRight01.png");
		entites.add(entite_1);

		// entite_2
		const entite_2 = new Entite(this, 1725, 566, "araigne", "araigne.png");
		entites.add(entite_2);

		// entite_3
		const entite_3 = new Entite(this, 1060, 745, "araigne", "araigne.png");
		entites.add(entite_3);

		this.platformes = platformes;
		this.entites = entites;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Layer;
	public entites!: Phaser.GameObjects.Layer;

	/* START-USER-CODE */

	// Write your code here
	initSceneCourante() {
		this.editorCreate();
		this.liste_platformes.removeAll().list.push(...this.platformes.list);
		this.liste_entite.list.push(...this.entites.list);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

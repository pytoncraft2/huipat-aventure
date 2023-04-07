
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
import Entite from "./Entite";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
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

		// infosScene
		const infosScene = new InfosScene(this, 960, 439);
		this.add.existing(infosScene);

		// entité
		const entit_ = new Entite(this, 960, 200);
		this.add.existing(entit_);

		// tuto
		const tuto = this.add.text(960, 540, "", {});
		tuto.setOrigin(0.5, 0.5);
		tuto.text = "Tuto";
		tuto.setStyle({ "color": "#000000ff", "fontSize": "26px" });

		// platformes_niveau_3
		const platformes_niveau_3 = this.add.container(0, 400);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 1728, 0);
		platformes_niveau_3.add(platformePrefab_6);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 0, 200);
		platformes_niveau_3.add(platformePrefab_7);

		// platformePrefab_8
		const platformePrefab_8 = new PlatformePrefab(this, 1728, 400);
		platformes_niveau_3.add(platformePrefab_8);

		// platformes_niveau_2
		const platformes_niveau_2 = this.add.container(960, 400);
		platformes_niveau_2.visible = false;

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 0, 200);
		platformes_niveau_2.add(platformePrefab_3);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 0, 400);
		platformes_niveau_2.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 0, 0);
		platformes_niveau_2.add(platformePrefab_5);

		// platformes_niveau_1
		const platformes_niveau_1 = this.add.container(597, 358);
		platformes_niveau_1.visible = false;

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 363, 242);
		platformes_niveau_1.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 0, 0);
		platformes_niveau_1.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 605, 489);
		platformes_niveau_1.add(platformePrefab_2);

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
			.on('pointerdown', () => this.scene.start('Hiver'));
		this.creerEcranTransitionNiveau().fermer(() => {
			console.log("JEU peut commencer");
		})
		console.log(this.liste_colision_platforme);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

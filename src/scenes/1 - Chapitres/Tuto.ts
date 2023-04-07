
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
import ListeColisionPlatforme from "../../components/ListeColisionPlatforme";
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

		// huipat_atlas_png
		const huipat_atlas_png = this.add.image(960, 600, "liste_atlas", "huipat_atlas.png");

		// huipat_atlas_png (components)
		new ListeColisionPlatforme(huipat_atlas_png);

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
		this.creerEcranTransitionNiveau().fermer(() => {
			console.log("JEU peut commencer");
		})
		console.log(this.liste_colision_platforme);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

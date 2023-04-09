
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
import InteractiveObjet from "../../components/InteractiveObjet";
import CommencerSceneAuClique from "../../components/CommencerSceneAuClique";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
import Entite from "../2 - Joueur & Ennemis/Entite";
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

		// tuto
		const tuto = this.add.text(960, 540, "", {});
		tuto.setOrigin(0.5, 0.5);
		tuto.text = "Tuto";
		tuto.setStyle({ "color": "#000000ff", "fontSize": "26px" });

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1344, 400);
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 768, 600);
		platformes.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 1344, 800);
		platformes.add(platformePrefab_2);

		// entites
		const entites = this.add.layer();

		// entite
		const entite = new Entite(this, 960, 200, "araigne", "araigne.png");
		entites.add(entite);

		// entite_1
		const entite_1 = new Entite(this, 1344, 200, "araigne", "araigne.png");
		entites.add(entite_1);

		// tuto (components)
		new InteractiveObjet(tuto);
		const tutoCommencerSceneAuClique = new CommencerSceneAuClique(tuto);
		tutoCommencerSceneAuClique.sceneKey = "Hiver";

		this.tuto = tuto;
		this.platformes = platformes;
		this.entites = entites;

		this.events.emit("scene-awake");
	}

	public tuto!: Phaser.GameObjects.Text;
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

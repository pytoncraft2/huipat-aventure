
// You can write more code here

/* START OF COMPILED CODE */

import BaseJeu from "../0 - Initialisation/BaseJeu";
import InfosScene from "../3 - Utilitaires/InfosScene";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
import Entite from "../2 - Joueur & Ennemis/Entite";
import InteractiveObjet from "../../components/InteractiveObjet";
import CommencerSceneAuClique from "../../components/CommencerSceneAuClique";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Nuit extends BaseJeu {

	constructor() {
		super("Nuit");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// infosScene
		const infosScene = new InfosScene(this, 960, 540, "fond4");
		this.add.existing(infosScene);

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1960, 682);
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 1070, 900);
		platformes.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 356, 466);
		platformes.add(platformePrefab_2);

		// entites
		const entites = this.add.layer();

		// entite
		const entite = new Entite(this, 1199, 246, "liste_atlas", "chauve_run.png");
		entites.add(entite);

		// text_1
		const text_1 = this.add.text(815, 590, "", {});
		text_1.text = "Suivant";
		text_1.setStyle({ "fontSize": "26px" });

		// text_1 (components)
		new InteractiveObjet(text_1);
		const text_1CommencerSceneAuClique = new CommencerSceneAuClique(text_1);
		text_1CommencerSceneAuClique.sceneKey = "Lac";

		this.platformes = platformes;
		this.entites = entites;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Layer;
	public entites!: Phaser.GameObjects.Layer;

	/* START-USER-CODE */
	initSceneCourante() {
		this.editorCreate();
		this.liste_platformes.removeAll().list.push(...this.platformes.list);
		this.liste_entite.list.push(...this.entites.list);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

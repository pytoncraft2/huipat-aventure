
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import IndicationNiveau from "../3 - Utilitaires/IndicationNiveau";
import Entite from "../2 - Joueur & Ennemis/Entite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	initElementBase(): void {

		// indicationNiveau
		const indicationNiveau = new IndicationNiveau(this, -1, 2);
		this.add.existing(indicationNiveau);

		// liste_entite
		const liste_entite = this.add.layer();

		// entite
		const entite = new Entite(this, 355, -65);
		liste_entite.add(entite);

		// liste_platformes
		const liste_platformes = this.add.layer();

		// colision_platformes_entites
		const colision_platformes_entites = this.physics.add.collider(liste_platformes.list, liste_entite.list);

		this.indicationNiveau = indicationNiveau;
		this.liste_entite = liste_entite;
		this.liste_platformes = liste_platformes;
		this.colision_platformes_entites = colision_platformes_entites;

		this.events.emit("scene-awake");
	}

	public indicationNiveau!: IndicationNiveau;
	public liste_entite!: Phaser.GameObjects.Layer;
	public liste_platformes!: Phaser.GameObjects.Layer;
	public colision_platformes_entites!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */

	// Write your code here
	create() {
		console.log("CREATE DE BASE JEU");
		this.cameras.main.fadeIn(300, 0, 0, 0)
		this.initElementBase();
		this.initSceneCourante();
		this.indicationNiveau.fermer()
	}

	initSceneCourante() {
		console.log("INIT SCENE BASE JEU");
	}

	passageAuNiveauSuivant(cleScene: any) {
		this.cameras.main.fadeOut(500, 0, 0, 0)
		this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam: any, effect: any) => {
			this.scene.start(cleScene)
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Entite from "../2 - Joueur & Ennemis/Entite";
import IndicationNiveau from "../3 - Utilitaires/IndicationNiveau";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	initElementBase(): void {

		// entite
		const entite = new Entite(this, 387, 383);
		this.add.existing(entite);

		// liste_platformes
		const liste_platformes = this.add.layer();

		// indicationNiveau
		const indicationNiveau = new IndicationNiveau(this, -1, 39);
		this.add.existing(indicationNiveau);

		// colision_platformes_entites
		const colision_platformes_entites = this.physics.add.collider(liste_platformes.list, entite);

		this.entite = entite;
		this.liste_platformes = liste_platformes;
		this.indicationNiveau = indicationNiveau;
		this.colision_platformes_entites = colision_platformes_entites;

		this.events.emit("scene-awake");
	}

	public entite!: Entite;
	public liste_platformes!: Phaser.GameObjects.Layer;
	public indicationNiveau!: IndicationNiveau;
	public colision_platformes_entites!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */

	// Write your code here
	create() {
		console.log("CREATE DE BASE JEU");
		this.cameras.main.fadeIn(1000, 0, 0, 0)
		this.initElementBase();
		this.initSceneCourante()
		this.indicationNiveau.fermer()
	}

	ouvrirEcranTransitionNiveau() {
		this.indicationNiveau.ouvrir()
	}

	fermerEcranTransitionNiveau() {
		this.indicationNiveau.fermer()
	}

	ecranInfoExiste() {
		return this.indicationNiveau;
	}

	initSceneCourante() {
		console.log("INIT SCENE BASE JEU");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

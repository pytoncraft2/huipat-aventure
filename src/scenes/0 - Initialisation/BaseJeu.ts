
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Entite from "../2 - Joueur & Ennemis/Entite";
import EcranInfo from "../3 - Utilitaires/EcranInfo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	initElementBase(): void {

		// entite
		const entite = new Entite(this, 387, 383);
		this.add.existing(entite);

		// liste_platformes
		const liste_platformes = this.add.layer();

		// ecranInfo
		const ecranInfo = new EcranInfo(this, -4, 17);
		this.add.existing(ecranInfo);

		// colision_platformes_entites
		const colision_platformes_entites = this.physics.add.collider(liste_platformes.list, entite);

		this.entite = entite;
		this.liste_platformes = liste_platformes;
		this.ecranInfo = ecranInfo;
		this.colision_platformes_entites = colision_platformes_entites;

		this.events.emit("scene-awake");
	}

	public entite!: Entite;
	public liste_platformes!: Phaser.GameObjects.Layer;
	public ecranInfo!: EcranInfo;
	public colision_platformes_entites!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */

	// Write your code here
	create() {
		console.log("CREATE DE BASE JEU");
		this.initElementBase();
		this.initSceneCourante()
		this.ecranInfo.fermer()
		// this.tuto
		// 	.setInteractive()
		// 	.on('pointerdown', () => this.scene.start('Hiver'));
		// 	this.go();
		// 	this.fermerEcranTransitionNiveau();		
		//this.editorCreate();
	}

	ouvrirEcranTransitionNiveau() {
		this.ecranInfo.ouvrir()
	}

	fermerEcranTransitionNiveau() {
		this.ecranInfo.fermer()
	}

	ecranInfoExiste() {
		return this.ecranInfo;
	}

	initSceneCourante() {
		console.log("INIT SCENE BASE JEU");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

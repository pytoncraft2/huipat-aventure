
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EcranInfo from "../3 - Utilitaires/EcranInfo";
import Entite from "../2 - Joueur & Ennemis/Entite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	go(): void {

		// ecranInfo
		const ecranInfo = new EcranInfo(this, -4, 17);
		this.add.existing(ecranInfo);

		// entite
		const entite = new Entite(this, 387, 383);
		this.add.existing(entite);

		// platformes
		const platformes = this.add.layer();

		// collider
		const collider = this.physics.add.collider(platformes.list, entite);

		this.ecranInfo = ecranInfo;
		this.entite = entite;
		this.platformes = platformes;
		this.collider = collider;

		this.events.emit("scene-awake");
	}

	public ecranInfo!: EcranInfo;
	public entite!: Entite;
	public platformes!: Phaser.GameObjects.Layer;
	public collider!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */

	// Write your code here
	constructor(key: any) {
		super(key)
		console.log("??");
		//@ts-ignore
		this.scene?.events?.once("scene-awake", () => console.log("OK"));

		// const ecranInfo = new EcranInfo(this, -4, 17);
		// this.add.existing(ecranInfo);

		// // lists
		// const liste_colision_platforme: Array<any> = [];

		// this.ecranInfo = ecranInfo;
		// this.liste_colision_platforme = liste_colision_platforme;


	}

	create() {
		//this.editorCreate();
	}

	initialiseGroupesScene() {
		this.go()
	}

	creerEcranTransitionNiveau() {
		this.go();
		console.log(this.ecranInfo);
		//this.scene.events.once("scene-awake", () => console.log("OK"));
/*
		const ecranInfo = new EcranInfo(this, -4, 17);
		const ecranInfoObjet = this.add.existing(ecranInfo);		
		return ecranInfoObjet;
		*/
	}

	ouvrirEcranTransitionNiveau() {
		this.ecranInfo.ouvrir()
	}

	fermerEcranTransitionNiveau() {
		this.ecranInfo.fermer()
	}

	initialiseColisionEntitePlatforme() {
	}

	ecranInfoExiste() {
		return this.ecranInfo;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

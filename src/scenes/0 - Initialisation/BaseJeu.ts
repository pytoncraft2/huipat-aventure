
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EcranInfo from "../3 - Utilitaires/EcranInfo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	editorCreate(): void {

		// ecranInfo
		const ecranInfo = new EcranInfo(this, -4, 17);
		this.add.existing(ecranInfo);

		// lists
		const liste_colision_platforme: Array<any> = [];

		this.ecranInfo = ecranInfo;
		this.liste_colision_platforme = liste_colision_platforme;

		this.events.emit("scene-awake");
	}

	public ecranInfo!: EcranInfo;
	public liste_colision_platforme!: Array<any>;

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
		this.editorCreate();
	}

	creerEcranTransitionNiveau() {
		const ecranInfo = new EcranInfo(this, -4, 17);
		const ecranInfoObjet = this.add.existing(ecranInfo);		
		return ecranInfoObjet;
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

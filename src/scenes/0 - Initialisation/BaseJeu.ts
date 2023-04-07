
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EcranInfo from "../3 - Utilitaires/EcranInfo";
import Entite from "../2 - Joueur & Ennemis/Entite";
import PlatformePrefab from "../3 - Utilitaires/PlatformePrefab";
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

		// liste_platformes
		const liste_platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 869, 667);
		liste_platformes.add(platformePrefab);

		// colision_platformes_entites
		const colision_platformes_entites = this.physics.add.collider(liste_platformes.list, entite);

		this.ecranInfo = ecranInfo;
		this.entite = entite;
		this.liste_platformes = liste_platformes;
		this.colision_platformes_entites = colision_platformes_entites;

		this.events.emit("scene-awake");
	}

	public ecranInfo!: EcranInfo;
	public entite!: Entite;
	public liste_platformes!: Phaser.GameObjects.Layer;
	public colision_platformes_entites!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */

	// Write your code here
	create() {
		//this.editorCreate();
	}

	initialiseGroupesScene() {
		this.go()
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

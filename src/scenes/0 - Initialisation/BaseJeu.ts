
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import IndicationNiveau from "../3 - Utilitaires/IndicationNiveau";
import Entite from "../2 - Joueur & Ennemis/Entite";
import PlayerButton from "../3 - Utilitaires/PlayerButton";
import PlayerController from "../../components/PlayerController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseJeu extends Phaser.Scene {

	initElementBase(): void {

		// space
		const space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// indicationNiveau
		const indicationNiveau = new IndicationNiveau(this, -1, -1);
		this.add.existing(indicationNiveau);

		// liste_entite
		const liste_entite = this.add.layer();

		// entite
		const entite = new Entite(this, 1101, -65);
		liste_entite.add(entite);

		// liste_platformes
		const liste_platformes = this.add.layer();

		// playerButton
		const playerButton = new PlayerButton(this, 193, 797, "ui", "btn-left");
		this.add.existing(playerButton);

		// playerButton_1
		const playerButton_1 = new PlayerButton(this, 489, 797, "ui", "btn-right");
		this.add.existing(playerButton_1);

		// playerButton_2
		const playerButton_2 = new PlayerButton(this, 1730.5, 486);
		this.add.existing(playerButton_2);

		// playerButton_3
		const playerButton_3 = new PlayerButton(this, 1730.5, 782);
		this.add.existing(playerButton_3);
		playerButton_3.angle = -180;

		// playerButton_4
		const playerButton_4 = new PlayerButton(this, 1470, 631);
		this.add.existing(playerButton_4);

		// colision_platformes_entites
		const colision_platformes_entites = this.physics.add.collider(liste_platformes.list, liste_entite.list);

		// playerButton (components)
		const playerButtonPlayerController = PlayerController.getComponent(playerButton);
		playerButtonPlayerController.direction = "left";

		// playerButton_1 (components)
		const playerButton_1PlayerController = PlayerController.getComponent(playerButton_1);
		playerButton_1PlayerController.direction = "right";

		// playerButton_3 (components)
		const playerButton_3PlayerController = PlayerController.getComponent(playerButton_3);
		playerButton_3PlayerController.direction = "down";

		// playerButton_4 (components)
		const playerButton_4PlayerController = PlayerController.getComponent(playerButton_4);
		playerButton_4PlayerController.direction = "space";

		this.indicationNiveau = indicationNiveau;
		this.liste_entite = liste_entite;
		this.liste_platformes = liste_platformes;
		this.colision_platformes_entites = colision_platformes_entites;
		this.space = space;

		this.events.emit("scene-awake");
	}

	public indicationNiveau!: IndicationNiveau;
	public liste_entite!: Phaser.GameObjects.Layer;
	public liste_platformes!: Phaser.GameObjects.Layer;
	public colision_platformes_entites!: Phaser.Physics.Arcade.Collider;
	public space!: Phaser.Input.Keyboard.Key;

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

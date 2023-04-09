
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntite from "./BaseEntite";
/* START-USER-IMPORTS */
import { Aptitudes } from "./Aptitudes/_autoImport"
import BaseJeu from "../0 - Initialisation/BaseJeu";
/* END-USER-IMPORTS */

export default interface Entite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Entite extends BaseEntite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 21, y ?? -1, texture || "huipat", frame ?? "huipat.png");

		scene.physics.add.existing(this, false);
		this.body.setSize(200, 189, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		const liste_joueur = Object.keys(Aptitudes);

		// this.body.setSize(this.displayWidth, this.displayHeight);

		let compte = 0;
		// this.setInteractive().on('pointerdown', () => {
		// 	let index = compte % liste_joueur.length;
		// 	this.setTexture(liste_joueur[index]);
		// 	compte++;
		// 	this.body.setSize(this.displayWidth, this.displayHeight);
		// 	// console.log(Aptitudes[this.texture.key].space(this, {}));
		// });
		// console.log(this.texture.key);
		// console.log(this);

		// console.log("oooooooooooooooo",(this.scene as BaseJeu).valeursClavier);
        const nombreAleatoire = `${(Math.random() + 1).toString(36).substring(7)}`;

		this.id = nombreAleatoire;
		// (this.scene as BaseJeu).valeursClavier[nombreAleatoire] = {
		// 	clavier: {
		// 		space: true,
		// 	},
		// 	// sprite: `${options.sprite}`
		// }
		// console.log("mes infos: ",(this.scene as BaseJeu).valeursClavier);



		/* END-USER-CTR-CODE */
	}

	public id: string = "";

	/* START-USER-CODE */
	awake() {
		// console.log("oooooooooooooooo",(this.scene as BaseJeu).valeursClavier);
	}
	preUpdate() {
    //  const input = (this.scene as BaseJeu).valeursClavier[this.id].clavier
    //  let { space } = input
	//  console.log(space);

		// if (this.scene.space.isDown) {
			// console.log("SCENE SPACE!!", this.texture.key);

			// Aptitudes?.[this.texture.key]?.SPACE(this, this.scene.space.isDown);
		// }
		// Aptitudes[this.texture.key].SPACE(this, this.scene.space.isDown);

    //    if (space) t[compte] in Aptitudes && typeof Aptitudes[t[compte]].toucheEspace === "function" && Aptitudes[this.currentTarget.sprite].toucheEspace(this.currentTarget, input);

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

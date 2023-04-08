
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Aptitudes } from "./Aptitudes/_base"
/* END-USER-IMPORTS */

export default interface Entite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Entite extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "liste_atlas", frame ?? "huipat_atlas.png");

		scene.physics.add.existing(this, false);
		this.body.setSize(200, 189, false);

		/* START-USER-CTR-CODE */
		console.log(Aptitudes);
		
		this.body.setSize(this.displayWidth, this.displayHeight);
		const r = this.scene.textures.get('liste_atlas');
		const t = ['girl', 'spider', 'boy', 'huipat'];
		let compte = 1;
		
		this.setInteractive().on('pointerdown', () => {
			if (compte == t.length ) {
				compte = 0;				
			}
			
			const res: any = Object.keys(r.frames).find((el: any, idx:any) => el.startsWith(t[compte]));
			this.setTexture('liste_atlas').setFrame(res);
			compte += 1;
			this.body.setSize(this.displayWidth, this.displayHeight);
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	preUpdate() {
		//console.log(this);
    //    if (space) t[compte] in Aptitudes && typeof Aptitudes[t[compte]].toucheEspace === "function" && Aptitudes[this.currentTarget.sprite].toucheEspace(this.currentTarget, input);

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../../../components/PreloadText";
/* START-USER-IMPORTS */
import assetPackUrl from "../../../../static/assets/asset-pack.json";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// progress
		const progress = this.add.text(960, 540, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "color": "#006699", "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here
	preload() {

		this.editorCreate();

		this.load.pack("asset-pack", assetPackUrl);

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Menu"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CommencerSceneAuClique extends UserComponent {

	constructor(gameObject: any) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__CommencerSceneAuClique"] = this;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): CommencerSceneAuClique {
		return (gameObject as any)["__CommencerSceneAuClique"];
	}

	private gameObject: any;
	public sceneKey: string = "Tuto";

	/* START-USER-CODE */

	start() {
		this.gameObject.once("pointerup", () => {
			this.scene.scale.startFullscreen();
			this.scene.cameras.main.fadeOut(600, 0, 0, 0)
			this.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam: any, effect: any) => {
				this.scene.scene.start(this.sceneKey)
			})
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

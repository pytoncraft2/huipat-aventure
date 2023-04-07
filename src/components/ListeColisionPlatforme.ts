
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ListeColisionPlatforme {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__ListeColisionPlatforme"] = this;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): ListeColisionPlatforme {
		return (gameObject as any)["__ListeColisionPlatforme"];
	}

	private gameObject: any;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

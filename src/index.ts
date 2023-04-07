import Phaser from "phaser";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/0 - Initialisation/01-PreChargement/Preload";
import SceneMain from "./scenes/1 - Chapitres/Niveau1";
import BaseJeu from "./scenes/0 - Initialisation/BaseJeu";
import Tuto from "./scenes/1 - Chapitres/Tuto";
import Menu from "./scenes/0 - Initialisation/02-Menu/Menu";
import Niveau1 from "./scenes/1 - Chapitres/Niveau1";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {

    const game = new Phaser.Game({
        width: 1920,
        height: 1080,
        backgroundColor: "#eee",
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 900 },
                debug: false
            }
        },
        scale: {
            mode: Phaser.Scale.ENVELOP,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [Boot, Preload, Menu, Niveau1, BaseJeu, Tuto]
    });

    game.scene.start("Boot");

});
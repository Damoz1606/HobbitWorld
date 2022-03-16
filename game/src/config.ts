import { Bootloader } from './Bootloader';
import { LevelOne } from './scenes/LevelOne';

export const CONFIG: any = {
    title: 'HobbitWorld',
    version: '0.0.1',
    type: Phaser.WEBGL,
    backgroundColor: '#22a6b3',
    scale: {
        parent: 'phaser_container',
        width: window.innerWidth,
        height: window.innerWidth,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    render: {
        pixelArt: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
            /* gravity: {
                y: 500
            } */
        }
    },
    scene: [
        Bootloader,
        LevelOne
    ]
};

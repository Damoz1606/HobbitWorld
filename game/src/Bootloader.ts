export class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }

    preload(): void {
        this.load.setPath('assets/');

        this.load.on('complete', () => {
            this.scene.start('LevelOne');
        });
    }

}

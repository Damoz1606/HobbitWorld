import { Physics, Scene } from "phaser";

export abstract class Character extends Physics.Arcade.Sprite {

    private health!: number;

    protected abstract initAnimations(): void;
    public abstract update(): void;
    public abstract takeDamage(): void;

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frame?: string | number,
        health?: number) {
        super(scene, x, y, texture, frame);

        this.health = health || 100;
    }

    protected tweens(): void {
        this.scene.tweens.add({
            targets: this,
            duration: 100,
            repeat: 3,
            yoyo: true,
            alpha: 0.25,
            onComplete: () => {
                this.setAlpha(1);
            }
        });
    }

    protected getBody(): Physics.Arcade.Body {
        return this.body as Physics.Arcade.Body;
    }

    public isDead(): boolean {
        return this.health <= 0;
    }

    protected flip(): void {
        if(this.getBody().velocity.x < 0) {
            this.scaleX = -1 * Math.abs(this.scaleX);
        } else {
            this.scaleX = Math.abs(this.scaleX);
        }
    }

}
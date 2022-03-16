import { Physics, Scene } from "phaser";
import { Velocity } from "../lib/Types";

export abstract class Character extends Physics.Arcade.Sprite {

    private health!: number;
    private bodyVelocity!:Velocity;
    private damage!:number;

    protected abstract initAnimations(): void;
    public abstract update(): void;
    public abstract takeDamage(damage: number): void;
    public abstract attackHandler(): void;

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frame?: string | number) {
        super(scene, x, y, texture, frame);
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

    public setHealth(health: number): void {
        this.health = health;
    }

    public setBodyVelocity(bodyVelocity: Velocity): void {
        this.bodyVelocity = bodyVelocity;
    }

    public setDamage(damage: number): void {
        this.damage = damage;
    }

    public getHealth(): number {
        return this.health;
    }

    public getBodyVelocity(): Velocity {
        return this.bodyVelocity;
    }

    public getDamage(): number {
        return this.damage;
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
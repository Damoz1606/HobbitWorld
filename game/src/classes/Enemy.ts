import { Math as MathPhaser, Scene } from "phaser";
import { Character } from "./Character";
import { Player } from "./Player";

export abstract class Enemy extends Character {

    protected aggressiveRadius!: number;
    protected attackRadius!: number;

    public abstract preUpdate(): void;

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        private target: Character,
        frame?: string | number) {
        super(scene, x, y, texture, frame);
    }

    public setTarget(target: Character) {
        this.target = target;
    }

    public getTarget(): Character {
        return this.target;
    }

    protected followTarget() {
        if (MathPhaser.Distance.BetweenPoints(
            { x: this.x, y: this.y },
            { x: this.target.x, y: this.target.y }
        )) {
            this.getBody().setVelocity(this.target.x - this.x, this.target.y - this.y);
        } else {
            this.getBody().setVelocity(this.getBodyVelocity().x, this.getBodyVelocity().y);
        }
    }

    public bounce() {

    }

    public getAggressiveRadius(): number {
        return this.aggressiveRadius;
    }

    public getAttackRadius(): number {
        return this.attackRadius;
    }

    public setAggressiveRadius(aggressiveRadius: number): void {
        this.aggressiveRadius = aggressiveRadius;
    }

    public setAttackRadius(attackRadius: number):void {
        this.attackRadius = attackRadius;
    }
}
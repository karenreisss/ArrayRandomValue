import { ErrorMessages } from "./errorMessage.enum"

export class Matematica {

    private x: number
    private y: number

    public getSum() {
        return this.Sum()
    }

    public getSub() {
        return this.Sub()
    }

    public getMultiply() {
        return this.Multiply()
    }

    public getDivision() {
        return this.Division()
    }

    public setX(x: Number) {
        if (typeof x != 'number') {
            return ErrorMessages.INVALID_OPERATION
        }
        this.x = x
    }

    public setY(y: Number) {
        if (typeof y != 'number') {
            return ErrorMessages.INVALID_OPERATION
        }
        this.y = y
    }

    public getX() {
        return this.x
    }

    public getY() {
        return this.y
    }

    private Sum() {
        return this.x + this.y
    }

    private Sub() {
        return this.x - this.y
    }

    private Multiply() {
        return this.x * this.y
    }

    private Division() {
        return this.x / this.y
    }
}
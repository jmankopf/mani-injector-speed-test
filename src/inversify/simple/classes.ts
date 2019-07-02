import {inject, injectable} from 'inversify';
import {Handle, ThrowableWeapon, TYPES, Warrior, Weapon} from '../../interfaces';

@injectable()
export class InversifyHandle implements Handle {
    static instanceCounter = 0;

    constructor() {
        InversifyHandle.instanceCounter++;
    }

    grab(): string {
        return "grabbed!";
    }
}


@injectable()
export class InversifyKatana implements Weapon {
    static instanceCounter = 0;
    private _handle: Handle;

    constructor(
        @inject(TYPES.Handle) handle: Handle,
    ) {
        InversifyKatana.instanceCounter++;
        this._handle = handle;
    }

    public hit() {
        return "cut!";
    }
}

@injectable()
export class InversifyShuriken implements ThrowableWeapon {
    static instanceCounter = 0;

    constructor() {
        InversifyShuriken.instanceCounter++;
    }

    public throw() {
        return "hit!";
    }
}

@injectable()
export class InversifyNinja implements Warrior {
    static instanceCounter = 0;
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
        InversifyNinja.instanceCounter++;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}


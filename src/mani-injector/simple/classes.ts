import {Handle, ThrowableWeapon, TYPES, Warrior, Weapon} from '../../interfaces';
import {InjectType} from 'mani-injector';

export class ManiHandle implements Handle {
    static instanceCounter = 0;

    constructor() {
        ManiHandle.instanceCounter++;
    }

    grab(): string {
        return "grabbed!";
    }
}


export class ManiKatana implements Weapon {
    static instanceCounter = 0;
    private _handle: Handle;

    constructor(
        @InjectType(TYPES.Handle) handle:Handle
    ) {
        ManiKatana.instanceCounter++;
        this._handle = handle;
    }

    public hit() {
        return "cut!";
    }
}

export class ManiShuriken implements ThrowableWeapon {
    static instanceCounter = 0;

    constructor() {
        ManiShuriken.instanceCounter++;
    }

    public throw() {
        return "hit!";
    }
}

export class ManiNinja implements Warrior {
    static instanceCounter = 0;
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @InjectType(TYPES.Weapon) katana: Weapon,
        @InjectType(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
        ManiNinja.instanceCounter++;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}


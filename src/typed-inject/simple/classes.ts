import {Handle, ThrowableWeapon, Warrior, Weapon} from '../../interfaces';
import {tokens} from 'typed-inject';

export class TypedInjectHandle implements Handle {
    static instanceCounter = 0;

    constructor() {
        TypedInjectHandle.instanceCounter++;
    }

    grab(): string {
        return "grabbed!";
    }
}


export class TypedInjectKatana implements Weapon {
    static instanceCounter = 0;
    private _handle: Handle;
    public static inject = tokens('handle');
    constructor(
        handle: Handle,
    ) {
        TypedInjectKatana.instanceCounter++;
        this._handle = handle;
    }

    public hit() {
        return "cut!";
    }
}

export class TypedInjectShuriken implements ThrowableWeapon {
    static instanceCounter = 0;

    constructor() {
        TypedInjectShuriken.instanceCounter++;
    }

    public throw() {
        return "hit!";
    }
}

export class TypedInjectNinja implements Warrior {
    static instanceCounter = 0;
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public static inject = tokens('weapon', 'throwableWeapon');
    public constructor(
        katana: Weapon,
        shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
        TypedInjectNinja.instanceCounter++;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}


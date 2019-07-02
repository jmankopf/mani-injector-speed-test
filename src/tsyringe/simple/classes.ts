import {Handle, ThrowableWeapon, TYPES, Warrior, Weapon} from '../../interfaces';
import {inject, injectable} from 'tsyringe';


@injectable()
export class TsyringeHandle implements Handle {
    static instanceCounter = 0;

    constructor() {
        TsyringeHandle.instanceCounter++;
    }

    grab(): string {
        return "grabbed!";
    }
}


@injectable()
export class TsyringeKatana implements Weapon {
    static instanceCounter = 0;
    private _handle: Handle;

    constructor(
        @inject(TYPES.Handle) handle: Handle,
    ) {
        TsyringeKatana.instanceCounter++;
        this._handle = handle;
    }

    public hit() {
        return "cut!";
    }
}

@injectable()
export class TsyringeShuriken implements ThrowableWeapon {
    static instanceCounter = 0;

    constructor() {
        TsyringeShuriken.instanceCounter++;
    }

    public throw() {
        return "hit!";
    }
}

@injectable()
export class TsyringeNinja implements Warrior {
    static instanceCounter = 0;
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
        TsyringeNinja.instanceCounter++;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}


export interface Warrior {
    fight(): string;
    sneak(): string;
}

export interface Weapon {
    hit(): string;
}

export interface Handle {
    grab(): string;
}


export interface ThrowableWeapon {
    throw(): string;
}

export const TYPES = {
    Warrior: Symbol("Warrior"),
    Weapon: Symbol("Weapon"),
    Handle: Symbol("Handle"),
    ThrowableWeapon: Symbol("ThrowableWeapon")
};

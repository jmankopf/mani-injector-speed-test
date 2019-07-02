import {TYPES} from '../../interfaces';
import {TsyringeHandle, TsyringeKatana, TsyringeNinja, TsyringeShuriken} from './classes';
import {container} from 'tsyringe';

// export const injector = new Injector();
// injector.mapType<Weapon>(TYPES.Weapon).toMapClass(TsyringeKatana);
// injector.mapType<ThrowableWeapon>(TYPES.ThrowableWeapon).toMapClass(TsyringeShuriken);
// injector.mapType<Warrior>(TYPES.Warrior).toMapClass(TsyringeNinja);
// // injector.map(Ninja);
//
// export const singletonInjector = new Injector();
// singletonInjector.mapType<Weapon>(TYPES.Weapon).toMapClass(TsyringeKatana).toSingleton();
// singletonInjector.mapType<ThrowableWeapon>(TYPES.ThrowableWeapon).toMapClass(TsyringeShuriken).toSingleton();
// singletonInjector.mapType<Warrior>(TYPES.Warrior).toMapClass(TsyringeNinja).toSingleton();

export function registerTsyringe() {
    container.register(TYPES.Handle, {useClass: TsyringeHandle});
    container.register(TYPES.Weapon, {useClass: TsyringeKatana});
    container.register(TYPES.ThrowableWeapon, {useClass: TsyringeShuriken});
    container.register(TYPES.Warrior, {useClass: TsyringeNinja});
}


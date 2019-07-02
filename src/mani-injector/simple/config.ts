import { Container } from "inversify";
import {Handle, ThrowableWeapon, TYPES, Warrior, Weapon} from '../../interfaces';
import {ManiHandle, ManiKatana, ManiNinja, ManiShuriken} from './classes';
import {Injector} from 'mani-injector';

export const injector = new Injector();
injector.mapType<Handle>(TYPES.Handle).toClass(ManiHandle);
injector.mapType<Weapon>(TYPES.Weapon).toClass(ManiKatana);
injector.mapType<ThrowableWeapon>(TYPES.ThrowableWeapon).toClass(ManiShuriken);
injector.mapType<Warrior>(TYPES.Warrior).toClass(ManiNinja);
// injector.map(Ninja);

// export const singletonInjector = new Injector();
// singletonInjector.mapType<Weapon>(TYPES.Weapon).toSingleton(ManiKatana);
// singletonInjector.mapType<ThrowableWeapon>(TYPES.ThrowableWeapon).toSingleton(ManiShuriken);
// singletonInjector.mapType<Warrior>(TYPES.Warrior).toSingleton(ManiNinja);

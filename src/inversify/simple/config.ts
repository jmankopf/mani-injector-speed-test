import { Container } from "inversify";
import {Handle, ThrowableWeapon, TYPES, Warrior, Weapon} from '../../interfaces';
import {InversifyHandle, InversifyKatana, InversifyNinja, InversifyShuriken} from './classes';

export const inversifyContainer = new Container();
inversifyContainer.bind<Handle>(TYPES.Handle).to(InversifyHandle);
inversifyContainer.bind<Warrior>(TYPES.Warrior).to(InversifyNinja);
inversifyContainer.bind<Weapon>(TYPES.Weapon).to(InversifyKatana);
inversifyContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(InversifyShuriken);

export const weaponSingletonContainer = new Container();
weaponSingletonContainer.bind<Warrior>(TYPES.Warrior).to(InversifyNinja);
weaponSingletonContainer.bind<Weapon>(TYPES.Weapon).to(InversifyKatana).inSingletonScope();
weaponSingletonContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(InversifyShuriken).inSingletonScope();

export const inversifySingletonContainer = new Container();
inversifySingletonContainer.bind<Warrior>(TYPES.Warrior).to(InversifyNinja).inSingletonScope();
inversifySingletonContainer.bind<Weapon>(TYPES.Weapon).to(InversifyKatana).inSingletonScope();
inversifySingletonContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(InversifyShuriken).inSingletonScope();

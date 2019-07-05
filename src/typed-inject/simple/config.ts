import {rootInjector, Scope} from 'typed-inject';
import {TypedInjectHandle, TypedInjectKatana, TypedInjectShuriken} from './classes';

export const typedInjectInjector =
    rootInjector
        .provideClass('handle', TypedInjectHandle, Scope.Transient)
        .provideClass('weapon', TypedInjectKatana, Scope.Transient)
        .provideClass('throwableWeapon', TypedInjectShuriken, Scope.Transient)
;

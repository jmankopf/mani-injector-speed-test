import 'reflect-metadata';
import {inversifyContainer} from './inversify/simple/config';
import {Handle, TYPES, Warrior} from './interfaces';
import {injector} from './mani-injector/simple/config';
import {container} from 'tsyringe';
import {TsyringeHandle, TsyringeKatana, TsyringeNinja, TsyringeShuriken} from './tsyringe/simple/classes';
import {registerTsyringe} from './tsyringe/simple/config';
import {InversifyNinja} from './inversify/simple/classes';
import {ManiHandle, ManiKatana, ManiNinja, ManiShuriken} from './mani-injector/simple/classes';

registerTsyringe();
function simpleSpeedTest(numInstances: number) {



    let startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        // const inversifyNinja = inversifyContainer.get<Handle>(TYPES.Handle);
        const inversifyNinja = inversifyContainer.get<Warrior>(TYPES.Warrior);
    }
    let inversifyTime = performance.now() - startTime;

    startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        // const tsyringeNinja = container.resolve<TsyringeHandle>(TYPES.Handle);
        const tsyringeNinja = container.resolve<TsyringeNinja>(TYPES.Warrior);
    }
    let tsyringeTime = performance.now() - startTime;

    startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        // const handle = injector.getType(TYPES.Handle);
        const ninja = injector.getType(TYPES.Warrior);
    }
    let maniTime = performance.now() - startTime;
    return {
        inversifyTime, tsyringeTime, maniTime
    };
}

// const runs = [100_000, 200_000, 500_000, 1_000_000];
const runs = [100_0000, 100_0000, 100_0000];

function runTest() {

    if (runs.length === 0) return;
    let numInstances = runs.shift();
    console.log(`running test with ${numInstances} instances`);
    let result = simpleSpeedTest(numInstances!);
    console.log(result);
    let msg1 = `${(result.inversifyTime / result.maniTime).toFixed(2)}  times faster than inversify js`;
    let msg2 = `${(result.tsyringeTime / result.maniTime).toFixed(2)}  times faster than tsysringe`;
    console.log(msg1);
    console.log(msg2);

    document.body.innerHTML += `<p><b>test with ${numInstances} instances</b></p>`;
    document.body.innerHTML += `<p>${msg1}</p>`;
    document.body.innerHTML += `<p>${msg2}</p>`;
    document.body.innerHTML += `<p>${result.maniTime.toFixed(2)}</p>`;

    requestAnimationFrame(runTest);
    console.log(TsyringeNinja.instanceCounter);
    console.log(TsyringeKatana.instanceCounter);
    console.log(TsyringeShuriken.instanceCounter);
    console.log(TsyringeHandle.instanceCounter);

    console.log(ManiNinja.instanceCounter);
    console.log(ManiKatana.instanceCounter);
    console.log(ManiShuriken.instanceCounter);
    console.log(ManiHandle.instanceCounter);


    // console.log(InversifyNinja.instanceCounter);
    // console.log(ManiNinja.instanceCounter);
}

setTimeout(runTest, 1000);
//
// console.time();
// for (let i = 0; i < 100000; i++) {
//     const ninja = injector.getType(TYPES.Warrior);
// }
// console.timeEnd();

//
// for (let i = 0; i < 12; i++) {
//     const ninja = injector.getType(TYPES.Handle);
// const ninja1 = injector.getType(TYPES.Handle);
// }
// debugger;
// const ninja2 = injector.getType(TYPES.Handle);

// injector.getType(TYPES.Warrior);
// debugger;
// injector.getType(TYPES.Warrior);

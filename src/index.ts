import 'reflect-metadata';
import {inversifyContainer} from './inversify/simple/config';
import {TYPES, Warrior} from './interfaces';
import {injector} from './mani-injector/simple/config';
import {container} from 'tsyringe';
import {TsyringeNinja} from './tsyringe/simple/classes';
import {registerTsyringe} from './tsyringe/simple/config';
import {typedInjectInjector} from './typed-inject/simple/config';
import {TypedInjectNinja} from './typed-inject/simple/classes';

registerTsyringe();
function simpleSpeedTest(numInstances: number) {
    let startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        const inversifyNinja = inversifyContainer.get<Warrior>(TYPES.Warrior);
    }
    let inversifyTime = performance.now() - startTime;

    startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        const tsyringeNinja = container.resolve<TsyringeNinja>(TYPES.Warrior);
    }
    let tsyringeTime = performance.now() - startTime;

    startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        const typedNinja = injector.getType(TYPES.Warrior);
    }
    let maniTime = performance.now() - startTime;

    startTime = performance.now();
    for (let i = 0; i < numInstances; i++) {
        const ninja = typedInjectInjector.injectClass(TypedInjectNinja);
    }
    let typedInjectTime = performance.now() - startTime;
    return {
        inversifyTime, tsyringeTime, maniTime, typedInjectTime
    };
}

const runs = [100, 1_000, 10_000, 100_000, 1_000_000];

function runTest() {

    if (runs.length === 0) return;
    let numInstances = runs.shift();
    console.log(`running test with ${numInstances} instances`);
    let result = simpleSpeedTest(numInstances!);
    let msg1 = `${(result.inversifyTime / result.maniTime).toFixed(2)}  times faster than inversify js`;
    let msg2 = `${(result.tsyringeTime / result.maniTime).toFixed(2)}  times faster than tsysringe`;
    let msg3 = `${(result.typedInjectTime / result.maniTime).toFixed(2)}  times faster than typedInject`;

    document.body.innerHTML += `<p><b>test with ${numInstances} instances</b></p>`;
    document.body.innerHTML += `<p>${msg1}</p>`;
    document.body.innerHTML += `<p>${msg2}</p>`;
    document.body.innerHTML += `<p>${msg3}</p>`;
    document.body.innerHTML += `<p>${JSON.stringify(result)}</p>`;

    setTimeout(runTest, 2000);
}

setTimeout(runTest, 2000);

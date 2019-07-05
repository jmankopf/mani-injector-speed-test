import {Injector} from 'mani-injector';

const injector = new Injector();


class AnotherClass2 {

}
class AnotherClass {
    ac = new AnotherClass2();
}


class TestClass {
    static i = 1;
    private injector: Injector;
    constructor() {
        this.injector = new Injector();
        TestClass.i++;
    }
    ac = {complex: 'object', is: 'here', id: TestClass.i};
}

injector.map(TestClass).toSingleton();
console.time();
let o = 0;
for (let i = 0; i < 10_000_000; i++) {
    injector.get(TestClass);

}
console.timeEnd();
console.log(TestClass.i);

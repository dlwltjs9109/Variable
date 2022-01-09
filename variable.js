'use strict';

//1. Variable 변수
let globalName = 'seungjong'; //Globol scope
{
    let name = 'jisun';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
} //Block scope
console.log(name); //console에 출력 안됌
console.log(globalName); //console에 출력 됌

//2. Contants 한 번 할당된 값이 바뀌면 안됌
const name2 = 'babo';
console.log(name2);
const day = 7;
console.log(day);
const max = 5;
console.log(max);

//3. Variable types
//3-1. Primitive 타입(single item) - number, string, boolean, null, undefined, symbol
//3-2. Object 타입 - box container

//3-1-1. number
const a = 17;
console.log(`value: ${a}, type: ${typeof a}`);
const b = 1.7;
console.log(`value: ${b}, type: ${typeof b}`);

//3-1-2. string
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //Template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//3-1-3. boolean
//false = 0, null, undefined, NaN, ''
//true = any other value
const c = true; //문자열이 아니기 때문에 ''처리 안함
console.log(`value: ${c}, type: ${typeof c}`);
const d = 3<1;
console.log(`value: ${d}, type: ${typeof d}`);

//3-1-4. null
const nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//3-1-5. undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
x;
console.log(`value: ${x}, type: ${typeof x}`);

//3-1-6. symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

//3-2. Object
const jisun = {name: 'jisun', age: 23};
console.log(jisun);
jisun.name = 'seungjong';
jisun.age = 26;
console.log(jisun);

//4. Dynamic typing(오류가 많이나서 TypeScript가 나옴)
let text = 'hello';
console.log(text.charAt(0)); //index언어는 0부터 시작
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
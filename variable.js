'use strict';
//자바스크립트의 공식 사이트 : developer.mozilla.org
//API : Application Programming Interface의 약자로 웹 APIS는 자바스크립트 언어 자체의 포함된 아이가 아닌 브라우저가 제공하는 브라우저가 이해할 수 있는 그런 함수들이다.

//1. Variable 변수(변경될 수 있는 값, 변수를 만들 때는 let이라는 키워드 사용)
//1-1. 값이 계속 변경될 수 있는 것을 Mutable데이터 타입이라고 함, 이 데이터 타입이 let키워드임
let globalName = 'seungjong'; //Globol scope(파일안에 바로 정의, 최소한으로 쓰는게 좋음)
{
    let name = 'jisun'; //let이라는 키워드를 이용해 name이라는 변수를 선언, 선언함과 동시에 jisun이라는 변수의 값을 할당함
    console.log(name);
    name = 'hello';//name이라는 변수에 hello라는 값을 다시 할당함
    console.log(name);
    console.log(globalName);//Gloal한 아이들은 어느 곳 에서나 접근 가능
} //Block scope(괄호를 뜻함)
console.log(name); //console에 출력 안됌(블럭 밖에 있으니까)
console.log(globalName); //console에 출력 됌(어느 곳 에나 접근 가능)

//2. Contants(한 번 할당된 값이 바뀌면 안됌, Immutable데이터 타입이라고 불림)
//2-1. 많은 개발자들이 왠만하면 값을 할당한 다음에 다시는 변경되지 않는걸 선호
//(WHY?)보안상의 이유
//(WHY?)다양한 thread들이 동시에 변수에 접근해서 값을 변경하는 것은 위험
//(WHY?)나중에 코드를 변경하거나 다른 개발자가 코드를 바꿀 때 실수를 방지해 줄 수 있음
const name2 = 'babo';
console.log(name2);
const day = 7;
console.log(day);
const max = 5;
console.log(max);

//3. Variable types(자바스크립트 데이터 타입)
//3-1. Primitive 타입(single item) - number, string, boolean, null, undefined, symbol
//3-2. Object 타입 - box container

//3-1-1. number
//자바스크립트에서는 number데이터 타입 선언을 하지 않고 다른 변수로 선언해도 됌
const a = 17;
console.log(`value: ${a}, type: ${typeof a}`);
const b = 1.7;
console.log(`value: ${b}, type: ${typeof b}`);

//3-1-2. string
//한가지의 글자든 여러개의 글자든 다 string타입으로 할당이 됌
const brendan = 'brendan';
const greeting = 'hello' + brendan;//일반 string과 다른 변수는 +기호를 이용해서 string을 붙힘
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //Template literals(string) 변수의 값이 자동적으로 붙혀서 나옴
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//3-1-3. boolean
//false = 0, null, undefined, NaN, ''
//true = any other value(1이나 다른 string 등)
const c = true; //문자열이 아니기 때문에 ''처리 안함
console.log(`value: ${c}, type: ${typeof c}`);
const d = 3<1;
console.log(`value: ${d}, type: ${typeof d}`);

//3-1-4. null
//null이라고 할당하는 경우에는 텅텅 비어있는 empty값이고 아무것도 아닌 값이라고 지정해주는 것 이다.
const nothing = null; //null이라고 값이 할당되어짐
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//3-1-5. undefined
//선언은 되었지만 아무런 값도 지정되어 있지 않는 경우, 텅텅 비어있는지 값이 들어가 있는지 정해지지 않은 상태
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
x;
console.log(`value: ${x}, type: ${typeof x}`);

//3-1-6. symbol
//맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를주고 싶을 때 정말 고유한 식별자가 필요할 때 쓰여지는 아이
//간혹 식별자를 string을 이용해서 쓰는 경우도 있는데 string은 다른 모듈이나 다른 파일에서 동일한 string을 썼을 때 동일한 식별자로 간주됌
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //symbol의 경우에는 동일한 아이디를 이용해서 만들어도 이 두가지의 경우는 다른 경우임(flase로 나옴)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //symbol은 .description을 써야 출력이 됌
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //string이 똑같다면 동일한 symbol을 만들고 싶을 때 .for을 이용하면 됌(true로 나옴)
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

//3-2. Object타입(single item들을 여러개 묶어서 한 단위로 한 박스로 관리할 수 있게 해주는 것)
const jisun = {name: 'jisun', age: 23}; //그냥 변수 name, age는 아무것도 설명이 되지 않지만 jisun이라는 오브젝트를 만들어서 jisun의 이름은 jisun이고 age는 23이라고 얘기할 수 있음
console.log(jisun);
jisun.name = 'seungjong'; //jisun은 const로 지정이 되어 있어서 한번 할당된 오브젝트는 다시는 다른 오브젝트로 변경 불가능
jisun.age = 26; //jisun오브젝트 안에는 name과 age라는 변수들이 존재함 따라서 name과 age의 값은 바뀔 수 있음
console.log(jisun);

//4. Dynamic typing(오류가 많이나서 TypeScript가 나옴)
//자바스크립트는 선언할 때 어떤 타입인지 선언하지 않고 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있다는 것을 얘기함
let text = 'hello';
console.log(text.charAt(0)); //index언어는 0부터 시작
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//중간에 number타입으로 바뀌었는데 개발자들이 string타입으로 착각하는 경우 많이 발생
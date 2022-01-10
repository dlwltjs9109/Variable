'use strict';

//1. String concatenation
console.log('my'+'cat'); //+기호를 이용해 문자열과 문자열을 합해 새로운 문자열을 만듬
console.log('1'+2); //문자열에 숫자를 더하면 숫자가 문자열로 변환되어 출력됌
console.log(`1+2 = ${1+2}`); //string literals($를 이용하면 변수값을 계산해서 string으로 포함해서 문자열을 만듬)

//2. Numeric operators
console.log(1 + 1); //add(더하기)
console.log(1 - 1); //substract(빼기)
console.log(1 / 1); //divide(나누기)
console.log(1 * 1); //multiply(곱하기)
console.log(5 % 2); //remainder(나누고 나눈 값)
console.log(2 ** 3); //exponentiation(2의 3승)

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter; 이 코드랑 똑같음
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1; 이 코드랑 똑같음
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
//counter = counter - 1;
//preDecrement = counter; 이 코드랑 똑같음
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
//postDecrement = counter;
//counter = counter -1; 이 코드랑 똑같음
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y; //x = x - y;
x *= y; //x = x * y;
x /= y; //x = x / y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators ||(or), &&(and), !(not)세 가지의 연산자가 있음
const value1 = true;
const value2 = 4 < 2;
//or연산자(||기호 써야함, 세개중에 하나라도 true가 되는 아이가 있으면 true로 계산되는 연산자)
console.log(`or: ${value1 || value2 || check()}`);
function check() {
    for (let i = 0; i < 10; i++) {
        console.log('♡');
    }
    return true;
}
//and연산자(&&기호 써야함, 세개가 모두 true가 되어야 true로 계산되는 연산자)
console.log(`and: ${value1 && value2 && check()}`);
function check() {
    for (let i = 0; i < 10; i++) {
        console.log('♡');
    }
    return true;
}
//not연산자(!기호를 써야함, 값을 반대로 바꿔줌)
console.log(!value1);

//7. Equality operators
const stringFive = '5';
const numberFive = 5;
// == loose equality라고 불림, 타입을 변경해서 검사를 함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality라고 불림, 타입을 신경써서 검사를 함
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive); //왠만하면 === 이걸 쓰는게 좋음
//object equality(오브젝트는 메모리에 탑재될 때 레퍼런스 형태로 탑재 됌)
const jisun1 = {name:'jisun'};
const jisun2 = {name:'jisun'};
const jisun3 = jisun1;
console.log(jisun1 == jisun2); //false가 나옴
console.log(jisun1 === jisun2); //false가 나옴
console.log(jisun1 === jisun3); //true가 나옴
//equality - puzzler
console.log(0 == false); //true가 나옴
console.log(0 === false); //false가 나옴
console.log('' == false); //true가 나옴
console.log('' === false); //false가 나옴
console.log(null == undefined); //true가 나옴
console.log(null === undefined); //false가 나옴

//8. Conditional operators: if
//if, else if, else
const name = 'jisun';
if(name === 'jisun') {
    console.log('Welcome, jisun!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'jisun' ? 'yes' : 'no'); //?기호를 사용할시 true면 왼쪽에 있는걸 실행하고 false면 오른쪽에 있는걸 실행함

//10. Switch statement
const browser = 'Chrome';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox': //love you!값이 똑같을 경우 묶어서 씀
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//11-1. while loop
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
} //while같은 경우는 false가 나오기 전까지 무한대로 반복됌

//11-2. do-while loop
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0); //먼저 블럭을 실행한 후 조건이 맞는지 안맞는지 검토함

//11-3. for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) { //i = 3;은 begin 딱 한번만 호출 i > 0;은 condition i--은 step 이 두개는 condition이 맞지 않을때까지 실행
    console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i = i-2) {
    console.log(`inline variable for: ${i}`);
} //let이라는 지역변수를 선언하는 것도 좋음

//11-4. nestes loop
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
} //for문 안에 for문을 작성하게 되면 i가 0일 때 j를 0-9까지 돌리고 i가 1일 때 j를 0-9까지 돌린다, i가 9가 될 때까지 반복

//Quiz(break, continue 사용하기)
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`Q1. ${i}`);
}
for(let i = 0; i < 11; i++) {
    if(i % 2 === 0) {
        console.log(`Q1. ${i}`);
    }
} //이 코드랑 의미 똑같음, 이렇게 쓰는게 더 효율적

//Q2. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
for(let i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    }
    console.log(`Q2. ${i}`);
}
for(let i = 0; i < 11; i++) {
    if(i <= 8) {
        console.log(`Q2. ${i}`);
    }
} //이 코드랑 의미 똑같음, 이렇게 쓰는게 더 효율적
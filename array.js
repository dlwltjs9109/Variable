'use strict';

//Array(자료구조 중 배열)
//프로그래밍 언어에서 비슷한 종류의 데이터들을 묶어서 한데다 보관해 놓는 것을 자료구조라고 함
//오브젝트 : 서로 연관된 특징과 행동들을 묶어 놓는 것을 말함
//자료구조 : 비슷한 타입의 오브젝트들을 묶어놓는 것
//다른 언어에서는 동일한 타입의 데이터만 담을 수 있는데 자바스크립트는 동일한 데이터 타입이 아니여도 담을 수 있음 -> 이렇게 하는건 좋은 방법이 아님
//알고리즘 : 물건들을 한데 담아놓은 자료구조들 중에서도 새로운 자료구조를 삽입, 삭제, 검색, 정렬할 때 어떤 알고리즘을 써서 효율적으로 나타낼 수 있는지를 말함

//1. Declaration(선언)
const arr1 = new Array(); //new라는 키워드를 이용해 배열을 만들 수 있음
const arr2 = [1, 2]; //대괄호안에 데이터를 넣어서 만들 수 있음 글자수는 2, index는 0부터 시작해서 0, 1순서

//2. Index position
const fruits = ['●', '■'];
console.log(fruits); //[]안에 담긴 데이터들 출력
console.log(fruits.length); //글자 수 출력
console.log(fruits[0]); //0번째 글자 출력
console.log(fruits[1]); //1번째 글자 출력
console.log(fruits[2]); //2번째 글자는 없으니까 undefined 출력
console.log(fruits[fruits.length - 1]) //배열의 마지막 글자를 찾을 때 하는 법

//3. Looping
//print all fruits

//3-1. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//3-2. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//3-3. forEach(API, 콜백함수를 받아옴)
//배열안에 들어있는 value들마다 내가 전달한 함수를 출력함
fruits.forEach(function(fruits, index) {
    console.log(fruits, index); 
})
//위 코드랑 같음
fruits.forEach((fruits, index) => console.log(fruits, index));

//4. Add, Delete, Copy
//shift, unshift는 pop, push보다 정말 느림
//WHY? 뒤에서부터 빼거나 추가할 땐 기존 데이터들의 움직임이 없음, 앞에서부터 빼거나 추가할 땐 기존 데이터들의 움직임이 있어야함

//4-1. push(제일 뒤에다 넣을 수 있는 API) : add an item to the end(배열의 제일 뒤에서 추가함)
fruits.push('★', '▲');
console.log(fruits);
//4-1-1. pop : remove an item from the end(배열의 제일 뒤에서부터 삭제함)
fruits.pop(); //뒤에서 아이템이 하나만 빠짐
fruits.pop(); //뒤에서 아이템이 두개 빠짐
console.log(fruits);

//4-2. unshift(제일 앞에다 넣을 수 있는 API) : add an item to the benigging(배열의 제일 앞에서 추가함)
fruits.unshift('♥', '♠');
console.log(fruits);
//4-2-2. shift : remove an item from the benigging(배열의 제일 앞에서부터 삭제함)
fruits.shift(); //앞에 하나만 빠짐
fruits.shift(); //앞에 두개 빠짐
console.log(fruits);

//4-3. splice : remove an item by index position(아이템을 지정된 포지션에서 지우는 것)
fruits.push('▣', '◆', '◐');
console.log(fruits);
fruits.splice(1, 1); //시작하는 인덱스와 몇개를 지울지 꼭 써줘야함 만약 (1)로 하면 첫 번째 인덱스부터 다 지워짐
console.log(fruits);
fruits.splice(1, 1, '♬', '♪'); //삭제한 자리에 추가도 가능
console.log(fruits);

//4-4. combine two arrays(두 가지의 배열 묶기)
const fruits2 = ['㉾', '♣'];
const newFruits = fruits.concat(fruits2); //기존에 있던 fruits에 fruits2라는 다른 배열 붙히기
console.log(newFruits);

//5. Searching
//검색할 수 있는 API

//5-1. indexOf : find the index(배열안에 어떤값이 몇번째에 있는지 알 수 있음)
console.log(fruits);
console.log(fruits.indexOf('●')); //indexOf라는 API를 사용하면 됌
console.log(fruits.indexOf('♪'));
console.log(fruits.indexOf('※')); //배열에 없는 데이터는 -1로 출력 됌

//5-2. includes : true or false로 return
console.log(fruits.includes('※')); //배열에 데이터가 있는지 없는지를 t or f로 return하는 함수
console.log(fruits.includes('◆'));

//5-3. lastIndexOf
fruits.push('●');
console.log(fruits);
console.log(fruits.indexOf('●')); //indexOf는 제일 첫 번째에 해당하는 값이 출력 됌
console.log(fruits.lastIndexOf('●')); //반대로 제일 마지막에 해당하는 값이 출력 됌
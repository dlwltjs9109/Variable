'use strict';

//Objects
//primitive타입은 변수 하나 당 값을 하나만 담을 수 있음
//인자가 더 많아지게 되면 관리하기 힘듬, 그래서 오브젝트를 씀
//object는 key와 value의 집합체이다 = 오브젝트는 우리가 접근할 수 있는 변수(properties)와 그 변수가 가지고 있는 값으로 나누어짐

//1. Literals & Properties
const obj1 = {}; //{} 괄호를 사용해 오브젝트를 만드는 것을 object literal
const obj2 = new Object(); //new라는 키워드를 사용해 오브젝트를 만드는 것을 object constructor
function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const jisun = {name: 'jisun', age: 23}; //class가 없어도 바로 오브젝트 생성 가능
print(jisun);
//자바스크립트는 프로그램이 동작하고 있을 때 타입이 결정 됌
//그래서 이렇게 뒤늦게 추가하고 삭제가능, 하지만 오류가 많이 발생할 수 있어서 안하는게 좋음
jisun.hasJob = true;
console.log(jisun.hasJob);
delete jisun.hasJob;
console.log(jisun.hasJob);

//2. Computed properties(계산된 properties)
//.name랑 ['name']는 똑같음, 두 가지 방식으로 접근 가능 ['name']을 쓸 때는 꼭 string타입으로 써야함
//.name을 쓸 때는 코딩하는 그 순간 key에 해당하는 값을 받아오고 싶을 때 씀
//['name']을 쓸 때는 정확하게 어떤 key가 필요한지 모를 때 즉 run time에서 결정 될 때 씀
console.log(jisun.name);
console.log(jisun['name']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jisun, 'name');
printValue(jisun, 'age'); //언제 어떤 key를 받을지 모를 때 []사용, key는 항상 string타입으로 전달 해야함

//computed properties를 이용해서 다시 true로 설정하면 값이 출력 됌
jisun['hasJob'] = true;
console.log(jisun.hasJob);

//3. Property value shorthand
//다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수들은 대문자로 이름이 시작되도록 만들고 return대신 this.을 사용함 
const person1 = {name: 'jisun', age: 23};
const person2 = {name: 'seungjong', age: 26};
const person3 = {name: 'jssg', age: 49};
const person4 = new Person('haha', 90);
console.log(person4);

//3-1. Constructor function
function Person(name, age) {
    //this = {}; this에다가 새로운 property를 넣고
    this.name = name;
    this.age = age;
    //return this; this를 return하는 함수이다.
}

//4. In operator
//해당하는 object안에 key가 있는지 없는지 확인하는 것
console.log('name' in jisun);
console.log('age' in jisun);
console.log('random' in jisun);
console.log(jisun.random); //정의하지 않는 key를 접근하게 되면 undefined가 나옴


//5. for..in
//for (let key in obj)
//jisun이 가지고 있는 key들이 블럭을 돌 때마다 key라는 지역변수에 할당이 됌
//모든 key들을 받아와서 일을 처리하고 싶을 때 사용
for (let key in jisun) {
    console.log(key);
}

//5-1. for..of
//for (let value of iterable)
//밑에 코드처럼 작성하면 출력은 되지만 많이 작성해야 하는 불편함이 있음
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//이렇게 for of를 사용하면 간편함
for(let value of array) {
    console.log(value);
}

//6. Cloning
const user = {name: 'jisun', age: '23'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
//user안에 있는 key(name, age)가 하나하나 user3 key에 복사 됌
const user3 = {};
for(let key in user) {
    user3[key] = user[key];
}
console.log(user3); //user의 값들이 복사 됌

//young way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
//같은 코드
const user5 = Object.assign({}, user);
console.log(user5);

//another example
//뒤에 나오는 아이일수록 앞에 동일한 property가 있다면 값을 계속 덮어 씌움 
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue출력
console.log(mixed.size); //big출력
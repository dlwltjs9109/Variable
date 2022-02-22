'use strict';

//async & await
//깔끔하게 promise를 사용할 수 있는 방법

//1. async (동기적인 코드를 쓰는 것 처럼 만들면 더 쉽게 이해 가능)
async function fetchUser() {
    //do network reqeust in 10 secs ....
    return 'jisun';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
} //3초 있다 사과를 return하는 함수

async function getBanana() {
    await delay(1000);
    return '🍌';
} //3초 있다 바나나를 return하는 함수

//function getBanana() {
    //return delay(3000)
    //.then(() => '🍌');
//} 이렇게 chaining을 하는 것 보다 위 코드처럼 짜는게 좋음

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise; //await 병렬처리하는 법, 동시다발적으로 3초 후 사과랑 바나나가 나타남 (이건 더러운 코드, 3번처럼 짜야함)
    return `${apple} + ${banana}`;
}

//function pickFruits() {
    //return getApple()
    //.then(apple => {
        //return getBa0nana().then(banana => `${apple} + ${banana}`);
    //});
//} 이건 callback 지옥, 위 코드처럼 짜는게 좋음

pickFruits().then(console.log);

//3. usefull Promise APIS
//ALL : promise배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을 때 까지 모아줌
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

//3-1 usefull Promise APIS
//race : 배열에 전달된 promise 중에서 가장 먼저 값을 return하는 아이만 전달이 되어짐
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
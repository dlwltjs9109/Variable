'use strict';

//Promise is a Javascript object (자바스크립트 안에 내장되어 있는 오브젝트)
//비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓸 수 있는 오브젝트
//State(Promise의 상태) : Pending(Promise가 만들어져서 우리가 지정한 operation이 실행 중 일 때) -> Fulfilled(operation을 성공적으로 끝낸 후)
//파일을 찾을 수 없거나 네트워크에 문제가 생긴다면 Rejected 상태가 됌
//Producer : 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 promise의 object
//Consumer : 우리가 원하는 데이터를 소비함

//1. Producer
//Promise를 만드는 순간 우리가 전달한 excutor라는 콜백함수가 바로 실행 됌
//만약 네트워크 요청을 사용자가 요구했을 때만 해야되는 경우라면 이런식으로 작성하는 것은 불필요
const promise = new Promise((resolve, reject) => {
    //보통은 promise안에서 heavy한 일들을 함
    console.log('doing something...');
    setTimeout(() => {
        resolve('jisun'); //기능을 성공적으로 수행했다면 resolve라는 콜백함수를 호출함
        //reject(new Error('no network')); //만약 네트워크를 하다가 실패하면 reject 호출
    }, 2000);
});

//2. Consumer : then, catch, finally를 이용해서 값을 받아옴
//then : promise값이 정상적으로 잘 수행이 되면 값을 받아오겠단 뜻 즉 우리가 원하는 기능을 수행하는 콜백함수를 전달해주면 됌
//catch : error가 발생했을 때 어떻게 처리할 것 인지 콜백함수를 등록해주면 됌
//finally : 성공하든 실패하든 상관없이 어떤 기능을 마지막에 사용하고 싶을 때 사용(무조건 마지막에 호출되어지는 아이)
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) //1 전달 -> 1 * 2 -> 2
.then(num => num * 3) //2 전달 -> 2 * 3 -> 6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    }); //6 전달 -> 6-1 -> 5
})
.then(num => console.log(num)); //5 전달 -> 결국 5 출력 되고 총 2초가 소요 됌

//4. Error Handing
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('♥'), 1000);
    }); //1초 있다 하트를 return함
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => ●`)), 1000);
    }); //하트를 받아와서 원형 return
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => ★`), 1000);
    }); //원형을 받아와서 별 return

    //getHen() 밑에처럼 간편히 쓸 수 있음
    //.then(hen => getEgg(hen))
    //.then(egg => cook(egg))
    //.then(meal => console.log(meal));

    getHen()
    .then(getEgg)
    .catch(error => {
        return '○';
    }) //이렇게 바로 문제 해결 가능
    .then(cook)
    .then(console.log)
    .catch(console.log);
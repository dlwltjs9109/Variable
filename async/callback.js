'use strict';

//1. JavaScript is synchronous. (자바스크립트는 동기적인 아이)
//호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말
//hoisting : var(변수), function declaration(함수선언)들이 자동적으로 제일 위로 올라가는 것
//synchronous는 정해진 순서에 맞게 코드가 실행되는 것
//callback 정리 : 우리가 전달하는 함수는 바로 실행되는 것이 아니라 setTimeout이라는 함수 안에 하나의 parameter 인자로 우리가 지정한 함수를 전달헤줌, 지금당장 실행하진 않고 나중에 1초가 지난 다음에 내 함수를 실행해줘 라고 전달하는 걸 콜백함수라고 함
console.log('1');
//밑에 콜백 함수는 asynchronous, 비동기적인 실행 방법
setTimeout(() => console.log('2'), 1000); //시간 단위는 ms로 설정되있고 1000ms = 1s니까 1초가 지나면 우리가 전달한 함수가 실행되도록 하는 것
//우리가 지정한 시간이 지나면 우리가 전달한 콜백함수를 호출하는 것 / 콜백함수 : 우리가 전달해준 함수를 나중에 너가 불러줘 라는 개념
console.log('3'); //1 -> 3 -> 2로 호출 됌

//2. Synchronous callback (즉각적으로, 동기적으로 실행하는 콜백)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); //함수는 호이스팅이 되기 때문에 선언이 제일 위로 올라가서 1 -> 3 -> hello -> 2로 출력 됌

//3. Asynchronous callback (언제 실행될지 예측할 수 없는 콜백)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
} 
printWithDelay(() => console.log('async callback'), 2000); //2초 뒤에 실행

//4. callback 지옥 예시
//id와 password를 입력받아오기
//login하기
//login한 사용자의 아이디를 받아와서 역할을 요청해 받아오기
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('emter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

//5. callback 지옥의 문제점
//가독성이 떨어짐, 어디서 어떤 식으로 연결되어 있는지 한눈에 가늠하기 힘듬
//비즈니스 로직을 한눈에 가늠하기 힘듬
//애러가 발생하거나 디버깅을 해야되는 경우에도 굉장히 힘들어짐
//유지 보수 힘들어짐
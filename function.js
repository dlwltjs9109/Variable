//Function(함수)
//function은 program을 구성하는 기본적인 building block
//subprogram이라고도 불리며 여러번 재사용이 가능
//한가지의 task나 어떠한 값을 계산하기 위해 쓰여짐

//1. Function declaration
//문법 : function name(param1, param2) {body... return;}
//함수 이름 : 동사, 명령 형태로 이름 지정해야함
//하나의 function은 한가지의 일만 하도록 만들어야함
//자바스크립트에서 function은 object임(그렇기 때문에 function을 변수에다가 할당할 수 있고 parameter로 전달이 되고 함수를 return할 수 있게 됌)
//hoisteing가능, 함수 선언 전에 호출 가능
function printHello() {
    console.log('Hello');
}
printHello(); //이 함수는 계속 Hello만 출력이 되기 때문에 쓸모없음

function log(message) {
    console.log(message);
}
log('Hello@'); //parameter로 message를 전달하면 전달 된 message를 화면에 출력하도록 만드는게 좋음
log(1234); //자바스크립트에서는 type이 없기 때문에 함수 자체의 interface만 보았을 때 string을 전달해야하는지 number를 전달해야 하는지 불명확

//1-1. Parameters(매개변수)
//premitive parameters : 메모리에 value가 저장되 있어서 value가 전달 됌
//object parameters : 메모리에 reference가 저장되 있어서 reference가 전달 됌
function changeName(obj) {
    obj.name = 'coder';
} //changeName이라는 함수는 전달된 오브젝트에 이름을 무조건 coder로 변경
const jisun = {name: 'jisun'};
changeName(jisun);
console.log(jisun);

//1-2. Default Parameters
function showMessage(message, from = 'unknown') { //from을 unknown으로 지정하면 from이 undefined일 때 unknown으로 출력 됌
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //message만 전달 됐고 from은 정의되어져 있지 않으면 undefined로 출력 됌

//1-3. Rest Parameters
function printAll(...args) { //세개의 값이 담겨져 있는 배열임, 배열 형태로 전달되게 됌
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for(const arg of args) { //args에 있는 모든 값들이 차례대로 지정이 되면서 출력 됌
        console.log(arg);
    }
}
printAll('seungjong', 'love', 'jisun');

//1-4. Local scope(밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있음)
let globalMessage = 'global'; //global variable, 블럭 밖에서도 접근 가능
function printMessage() {
    let message = 'hello';
    console.log(message); //블럭 안에서 함수를 선언하면 local variable, 안에서만 접근이 가능함
    console.log(globalMessage);
    function printAnother() {
        console.log(message); //자식은 부모에게서 정의된 message들을 확인할 수 있음
        let childMessage = 'hello';
    }
    //console.log(chileMessage); 이렇게 자식안에 정의된 message를 부모 상위 위에서 보려고 하면 애러 발생
    //이렇게 return이 없는 함수들은 return undefined;와 똑같고 생략 가능함
}
printMessage();
console.log(globalMessage);

//1-5. Return
function sum(a, b) {
    return a + b;
}
const result = sum(1,2); //결과값은 3
console.log(`sum: ${sum(1,2)}`);

//1-6. Early return, Early exit
//Bad
function upgradeUser(user) {
    if(user.point > 10) {
        //long upgrade logic...
        //블럭 안에서 로직을 작성하면 가독성이 떨어짐
    }
}
//Good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
    //조건이나 return값이 짧을 때는 먼저 작성하고 long logic일 경우 뒤에 작성
}

//First-class function
//function은 다른 변수와 마찬가지로 변수에 할당이 되고 function의 parameter로 전달이 되며 return값으로도 return이 된다.

//2. Function expression
//함수를 선언한 다음부터 호출이 가능
const print = function() { //함수를 선언함과 동시에 print라는 변수에 function 할당 
    console.log('print');
};
print(); //함수를 할당받은 print변수를 함수처럼 호출할 수 있음
const printAgain = print; //또 다른 변수(printAgain)에 할당할 수 있음
printAgain();
const sumAgain = sum; //sum function을 sumAgain에 할당
console.log(sumAgain(1,3));

//2-1. Callback function(상황에 맞는 함수 부르기)
function randomQuiz(answer, printYes, printNo) { //정답, 정답이 맞을 때 호출하게 될 함수, 정답이 아닐 때 호출하게 될 함수
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//이름없는 function : anonymous function
const printYes = function() { //printYes라는 변수에 yes를 출력하는 함수를 할당 
    console.log('yes!');
};
//이름있는 function : named function
const printNo = function print() { //printNo라는 변수에 no를 출력하는 함수를 할당
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//2-2. Arrow function
//항상 이름이 없는 anonymous function임
//const simplePrint = function() {
//    console.log('simplePrint');
//}; 
const simplePrint = () => console.log('simplePrint'); //위 코드랑 똑같음
simplePrint();

//const add = function(a, b) {
//    return a + b;
//};
const add = (a, b) => a + b; //위 코드랑 똑같음
add(1, 2);
console.log(`add: ${1,2}`); //이상하게 출력 됌

const simpleMultiply = (a, b) => {
    return a * b;
}; //블럭을 쓰게되면 return이란 키워드 이용해서 값을 return해야함
simpleMultiply(3, 4);
console.log(`simpleMultiply: ${3,4}`); //이상하게 출력 됌

//2-3. IIFE(Immediately Invoked Function Expression)
(function hello() {
    console.log('IIFE');
})(); //hello라고 함수 호출한거랑 같은 효과, 따로 hello라고 함수 호출 안해도 됌
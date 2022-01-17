'use strict';

//JSON (JavaScript Object Notation)
//브라우저 뿐만 아니라 모바일에서 서버와 데이터를 주고 받을 때 또는 서버와 통신을 하지 않아도 오브젝트를 파일시스템에 저장할 때도 JSON데이터 타입을 많이 이용함
//데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포멧
//텍스트를 기반으로 한 가벼운 데이터 타입
//읽기도 편하고 key와 value로 이루어져 있는 파일 포멧
//데이터를 서버와 주고 받을 때 직렬화하고 데이터를 전송할 때 쓰임
//프로그램 언어나 플랫폼에 상관없이 쓸 수 있음

//1. Object to JSON (오브젝트를 제이슨으로 변환하는 방법)
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); //배열타입처럼 보이면서 " "이걸로 바뀜, " "이 기호가 JSON의 규격사항
console.log(json);

const rabbit = {
    name : 'kkongei',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json); //object에 있는 데이터가 아니기 때문에 함수는 제외되서 출력 됌 또한 symbol같은 자바스크립트에만 있는 특별한 데이터도 JSON에 포함되지 않음

json = JSON.stringify(rabbit, ['name', 'color']); //내가 원하는 property만 골라서 정의하면 해당하는 property만 JSON으로 변환이 됌
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; //key가 name이라는 것이 들어오게 되면 무조건 ellie라는 value로 설정하고 그렇지 않으면 원래 오리지널 value로 쓰다는 뜻
}); //토끼의 오브젝트를 싸고 있는 제일 최상위 것이 제일 먼저 전달 됌
console.log(json); //name이 ellie로 출력 됌

//2. JSON to Object (제이슨을 오브젝트로 변환하는 방법)
//parse(json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json); //birthDate가 string형태로 출력 됌
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
const obj2 = JSON.parse(json); //변환하고 싶은 json을 전달해주기만 하면 됌
console.log(obj2); //rabbit이라는 오브젝트를 JSON으로 변환할 때는 함수가 전혀 포함이 되어있지 않음, 다시 JSON을 오브젝트로 변환했으니까 당연히 jump라는 method는 포함되어 있지 않음
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
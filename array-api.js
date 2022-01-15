'use strict';

//Q1. make a string out of an array
//API : join
//배열안에 있는 join이라는 API는 배열에 있는 모든 데이터들을 string으로 나타내 주는 것
//separator(구분자)는 써도되고 안써도 됌 
const fruits1 = ['★', '●', '◆'];
const result1 = fruits1.join();
console.log(result1);
//구분자 생김(원하는 기호 넣으면 됌)
const result2 = fruits1.join('|');
console.log(result2);


//Q2. make an array out of a string
//API : split
//문자열을 배열로 바꿔주는 split는 separator(구분자)와 limit 두 가지의 parameter를 전달 받음
//separator(구분자)는 필수로 써야하고 limit는 써도되고 안써도 됌
const fruits2 = '★, ●, ◆, ▼';
const result3 = fruits2.split(',', 2);
console.log(result3);


//Q3. make this array look like this: [5, 4, 3, 2, 1]
//API : reverse
//배열안에 들어있는 데이터들의 순서를 거꾸로 만들어줌
//함수를 호출한 배열 자체도 순서가 바뀐걸 알 수 있음 -> reverse는 배열 자체의 순서를 거꾸로 변경시킴
const array1 = [1, 2, 3, 4, 5];
const result4 = array1.reverse();
console.log(result4);
console.log(array1);


//Q4. make new array without the first two elements
//API : slice
//배열에 특정한 부분을 return하는 API임, 그 특정한 부분은 start와 end로 지정할 수 있음
//start는 배열에 시작하는 인덱스이고 end는 어디까지 할 껀지 배열에서 인덱스를 지정해주면 됌(end는 마지막으로 출력할 인덱스보다 1높게 써줘야 됌)
const array3 = [1, 2, 3, 4, 5];
const result6 = array3.slice(2, 5); //인덱스가 0,1,2,3,4 니까 2부터 5까지 써야 [3,4,5]가 출력 됌
console.log(result6);
console.log(array3); //array3는 동일하게 [1,2,3,4,5]로 출력 됌

//Q4-1.
//API : splice
//어디서부터 몇개나 지울지 써놓으면 그 부분을 지워줌
//배열 자체에서는 삭제된 데이터를 제외하고 출력 됌
const array2 = [1, 2, 3, 4, 5];
const result5 = array2.splice(0, 2);
console.log(result5); //[1, 2]출력
console.log(array2); //[3, 4, 5]출력






class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
//Q5. find a student with the score 90
//API : find
//predicate와 thisArg 두 가지의 인자가 전달 됌
//predicate는 콜백함수를 받고 함수에는 this, value, index, obj 네가지의 인자가 전달되고 불리언 값으로 무언가가 정의되는 함수를 전달해주면 됌
//predicate가 true일 때 배열 안에서 첫 번째로 찾아진 요소를 return함, 만약 찾지 못하면 undefined를 return함
//predicate란 콜백 함수는 배열에 있는 모든 요소들 마다 호출이 되어짐, 호출되어진 콜백 함수가 true면 바로 함수를 멈추고 true를 return함
const result7 = students.find(function(student) {
    return student.score === 90;
});
console.log(result7);
//위 코드랑 똑같음
const result8 = students.find((student) => student.score === 90);
console.log(result8);


//Q6. make an array of enrolled students
//API : filter
//콜백함수를 전달해서 이 콜백함수가 true인 아이들만 모아서 새로운 배열을 전달해주는 API임 
const result9 = students.filter((student) => student.enrolled);
console.log(result9);


//Q7. make an array containing only the students' scores result should be: [45, 80, 90, 66, 88]
//API : map
//배열안에 들어있는 요소 한가지 한가지를 다른것으로 변환해 주는 것을 말함
//1, 2, 3 데이터가 들어있는 배열에 지정된 콜백함수를 호출하면서 각각의 요소들을 함수를 거쳐서 다시 새로운 값으로 변환한다는 말
//콜백함수로 전달되는 인자는 최대한 이해하기 쉬운걸로 써야함
const result10 = students.map((student) => student.score);
console.log(result10);


//Q8. check if there is a student with the score lower than 50
//API : some
//배열의 요소중에서 콜백함수가 return이 true가 되는 애가 있는지 없는지를 확인해 주는 것
//배열에서 조건이 하나라도 만족되는게 있으면 true로 return
const result11 = students.some((student) => student.score < 50);
console.log(result11);
//every라는 API는 배열에 들어있는 모든 요소들이 조건이 충족해야지만 true가 나옴
const result12 = students.every((student) => student.score < 50);
console.log(result12);


//Q9. compute students' average score
//API : reduce
//reduce는 콜백함수와 initialValue를 전달함
//콜백함수는 배열안에 들어있는 모든 요소들마다 호출이 됌, 전달하는 콜백함수 안에서 return할 때는 어떤 값이 누적된 값을 전달해야 됌
//배열에 있는 모든 요소들의 값을 누적하는, 뭔가 함께 모아놓을 때 쓰는거라고 생각하면 됌
const result13 = students.reduce((prev, curr) => {
    console.log('------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score; //나중에 이 return된 값이 그 다음에 호출되는 prev값으로 할당이 됌
}, 0); //initial값이 0부터 시작
console.log(result13 / students.length); //평균내기
//reduceRight는 배열의 제일 뒤에서부터 시작
const result14 = students.reduceRight((prev, curr) => prev + curr.score, 0);
console.log(result14);


//Q10. make a string containing all the scores result should be: '45, 80, 90, 66, 88'
//
const result15 = students
.map((student) => student.score)
.filter(score => score >= 50)
.join();
console.log(result15);

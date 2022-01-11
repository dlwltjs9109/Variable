'use strict';

//class : template
//object : template를 이용해서 실제로 데이터를 넣어서 만드는 것
//만들어진 붕어빵 자체는 object, 붕어빵을 만들기 위한 틀은 class
//JavaScript MDN reference페이지 참고

//1. Class declarations
class person { //person이라는 클래스를 만듬
    //constructor 즉 생성자를 이용해 나중에 오브젝트를 만들 때 필요한 데이터를 전달
    constructor(name, age) {
        //이 class에 존재하는 두가지 fields(속성)에 전달된 데이터를 바로 할당
        this.name = name; //this라는 것은 생성된 오브젝트에 .name이라고 하기 때문에 이름이 출력됌
        this.age = age;
    }
    //method(행동)
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
//새로운 object를 만들 때는 new라는 키워드 사용 
const jisun = new person('jisun', 23); //construct(name, age)니까 이름과 나이를 써줌
console.log(jisun.name); //'jisun.name'은 문자열이기 때문에 ''안씀
console.log(jisun.age);
jisun.speak();

//1-1. Getter & Setter
//class를 사용하는 사용자가 잘못 사용해도 방어적으로 고쳐줌
//age라는 getter를 정의하는 순간 this.age는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라 바로 getter를 호출하게 됌  
//age라는 setter를 정의하는 순간 값을 할당할 때 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출하게 됌 즉 계속 setter호출 무한반복
//무한반복의 애러를 방지하기 위해 getter와 setter안에서 쓰여지는 변수의 이름을 바꿔야함(보통 _기호 사용)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age  = age; //getter & setter를 사용하면 얘는 더이상 field 아님 
    }  
    get age() { //get이라는 키워드를 사용해 값을 return
        return this._age;
    } 
    set age(value) { //set이라는 키워드를 사용해 값을 설정, 값을 설정하기 때문에 value를 받아와야 함
        //if(value < 0) {
        //throw Error('age can not be negative');
        //} 이렇게 써도 되고, 얘는 애러 뜸
        this._age = value < 0 ? 0 : value; //이렇게 써도 됌, 얘는 -값이면 0이 나옴
    }
}
const user1 = new User('choi', 'seungjong', -1);
console.log(user1.age); //사람의 나이는 -1이 될 수 없으므로 말이 안되는 코드

//1-2. Fields (Public / Private)
//생성자를 쓰지 않고 field를 정의할 수 있음
//그냥 정의하면 public(외부에서 접근 가능) 
//#기호를 붙이면 private(class 내부에서만 값이 보이고 값을 변경하고 접근 가능)
class Experiment {
    publicField = 2;
    #publicField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); //2출력 됌
console.log(experiment.privateField); //undefined으로 출력 됌

//1-3. Static
//static은 object마다 할당되어 지는 것이 아니라 class 자체에 붙어있음
class Article {
    static publisher = 'Love Seungjong';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //따라서 object이름이 아닌 class이름을 써줘야함
Article.printPublisher(); //마찬가지로 static함수를 호출 할 때 class이름을 써야함

//1-4. Inheritance
//상속을 이용하게 되면 extends란 키워드를 통해 동일한 것 들을 일일히 적지 않아도 재사용할 수 있음 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}
//extends라는 키워드를 사용해 Shape을 연장, Shape에서 정의한 fields와 methods가 자동적으로 Rectangle에 포함
class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
    draw() {
        super.draw(); //공통적으로 정의한 draw도 그려주려면 super키워드 사용
        console.log('▲'); //이것만 썼을 때는 재정의한 함수만 호출 됌
    }
    getArea() {
        return (this.width * this.height) / 2;
    } //삼각형의 면적은 W * H / 2
    toString() {
        return `Triangle: color ${this.color}`;
    }
}
const triangle = new Triangle(10, 10, 'yellow');
triangle.draw();
console.log(triangle.getArea());

//1-5. InstanceOf(class checking)
//왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스 instance인지 아닌지 즉 오브젝트가 클래스를 이용해 만들어진 아인지 아닌지 확인하는 것
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //false(틀림) -> true 자바스크립트에서 만든 모든 object class들은 자바스크립트에 있는 object를 상속하는 것 
console.log(triangle.toString()); //위 말은 우리가 어떤 오브젝트든지 공통적으로 존재하는 method를 쓸 수 있음 
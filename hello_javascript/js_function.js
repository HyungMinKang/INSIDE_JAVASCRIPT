//함수선언문 / 함수 표현식/ Function() 생성자

/* 
함수 선언문 -함수이름 필수

function add(x,y){
  return x+y;
};

console.log(add(3,4));
*/

/* 
함수 표현식 - 함수 이름 선택(이름없을시 익명함수) 
var add = function (x, y) {
  return x + y;
};

var plus = add;

console.log(add(3, 4));
console.log(plus(5, 6));
 */

/* 
함수이름과 함수변수 주의 - 외부에서 함수이름으로 접근불가 
그럼 함수선언문은? 
function add(x,y){} ===> var add =function add(x,y); 로 엔진이 자동으로 변환
함수 변수와 함수이름이 같게 설정되고 함수이름으로 호출되는것 처럼 보임

그럼 함수이름은 어따 써먹음?
함수의 재귀적인  호출처리

var add = function sum(x, y) {
  return x + y;
};

console.log(add(3, 4));
console.log(sum(3, 4));
 */

/* 

함수의 재귀적인  호출처리
var factorialVar = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorialVar(3));
console.log(factorial(3));
 */

// 함수 선언문으로 함수 정의할때는 함수끝에 세미콜론; 을 따로 붙이지 않아도 되지만
// 함수 표현식으 경우 세미콜론;을 붙이는것을 권장

/* Function 생성자를 이용한 함수 생성 - 자주 사용되지는 않음 
new Function(arg1, arg2,... argN, fucntionBody)
- arg1,arg2,agr2n - 함수의 매개변수
- functionBody- 함수가 호출될 때 실행될 코드를 포함한 문자열

Ex
var ad= new Function('x','y', 'return x+y')
consoloe.log(add(3,4)); 

*/

/*
//함수 호이스팅 -  함수 선언문보다 함수표현식이 권장되는 이유

함수선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다
- 함수호이스팅
add(2,3); //5

function add(x,y){
  return x+y;
};

add(3,4);  //7



함수표현식으로 정의되어 함수 호이스팅이 일어나지 않는다
add(2,3); //uncaught type error

var add= function(x,y){
  return x+y;
}

add(3,4); //7
*/

/*  자바스크립트에서는 함수는 변수나 프로퍼티의 값으로 설정가능 

function add(x, y) {
  return x + y;
}

add.result = add(3, 2);
add.status = "OK";

console.log(add["result"]);
console.log(add.status);
 */

/* 
//변수에 할당
var foo = 100;
var bar = function () {
  return 100;
};
console.log(bar());

//프로퍼티에 할당
var obj = {};
obj.baz = function () {
  return 200;
};
console.log(obj.baz);
 */

/* 
//함수를 다른함수의 인자로 넘긴 코드
var foo = function (func) {
  func();
};

foo(function () {
  console.log("Function can be used as the argument");
});

//함수를 다른 함수의 리턴값으로 활용한 코드
var foo = function () {
  return function () {
    console.log("this function is the return value");
  };
};

var bar = foo();
bar();
 */

/* function func0() {}

function func1(x) {
  return x;
}

function func2(x, y) {
  return x + y;
}

function func3(x, y, z) {
  return x + y + z;
}

console.log("func0.length - " + func0.length);
console.log("func1.length - " + func1.length);
console.log("func2.length - " + func2.length);
console.log("func3.length - " + func3.length);
 */

/* __proto__([[PROTO]]) 모든 객체가 가짐 , Function.prototype- 함수만의 특징 

function myFunction() {
  return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
 */

//callback함수- eventhadnler - 어떤 이벤트나 시점에만 호출되는 함수

/* 
//즉시 실행 함수- 초기화에 많이 사용됨 - 재호출 불가 - 라이브러리 초기화시 사용
(function (name) {
  console.log("This is the immediate function ->" + name);
})("foo");
 */

/* 함수 내부에 선언된 변수( 내부 함수 포함)은 함수 외부에서 접근 불가능
==> 함수 스코핑  

function parent() {
  var a = 100;
  var b = 200;
  function child() {
    var b = 300;
    console.log(a);
    console.log(b);
  }

  child();
}

parent();
child(); 
*/
/* 
//4-19 함수 스코프외부에서 내부 함수 호출하는 코드   == inner() 같은 함수를 클로저라 함
function parent() {
  var a = 100;
  var child = function () {
    console.log(a);
  };
  return child;
}

var inner = parent();
inner();
 */

/* 
//4-20 자신을 재정의 하는 함수 코드
var self = function () {
  console.log("a");
  return function () {
    console.log("b");
  };
};

self = self();
self();
 */

/* 
//4-21 함수형식에 맞춰 인자를 넘기지 않더라도 함수 호출 가능함
function func(arg1, arg2) {
  console.log(arg1, arg2);
}

//부족한것은 undefined 넘치는것은 무시
func();
func(1);
func(1, 2);
func(1, 2, 3);
 */

/* 

//4-22 arguments 객체 예제 코드  - arguemnts 객체는 유사배열 객체
function add(a, b) {
  console.dir(arguments);
  return a + b;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

 */

/* 

//4-23 메서드 호출 사용시 this 바인딩
var myObject = {
  name: "foo",
  sayName: function () {
    console.log(this.name);
  },
};

var otherObject = {
  name: "bar",
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

*/

/* 

//4-24 전연객체와 전역 변수의 관계를 보여주는 예제코드
var foo = "I'm foo";

console.log(foo);
console.log(window.foo);

//4-25 함수를 호출할 떄 this 바인딩을 보여주는 에제코드
var test = "this is the test";
console.log(window.test);

var sayFoo = function () {
  console.log(this.test);
};

sayFoo();
 
*/

/* //4-26 내부함수의 this 바인딩을 보여주는 예제코드
var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log("func1() called. this.value : " + this.value);
    func2 = function () {
      this.value += 1;
      console.log("func2() called. this.value : " + this.value);

      func3 = function () {
        this.value += 1;
        console.log("func3() called. this.value : " + this.value);
      };
      func3();
    };
    func2();
  },
};

myObject.func1();
 */

/* 
 //4-27 내부 함수의 바인딩 문제를 해결한 예제코드
var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    var that = this;
    this.value += 1;
    console.log("func1() called. this.value : " + this.value);
    func2 = function () {
      that.value += 1;
      console.log("func2() called. this.value : " + that.value);

      func3 = function () {
        that.value += 1;
        console.log("func3() called. this.value : " + that.value);
      };
      func3();
    };
    func2();
  },
};

myObject.func1();
 */

/* //4-29 객체 생성 두 가지 방법( 객체 리터럴 vs 생성자 함수)
//객체 리터럴
var foo = {
  name: "foo",
  age: 35,
  gender: "man",
};
console.dir(foo);

//생성자 함수
function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.position = position;
}

var bar = new Person("bar", 33, "woman");
console.dir(bar);

var baz = new Person("baz", 25, "woman");
console.dir(baz);
 */

/*  
//prototype 프로퍼티와 [[Prototype]] 링크 구분
function Person(name) {
  this.name = name;
}

var foo = new Person("foo");

console.dir(Person);
console.dir(foo);
 */

/* 
//객체 리터럴 방식에서 프로토타입 체이닝
var myObject = {
  name: "foo",
  sayName: function () {
    console.log("My Name is " + this.name);
  },
};

myObject.sayName();
console.log(myObject.hasOwnProperty("name"));
console.log(myObject.hasOwnProperty("nickname"));
myObject.sayNickName();
 */

/* 

//생성자 함수 방식에서 프로토타입 체이닝
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

var foo = new Person("foo", 30, "tennis");

console.log(foo.hasOwnProperty("name"));

console.dir(Person.prototype);
 */

/* 
//String 기본타입에 메서드 추가
String.prototype.testMethod = function () {
  console.log("This is the String.prototype.testMethod()");
};

var str = "this is the test";
str.testMethod();

console.dir(String.prototype);
 */

/*  
//프로토타입 객체의 동적 메서드 생성 예제
function Person(name) {
  this.name = name;
}

var foo = new Person("foo");

//foo.sayHello();  -에러 발생

Person.prototype.sayHello = function () {
  console.log("Hello" + this.name);
};

foo.sayHello();
 */

/*  
 //프로토타입 메서드와 this 바인딩 
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var foo = new Person("foo");

console.log(foo.getName());

Person.prototype.name = "person";

console.log(Person.prototype.getName());
 */

/* //프로토타입 객체 변경
function Person(name) {
  this.name = name;
}

console.log(Person.prototype.constructor);

var foo = new Person("foo");
console.log(foo.country);

Person.prototype = {
  country: "korea",
};
console.log(Person.prototype.constructor);

var bar = new Person("bar");
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);
console.log(bar.name);
 */

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.country = "Korea";

// var foo = new Person("foo");
// var bar = new Person("bar");
// console.log(foo.country);
// console.log(bar.country);
// foo.country = "USA";

// console.log(foo.country);
// console.log(bar.country);

/* 
클로저의 프로퍼티 값이 쓰기 가능하므로 그 값이 여러번 호출로 하앙 변할 수 있음에 유의
function outerFunc(argNum) {
  var num = argNum;
  return function (x) {
    num += x;
    console.log("num: " + num);
  };
}
var exam = outerFunc(40);
exam(5);
exam(-10);
 */

function func() {
  var x = 1;
  return {
    func1: function () {
      console.log(++x);
    },
    func2: function () {
      console.log(-x);
    },
  };
}

var exam = func();
exam.func1();
exam.func2();

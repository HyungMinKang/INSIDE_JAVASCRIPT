/* //Object()를 이용하여 객체생성
var foo = new Object();

//객체 property
foo.name = "foo";
foo.age = 30;
foo.gender = " male";

console.log(typeof foo);
console.log(foo);
 

//객체 리터럴 방식으로 객체 생성
var foo = {
  name: "foo",
  major: "computer science",
};

//객체 property 읽기
console.log(foo.name);
console.log(foo["name"]);
console.log(foo.nickname);

//객체 property 갱신
foo.major = "electrnoics engineering";
console.log(foo.major);
console.log(foo["major"]);

//객체 propery 동적 생성
foo.age = 30;
console.log(foo.age);

//대괄호 표기법만을 사용해야하는 경우
foo["full-name"] = "foo bar";
console.log(foo["full-name"]);
console.log(foo.full - name);
console.log(foo.full);
console.log(name);

 

//for in 문을 통한 객체 프로퍼티 출력
var foo = {
  name: "foo",
  age: 30,
  major: "computer science",
};

var prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
}



//객체 프로퍼티 삭제 - delete 연산자는 프로퍼티만 삭제 가능/ 객체 삭제 불가 > 객체는 어떻게 삭제하는가- 불가 - 참조된것이 없으면 가비지컬렉터가 알아서 수거
var foo = {
  name: "foo",
  nickname: "baba",
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);


//객체- 참조자 - 값을 저장하고 있는것이 아니라 값을 참조하고 있는것 == 포인터 개념과 유사
var objA = {
  val: 40,
};

var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;
console.log(objA.val);
console.log(objB.val);


var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);
console.log(objA == objB);
console.log(objB == objC);


//Call by Value & Call by Reference
var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
  num = 200;
  obj.value = 200;

  console.log(num);
  console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);


//객체 __proto__
var foo = {
  name: "foo",
  age: 30,
};

console.log(foo.toString());
console.dir(foo);


//배열 리터럴을 통한 배열 생성
var colorArr = ["orange", "yellow", "blue", "green", "red"];
for (i = 0; i < colorArr.length; i++) {
  console.log(colorArr[i]);
}


//배열 요소의 동적 생성
var emptyArr = [];
console.log(emptyArr[0]);

emptyArr[0] = "100";
emptyArr[3] = "eight";
emptyArr[7] = true;
console.log(emptyArr);
console.log(emptyArr.length);


//배열의 length = 길이 / not 원소 개수
var arr = [];
console.log(arr.length);

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length);

//배열 length도 propery처럼 명시적으로 값변경 가능
var arr = [0, 1, 2];
console.log(arr.length);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);


//push() 매서드와 length 프로퍼티
var arr = ["zero", "one", "two"];

arr.push("three");
console.log(arr);

arr.length = 5;
arr.push("four");
console.log(arr);

//배열과 객체의 유사점 과 차이점
var colorsArray = ["orange", "yellow", "green"];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

var colorsObj = {
  "0": "orange",
  "1": "yellow",
  "2": "green",
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);

colorsArray.push("red");
colorsObj.push("red");


//배열의 프로토타입 객체의 프로토타입
var emptyArr = [];
var emptyObj = {};

console.log(emptyArr.__proto__);
console.log(emptyObj.__proto__);


//배열의 동적 프로퍼티 생성
var arr = ["zero", "one", "two"];
console.log(arr.length);

arr.color = "blue";
arr.name = "number_array";
console.log(arr.length);

arr[3] = "red";
console.log(arr.length);

console.dir(arr);

for (var prop in arr) {
  console.log(prop, arr[prop]);
}

for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}


//delete & splice
var arr = ["zero", "one", "two", "three"];
/*DELETE 
delete arr[2];
console.log(arr);
console.log(arr.length); */

/* SPLICE
arr.splice(2, 1);
console.log(arr);
console.log(arr.length);
*/

/*
//Array() 생성자
var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1, 2, 3);
console.log(bar);
console.log(bar.length);


//유사배열 객체의 배열 메서드 호출 -- apply 이용
var arr = ["bar"];
var obj = { name: "foo", length: 1 };

arr.push("baz");
console.log(arr);

Array.prototype.push.apply(obj, ["baz"]);
console.log(obj);
*/

//기본변수 타입 변수에서 메서드 호출
var num = 0.5;
console.log(num.toExponential(1));

console.log("test".charAt(2));

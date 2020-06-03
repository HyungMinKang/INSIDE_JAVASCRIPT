/* console.log("This is global context");

function ExContext1() {
  console.log("This is ExContext1");
}

function ExContext2() {
  ExContext1();
  console.log("This is ExContext2");
}

ExContext2();
 */

/* var foo;

function bar() {
  console.log("bar and x = " + x);
}

var x;

//foo();
bar();

foo = function () {
  console.log("foo and x = " + x);
};

x = 1;
 */

/*  
#클로저 

function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

var inner = outerFunc();
inner();
 
*/

/* //클로저의 특징 -길스코프체인에서 첫번쨰 변수객체가 아닌 이후의 객체에서 참조하는 변수가 많다
- 메모리 성능저길의 가능성 - 하지만 자바스크립트만의 강력한 기능임으로 유동성있게 잘 사용하는것이
좋은 프로그램의 길
function outerFunc(arg1, arg2) {
  var local = 8;
  function innerFunc(innerArg) {
    console.log((arg1 + arg2) / (innerArg + local));
  }
  return innerFunc;
}

var inner = outerFunc(2, 4);
inner(2);
 */

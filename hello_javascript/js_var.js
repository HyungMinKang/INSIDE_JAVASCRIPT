//숫자타입 - Javascript에서는 모든 숫자를 실수 취급 ===> 나눗셈시 주의 -> 정수결과값을 얻고 싶다면 Math.floor() 이용
var intNum = 10;
var floatNum = 0.1;

//문자열 타입 - 문자하나만을 취급하는 char 자료형은 없다 == 모두가 string -> 문자하나에 접근하기 위해서는 배열 index접근 기법이용
// 문자열 한번 생성후 수정해도 수정불가능
var singleQuoteStr = "single quote string";
var doubleQuoteStr = "double quote string";
var singleChar = "a";

//불린 타입
var boolVar = true;

//undefined 타입 - 타입 undefined 값도 undefined== 타입이자 값을 나타냄
var emptyVar;

//null 타입 - 타입 object 값 null = 개발자 명시적으로 값이 비어잇음을 나타낼떄 사용
var nullVar = null;

console.log(
  typeof intNum,
  typeof floatNum,
  typeof singleQuoteStr,
  typeof doubleQuoteStr,
  typeof singleChar,
  typeof boolVar,
  typeof nullVar,
  typeof emptyVar
);

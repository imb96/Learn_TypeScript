// 원시 값 타입 지정
const str: string = "STRING";
const num: number = 123;
const bool: boolean = true;

// 객체 리터럴 타입 지정
const obj: {
  str: string;
  num: number;
  child: {
    str: string;
    num: number;
  };
} = {
  str: "str",
  num: 123,
  child: {
    str: "str",
    num: 123
  }
};

// 함수 타입 지정, 매개변수, 반환 타입
function func(num: number, str: string) {
  return num + str;
}
func(123, "str");

function func2(num1: number, num2: string): number {
  return num1 + Number(num2);
}
func2(123, "123");

function func3(num1: number, num2: string): void {
  // console.log(num1 + num2);
}
func3(123, "123");

const func4 = (str1: string, str2: string): string => {
  return str1 + " " + str2;
};
func4("Hello", "World");

const func5 = (obj: { str1: string; str2: string }) => {
  // console.log(obj.str1 + " " + obj.str2);
};
func5({ str1: "hello", str2: "world" });

// 배열 타입
const strArr: string[] = ["str", "str2", "str3"];
const strArr2: Array<string> = ["str", "str2", "str3"];
const numArr: Array<number> = [1, 2, 3];
const boolArr: boolean[] = [false, true];

/**
 * 튜플 타입
 * 길이 고정 & 인덱스 타입이 고정
 * 여러 다른 타입으로 이루어진 배열을 안전하게 관리
 * 배열 타입의 길이 조절
 */

const arr: string[] = ["A", "B", "C"];

const tuple: [number, string] = [1, "A"];

const tupe0: (string | number)[] = [1, "A"];

const tuple2: [number, ...string[]] = [0, "A", "B"];

// 리터럴
let letString = "Hello";
letString;
const constString = "Hello";
constString;

let letNumber = 123;
letNumber;
const constNumber = 123;
constNumber;

/**
 * undefined && null
 *
 * JavaScript와 마찬가지로 고유의 특별한 타입으로 인정한다.
 * 이외에 void, never와 같이 더 세밀한 타입도 제공
 *
 * strictNullChecks가 핵심
 */

const nu: null = null;
const un: undefined = undefined;

function sayHello(word: string) {
  if (word === "world") {
    return "hello" + word;
  }
  return null;
}

function log(message: string | number) {
  // console.log(message)
  return undefined;
}

/**
 * any type
 * 모든 값의 집합
 * 사용 X
 * noImplicitAny or strict 옵션 true 권장
 */

//  function func6(anyParam: any) {
//   anyParam.trim()
//  }
//  func6([1,2,3])

/**
 * unknown
 * 새로운 최상위 타입
 * any처럼 모든 값을 허용하지만 상대적으로 엄격
 * TS에서 unknown으로 추론하는 경우는 없으니 개발자가 직접 명시해야함
 * assertion 혹은 타입 가드와 함꼐 사용한다.
 *
 */

let nums: unknown = 99;
if (typeof nums === "string") {
  nums.trim();
}

//  function func7(x: unknown) {
//    let val1: any = x;
//    let val2: unknown = x;
//    let val3: string = x;
//    let val4: boolean = x;
//    let val5: number = x;
//    let val6: string[]= x;
//    let val7: {}= x;
//  }

/**
 * void
 * 함수의 반환이 없는 경우를 명시
 * 타입 추론에 위임하자
 * JavaScript에서는 암시적으로 undefined 반환
 * 그러나 void와 undefined는 TypeScript에서 같은 것이 아님
 *
 */
function test(): void {}

function voidFunc() {}

console.log(test());

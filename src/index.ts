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
  console.log(num1 + num2);
}
func3(123, "123");

const func4 = (str1: string, str2: string): string => {
  return str1 + " " + str2;
};
func4("Hello", "World");

const func5 = (obj: { str1: string; str2: string }) => {
  console.log(obj.str1 + " " + obj.str2);
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

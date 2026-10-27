//구조분해 문법
//배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법 객체에서 자주 사용
const arr = [1, 2, 3, 4, 5];

let idx1 = arr[0];
let idx2 = arr[1];
let idx3 = arr[2];
let idx4 = arr[3];
let idx5 = arr[4];
//구조분해 문법
let [i1, i2, i3, i4, i5] = arr;

console.log(i3);

// ------------객체에서 구조분해 문법사용---------------------
const user = {
  name: "홍길동",
  age: 20,
  gender: "M",
  addr: "대구광역시",
  info: {
    board: 1,
  },
};

const { name, age, addr2 = "없음" } = user;
console.log(name, age, addr2);

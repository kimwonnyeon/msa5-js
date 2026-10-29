//원시형(Primitive Type):값을 복사해서 가져오는 데이터타입
let num1 = 1;
let num2 = num1;
num2 =99;

console.log(num1,num2);//1 99

//참조형(Reference Type):데이터가 저장된 위치를 참조하여 객체에 접근하는 데이터 타입
let obj1 = {id:1,name:"둘리", etc:{addr: '대구', test:{key1: 'val1'} }};
// let obj2 = obj1;
// obj2.name='홍길동';
// console.log(obj1.name,obj2.name);// 홍길동 홍길동 

//얕은 복사 (Shallow Copy)
//객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
let obj3 = {...obj1};
obj3.name='또치';
obj3.etc.addr = '서울';
console.log(obj1.name,obj3.name,obj1.etc.addr,obj3.etc.addr);
//둘리 또치 서울 서울

//깊은 복사 (Deep Copy)
//객체의 모든 계층의 값을 복사
//JSON 객체 사용
obj1= { id : 1, name :  '둘리', etc : {addr : '대구',}};
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = '또치';
obj4.etc.addr = '서울';
console.log(obj1.name,obj4.name,obj1.etc.addr,obj4.etc.addr);
//둘리 또치 대구 서울




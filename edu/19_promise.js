//콜백지옥
// setTimeout(() => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//     }, 500);
//   }, 1000);
// }, 1500);

//위 콜백 지옥을 회피하기 위해서 프로미스 기반으로 변경
const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);

      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않는 문자가 입력됬다."));
      }
    }, ms);
  });
};
//Promise hell
timer("A", 300)
  .then((result) => {
    //resolve 일때 실행되는 코드 작성
    console.log(result.code, result.word);
    return timer("B", 1000); //동기처리를 하기위한 방법
  })
  .then((result) => {
    console.log(result.code, result.word);
    return timer("C", 1500);
  })
  .then((result) => {
    console.log(result.code, result.word);
  })
  .catch((error) => {
    //reject 일때 실행되는 코드 작성
    console.log(error.message);
  })
  .finally(() => {
    //resolve/reject 어느쪽이든 무조건 실행되는 코드
    console.log("파이널리");
  });

console.log("외부외부");

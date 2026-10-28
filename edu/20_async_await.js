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

const process = async () => {
  try {
    const result1 = await timer("A"); //timer()의 결과(resolve,reject)가 나올때까지 대기
    console.log(result1.code, result1.word);

    const result2 = await timer("B");
    console.log(result2.code, result2.word);

    const result3 = await timer("D");
    console.log(result3.code, result3.word);
  } catch (error) {
    console.log(error.message);
  }
};
process();

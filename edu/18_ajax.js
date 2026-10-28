const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault(); //기존 이벤트취소
  //이벤트 객체에서 이벤트가 발생한 요소에 접근(event.target)에서 필요한 값 획득.
  const page = e.target.page.value;
  const limit = e.target.limit.value;
});
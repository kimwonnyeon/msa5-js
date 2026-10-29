const nextBtn = document.querySelector(".nextBtn");
const resetBtn = document.querySelector(".reset");
const cardContainer = document.querySelector(".card-container");
let page= 0;
const limit=3;

nextBtn.addEventListener("click",async()=>{
  const baseURL = 'https://picsum.photos';
  const path = '/v2/list'
  page++;
  const url = `${baseURL}${path}?page=${page}&limit=${limit}`
  try {
    const response = await axios.get(url);
    
    response.data.forEach((item)=>{

      const cardImg= document.createElement("div");
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage=`url('${item.download_url}')`;
    
      const cardText = document.createElement("p");
      cardText.classList.add('card-text');
      cardText.textContent= `${item.id}:${item.author}`;

      const card = document.createElement('div');
      card.classList.add('card');
      
      card.appendChild(cardImg);
      card.appendChild(cardText);

      cardContainer.appendChild(card);
    });


  } catch (error) {
    console.error(error);
  }
});

resetBtn.addEventListener("click",()=>{
  cardContainer.textContent= '';
  page=0;
});
let conversationBox = document.querySelector(".conversation__box");
let button = document.querySelector(".conversation__button");
let buttonVenom = document.querySelector(".conversation__button--venom")
let buttonIronman = document.querySelector(".conversation__button--ironman")
let buttonThanos = document.querySelector(".conversation__button--thanos")
let conversationForm = document.querySelector(".conversation__form")
let conversationFormVenom = document.querySelector(".conversation__form--venom")

let addQuote = () => {
axios.get("https://randommarvelquoteapi.herokuapp.com/").then(response => {

let conversationQuote = document.createElement("div")
conversationQuote.classList.add("conversation__quote")
conversationQuote.innerText = response.data.quote;

let conversationBlock = document.createElement("div");
conversationBlock.classList.add("conversation__block");

conversationBlock.appendChild(conversationQuote);

conversationBox.appendChild(conversationBlock);
})
}

let addQuoteVenom = () => {
axios.get("https://randommarvelquoteapi.herokuapp.com/").then(response => {
    
let conversationQuote = document.createElement("div")
conversationQuote.classList.add("conversation__quote--venom")
conversationQuote.innerText = response.data.quote;

let conversationBlock = document.createElement("div");
conversationBlock.classList.add("conversation__block--venom");
conversationBlock.appendChild(conversationQuote);

conversationBox.appendChild(conversationBlock);
})
}

let addOwnQuote = (event) => {
    event.preventDefault();
      
    const inputValue = event.target.textInput.value;
    
    let conversationQuote = document.createElement("div")
    conversationQuote.classList.add("conversation__quote")
    conversationQuote.innerText = inputValue;

    let conversationBlock = document.createElement("div");
    conversationBlock.classList.add("conversation__block");

    conversationBlock.appendChild(conversationQuote);

    conversationBox.appendChild(conversationBlock);

    event.target.reset()
}

let addOwnQuoteVenom = (event) => {
    event.preventDefault();
      
    const inputValue = event.target.textInputVenom.value;
    console.log(inputValue)
    let conversationQuote = document.createElement("div")
    conversationQuote.classList.add("conversation__quote--venom")
    conversationQuote.innerText = inputValue;

    let conversationBlock = document.createElement("div");
    conversationBlock.classList.add("conversation__block--venom");

    conversationBlock.appendChild(conversationQuote);

    conversationBox.appendChild(conversationBlock);

    event.target.reset()
}

button.addEventListener("click", addQuote)
buttonVenom.addEventListener("click", addQuoteVenom)
buttonIronman.addEventListener("click",addQuote)
buttonThanos.addEventListener("click", addQuoteVenom)
conversationForm.addEventListener("submit",addOwnQuote)
conversationFormVenom.addEventListener("submit",addOwnQuoteVenom)
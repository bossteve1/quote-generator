let quote = document.getElementById("quote");
let author=document.getElementById("author");
let next=document.getElementById("next");

const url="https://type.fit/api/quotes";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
next.addEventListener("click", getQuote);

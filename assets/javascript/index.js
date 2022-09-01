let quote = document.getElementById("quote");
let author=document.getElementById("author");
let next=document.getElementById("next");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b19760d0cmshb361bea5ba9fd16p110996jsn8975d79588c3',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};


let getQuote = () => {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        quote.innerText = response.content;
        author.innerText = response.originator.name;
    })
	.catch(err => console.error(err));
    
};

window.addEventListener("load", getQuote);
next.addEventListener("click", getQuote);

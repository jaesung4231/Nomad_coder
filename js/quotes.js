const quotes=[
{
    quote:"The way to get started ois to quit talking and begin",
    author:"Walt Disney"  
},
{
    quote:"Life is what happens when you're busy making other",
    author:"anybody2"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody3"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody4"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody5"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody6"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody7"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody8"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody9"
},
{
    quote:"Lifre is what happens when you're busy making other",
    author:"anybody10"
}
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const Todaysquote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText =Todaysquote.quote
author.innerText=Todaysquote.author

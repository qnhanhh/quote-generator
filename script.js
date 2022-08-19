const quoteContainer=document.getElementById('quote-container')
const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const twitterBtn=document.getElementById('twitter')
const newQuoteBtn=document.getElementById('new-quote')

let apiQuotes=[]

// get quotes from api
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes'
    try{
        const response=await fetch(apiUrl)
        apiQuotes=await response.json()
        newQuote()
    }catch (error){
        //handle error
    }
}

//get a single quote
function newQuote(){
    //pick a random quote from api
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    authorText.textContent=quote.author || 'Unknown'
    quoteText.textContent=quote.text 
}

//on load
getQuotes()
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

//show loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

//hide loading
function complete() {
    loader.hidden = true
    quoteContainer.hidden = false
}

// get quotes from api
async function getQuotes() {
    loading()
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        //handle error
    }
}

//tweet quote
function tweetQuote() {
    // const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    // window.open(twitterUrl, '_blank')
    // const url=twitterBtn.getAttribute('data-url')
    const url = 'https://academy.zerotomastery.io/courses/1007166/lectures/24246132'
    const fbPopup = window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'pop', 'width=600', 'height=400')
    return false
}

//get a single quote
function newQuote() {
    loading()
    //pick a random quote from api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author || 'Unknown'
    //checkQuote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    //set quote, hide loader
    quoteText.textContent = quote.text
    complete()
}

//event listeners
twitterBtn.addEventListener('click', tweetQuote)
newQuoteBtn.addEventListener('click', newQuote)

//on load
getQuotes()
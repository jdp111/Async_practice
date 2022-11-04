
var newDeck = []

async function Deck() {
    
    let {data:res} = await axios.get("https://deckofcardsapi.com/api/deck/new/draw?count=52");
    
    const newimg = $("<img id = 'cardpic'></img>")
    $("#card").append(newimg);
        
    const but = $("<button id = 'new'>New Card</button>")
    $("body").append(but)
        

    newDeck = await res.cards;
    await $("#new").click(() =>{
            console.log("press")
            newCard(newDeck)
        })
}

Deck()


function newCard(deck) {
    
    const card = deck[deck.length-1];
    deck.pop();
    $("#cardpic").attr("src",card.image);
}

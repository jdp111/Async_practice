
const facts = document.getElementById("facts")

async function Fact(number) {
    const {data: fact} = await axios.get(`http://numbersapi.com/${number}?json`);
    const newP = document.createElement("p");
    newP.innerText=   (fact.text);
    facts.append(newP);
}

const numbers = [3,5,7,11,13]

async function multipleNumbers(numberarray){
    for (number of numberarray){
        Fact(number)
    }
}


async function fourFacts(number){

    Fact(number)
    Fact(number)
    Fact(number)
    Fact(number)
}


async function allFacts(){

    await Fact(7)
    const newbr = document.createElement("br")
    await facts.append(newbr)
    await multipleNumbers(numbers)
    await fourFacts(42)
}

allFacts()

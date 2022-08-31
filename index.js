function writeCards(array, event){
    let thankYouCards = []
    for (let i = 0; i < array.length; i++){
      thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
  }
  
const countDown = (start) => {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log(start);
}
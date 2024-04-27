
let topCardType = document.getElementById('topNumber')
let midleCardtype = document.getElementById("middleNumber")
let bottomCard = document.getElementById("bottomNumber")
// document.addEventListener('click', randomizerCardNumber);
// document.addEventListener('click', randomizerCardType);
// let element = document.querySelector('.firstDiv');
setInterval(randomizerCardType, 1000)
setInterval(randomizerCardNumber, 1000)

function randomizerCardType(){
  let myNumber = Math.floor(Math.random()*3)
  
  let cardType;
  let color; 
  switch(myNumber) {
    case 0:
      // code block
      cardType = "♦"
      color = "red"
      break;
      case 1:
        // code block
        cardType = "♥"
        color = 'red'
        break;
        case 2:
          // code block
          cardType = "♠"
          color = 'black'
          break;
          case 3:
            // code block
            cardType = "♣"
            color = 'black'
            break;
            default:
              // code block
              alert("card type error")
            }
            
            let element = document.querySelector('#firstDiv');
            element.style.color = color;
            
            topCardType.innerHTML = cardType
            bottomCard.innerHTML = cardType
            
          }
          randomizerCardType()
          
          
          function randomizerCardNumber(){
            
    let myNumber = Math.floor(Math.random()*13)+1
    let myCardNumber = myNumber
   
   
        if (myNumber > 1 && myNumber <= 10 ){
            myCardNumber = myNumber}
        else{
            

            switch(myNumber) {
                case 1:
                  // code block
                  myCardNumber = "A"
                  break;
                case 11:
                  // code block
                  myCardNumber = "J"
                  break;
                case 12:
                  // code block
                  myCardNumber = "Q"
                  break;
                  case 13:
                 // code block
                  myCardNumber = "K"
                  break;
                default:
                  // code block
                  alert("card type error")
              }
            //return myNumber

          }

        
              midleCardtype.innerHTML = myCardNumber;
              
      }
      randomizerCardNumber();

    
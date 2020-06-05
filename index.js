// Code your solutions in this file







   let persons =[]

function writeCards(a, b){
  
  for(var i=0; i<a.length ; i++){
 
    a.push('Thank you, '+a[i]+', for the wonderful '+b+' gift!');

  }
  // console.log(persons)
  return a
}



writeCards(['Lisa', 'Kaitlin', 'Jan'], "surprise" );
// function  countDown(a){
// while(i!==0){
//     i--
//     console.log(i)
//   }
// }
// console.log(countDown(10))
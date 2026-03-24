//intanto prima voglio trovare i numeri da 1 a 100
// poi per ogni numero se e' divisibile per 3 scrivo "Fizz"
// per ogni numero divisibile per 5 scrivo "Buzz"
// se lo sono per entrambi metto "FizzBuzz"

for (let numb = 1; numb <= 100; numb++) {
    if (numb % 3 === 0 && numb % 5 === 0){
        console.log("FizzBuzz");
    } else if (numb % 3 === 0) {
        console.log("Fizz");
    } else if (numb % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(numb);
        
}

    
} 


// <= - minore uguale,  && - and, % - modulo per capire se il n e' divisibile, numb - variabile usata per i numeri
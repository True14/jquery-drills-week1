/* global $ */

function fizzBuzz(countTo) {
      const numbers = [];
      
      for (let j=1; j<=countTo; j++){
        numbers.push(j);
      }
      
      for (let i=0; i<numbers.length; i++){
        if (numbers[i] % 15 == 0){
            numbers[i] = "fizzbuzz";
        } else if (numbers[i] % 3 === 0){
            numbers[i] = "fizz";
        } else if (numbers[i] % 5 === 0){
            numbers[i] = "buzz";
        }
      }

      return numbers;
    }

$(function(){
    $("form#number-chooser").submit(function(event){
        event.preventDefault();
        $('div.js-results').empty();
        
        const arr = fizzBuzz($('input#number-choice').val());
        
        arr.forEach(i => {
            let whichClassToAdd = '';
            switch (i) {
                case "fizz" : whichClassToAdd = "fizz"; break;
                case "buzz" : whichClassToAdd = "buzz"; break;
                case "fizzbuzz" : whichClassToAdd = "fizzbuzz"; break;
                default: break;
            }
            
            $('div.js-results').append( $(
                `
                <div class="fizz-buzz-item ${whichClassToAdd}">
                    <span>${i}</span>
                </div>
                `
            ));
        });
    });
});     

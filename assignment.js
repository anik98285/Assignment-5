    //1st Problem-

    function kilometerToMeter(kilometer){

    var meter = kilometer * 1000;
    return meter;
    }
    var fristMeter = kilometerToMeter(5);
    console.log(fristMeter);

    var secondMeter = kilometerToMeter(6);
    console.log(secondMeter); 

    var tiredMeter = kilometerToMeter(10);
    console.log(tiredMeter);

    // 2nd Problem-


    function budgetCalculator(watch, phone, laptop){

   
    var total = watch * 50 + phone * 100 + laptop * 500;

    return total;    

    }

    var budget = budgetCalculator(50, 25, 15);

    console.log(budget);


    // 3rd Problem-

    function hotelCost(days){
   

    if (days <= 10) {
        cost = days * 100;
    }

    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        days = firstPart + secondPart;
    }

    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var tiredPart = remaining * 50;
        cost = firstPart + secondPart + tiredPart;
     }

     return cost;

    }
    var days = hotelCost(50)
    console.log(days);


    // 4th Problem-

    var name = ['Rahim', 'Shakib', 'Ali', 'Anik'];


    function megaFriend(name){
         
        word = "";
        for(var i = 0; i < name.length; i++){
                if (word.length < name[i].length) {
                  word = name[i];
                }
              }
              return word;
     }
   
    var result = megaFriend(name)
    console.log(result);
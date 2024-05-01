let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    racecars: 5,
    blackCars: 40,
    rareCars: 2
};

let count = 0;
for (const property in statistics){
    count++;
	if (('q' < property && property < 's') || ((count % 2) != 0)){
  	    console.log(property + ': ' + statistics[property]);
    }
}
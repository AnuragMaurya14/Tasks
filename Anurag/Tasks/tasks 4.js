class Car{
    constructor(Tankcapacity,mileage){
    this.Tankcapacity=Tankcapacity;
    this.mileage=mileage;
    this.fuelLevel=Tankcapacity;
    this.distanceTravel=0;
    }
 drive(distance){
    const fuelUsed = distance/this.mileage;
    if(this.fuelLevel>=fuelUsed){
        this.distanceTravel=this.distanceTravel+distance;
        this.fuelLevel=this.fuelLevel-fuelUsed
        console.log(`car drove ${distance} kilometer`)
    }
    else{
        console.log("Not enough fuel");
    }
 }
getFuelLevel(){
    return this.fuelLevel
}
getdistanceTravel(){
    return this.distanceTravel
}
}
const myCar = new Car(10, 15);

console.log("Initial fuel",myCar.getFuelLevel());
console.log("distance travelled",myCar.getdistanceTravel());
myCar.drive(100);
console.log("Fuel used=",myCar.getFuelLevel());
console.log("tolal distanc traveled",myCar.getdistanceTravel());

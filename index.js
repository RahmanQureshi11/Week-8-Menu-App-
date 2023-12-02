class Car {
    constructor(make, model) {   // This constructor will make the car 
        this.make = make;
        this.model = model;
        this.customizations = [];
    }
     //This method will add customization to car 
    addCustomization(customization) { 
        this.customizations.push(customization);
        console.log(`${customization} added to ${this.make} ${this.model}.`);
    }
      // This method you will be able to view what customization to the car 
    viewCustomizations() {   
        if (this.customizations.length > 0) {
            console.log(`Customizations for ${this.make} ${this.model}:`);
            this.customizations.forEach((customization, index) => {
                console.log(`${index + 1}. ${customization}`);
            });
            // If there is no customization this will be displayed 
        } else {  
            console.log(`No customizations available for ${this.make} ${this.model}.`);
        }
    }
       // Thus will delete the customization to any car 
    deleteCustomization(index) {
        if (index > 0 && index <= this.customizations.length) {
            const deletedCustomization = this.customizations.splice(index - 1, 1)[0];
            console.log(`Deleted customization: ${deletedCustomization}`);
            //This will make sure that right index is written 
        } else {
            console.log("Invalid customization index.");
        }
    }
}
  // Second Class 
class CarCustomizationApp {
    constructor() {
        this.cars = [];
        this.selectedCar = null; // manage one car at a time
    }

    start() { // entry point to application
        let selection = this.showMainMenuOptions();
        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.createCar();
                    break;
                case '2':
                    this.viewCar();
                    break;
                case '3':
                    this.deleteCar();
                    break;
                case '4':
                    this.displayCars();
                    break;
                default:
                    selection = '0';
            }
            selection = this.showMainMenuOptions();
        }
        console.log('Goodbye!');
    }
    // This is the options  avabiable for the user to see and choose from it. 
    showMainMenuOptions() {  
        return prompt(`
0) Exit
1) Create a new car
2) View a car
3) Delete a car
4) Display all cars
`);
    }
    // User will be able to add customization and delele it . 
   showCarMenuOptions(carInfo) {
        return prompt(`
0) Back
1) Add a new customization
2) Delete a customization
-----------------
${carInfo}
`);
    }
      // This will display the car Index , Make and Model.
    displayCars() {
        let carString = '';
        this.cars.forEach((car, index) => {
            carString += `${index}) ${car.make} ${car.model}\n`;
        });
        alert(carString);
    }
     // This Prompt will let the user entry the car and it's Model.
    createCar() {
        let make = prompt('Enter make for new car: ');
        let model = prompt('Enter model for new car: ');
        this.cars.push(new Car(make, model));
    }
     // This will help the user new the car based on the index Entered. 
    viewCar() {
        let index = prompt("Enter the index of the car that you want to view:");
        if (index > -1 && index < this.cars.length) {
            this.selectedCar = this.cars[index];
            let description = `Car Make: ${this.selectedCar.make}\nCar Model: ${this.selectedCar.model}\n`;
            description += `${this.selectedCar.viewCustomizations()}\n`;
            let selection1 = this.showCarMenuOptions(description);
            switch (selection1) {
                case '1':
                    this.addCustomization();
                    break;
                case '2':
                    this.deleteCustomization();
                    break;
            }
        }
    }
    // This will let user delete car based on the index enterned. 
    deleteCar() {
        let index = prompt('Enter the index of the car that you wish to delete: ');
        if (index > -1 && index < this.cars.length) {
            this.cars.splice(index, 1);
        }
    }
      // User will be able to enter customization for the car.
    addCustomization() {
        let customization = prompt('Enter customization for the car: ');
        this.selectedCar.addCustomization(customization);
    }
    // This will let the user delete the customization based on the index. 
    deleteCustomization() {
        let index = prompt('Enter the index of the customization that you wish to delete: ');
        if (index > -1 && index < this.selectedCar.customizations.length) {
            this.selectedCar.deleteCustomization(index);
        }
    }
}
/*  car customization application by creating an instance of CarCustomizationApp
 and then starting the application by calling its start() method.*/
let carCustomizationApp = new CarCustomizationApp();
carCustomizationApp.start();

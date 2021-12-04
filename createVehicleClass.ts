interface Vehicle {
  set_num_of_wheels: number;
  set_num_of_passengers: number;
  has_gas: boolean;
}

class VehicleCreate implements Vehicle {
  set_num_of_wheels: number;
  set_num_of_passengers: number;
  has_gas: boolean;

  constructor(
    set_num_of_wheels: number,
    set_num_of_passengers: number,
    has_gas: boolean
  ) {
    this.set_num_of_wheels = set_num_of_wheels;
    this.set_num_of_passengers = set_num_of_passengers;
    this.has_gas = has_gas;
  }
}

const car = new VehicleCreate(4, 5, true);
const plane = new VehicleCreate(2, 200, false);

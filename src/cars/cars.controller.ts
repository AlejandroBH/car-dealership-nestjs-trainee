import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    if (+id >= this.cars.length || isNaN(+id))
      return {
        message: `not found id: ${id}`,
      };

    console.log({ id: +id, nombre: this.cars[id] });
    return { id: +id, nombre: this.cars[id] };
  }
}

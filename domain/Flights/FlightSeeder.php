<?php

namespace Domain\Flights;

use Illuminate\Database\Seeder;

class FlightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 100; $i++) {
            $flight = new Flight();
            $flight->name = $faker->lastName;
            $flight->airline = $faker->company;
            $flight->save();
        }
    }
}

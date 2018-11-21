<?php

use Illuminate\Database\Seeder;
use Domain\Flights\FlightSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(FlightSeeder::class);
    }
}

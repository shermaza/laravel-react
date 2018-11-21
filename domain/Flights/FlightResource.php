<?php

/**
 * Created by PhpStorm.
 * User: zachary.sherman
 * Date: 11/21/2018
 * Time: 11:12 AM
 */

namespace Domain\Flights;


use Illuminate\Http\Resources\Json\JsonResource;

class FlightResource extends JsonResource
{
    public $collects = 'Domain\Flights\Flight';
    
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'airline' => $this->airline
        ];
    }
}

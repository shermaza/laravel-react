<?php

/**
 * Created by PhpStorm.
 * User: zachary.sherman
 * Date: 11/21/2018
 * Time: 11:18 AM
 */

namespace Domain\Flights;


use Illuminate\Http\Resources\Json\ResourceCollection;

class FlightCollection extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'links' => [
                'self' => 'link-value'
            ]
        ];
    }
}

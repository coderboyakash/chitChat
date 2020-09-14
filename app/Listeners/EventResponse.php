<?php

namespace App\Listeners;

use App\Events\EventCalled;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class EventResponse
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  EventCalled  $event
     * @return void
     */
    public function handle(EventCalled $event)
    {
        dd($event);
    }
}

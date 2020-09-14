@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row" id="app">
            <div class="col-4 offset-4 offset-sm-1 col-sm-10">
                <li class="list-group-item active rounded">Chat Room</li>
                <div class="badge badge-pill badge-warning">@{{ typing }}</div>
                <ul class="list-group" v-chat-scroll>
                    <message 
                        v-for="value, index in chat.messages" 
                        :key=value.index 
                        :color=chat.color[index] 
                        :user=chat.user[index]
                        :time=chat.time[index]
                    >
                        @{{value}}
                    </message>
                </ul>
                <input 
                    type="text" 
                    v-model="message" 
                    class="form-control" 
                    placeholder="Type You Message"
                    @keyup.enter='send'
                >
            </div>
        </div>
    </div>
@endsection

require('./bootstrap');

window.Vue = require('vue');

Vue.component('message', require('./components/message.vue').default);

import Vue from 'vue'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const app = new Vue({
    el: '#app',
    data:{
        message: '',
        chat: {
            messages:[],
            user:[],
            color:[],
            time:[],
        },
        typing: ''
    },
    watch:{
        message(){
            Echo.private('chat')
            .whisper('typing',{
                name :this.message
            });
        }
    },
    methods:{
        send(){
            if(this.message.length != 0){
                this.chat.messages.push(this.message);
                this.chat.user.push('you');
                this.chat.color.push('success');
                this.chat.time.push(this.getTime());
                axios.post('/send', {
                    message: this.message
                  })
                  .then(response => {
                        console.log(response);
                  })
                  .catch(response => {
                    console.log(error);
                  });
                  this.message = '';
            }
        },
        getTime(){
            let time = new Date();
            return time.getHours()+":"+time.getMinutes();
        },
    },
    mounted(){
        Echo.private('chat')
            .listen('ChatEvent', (e) => {
                this.chat.messages.push(e.message);
                this.chat.user.push(e.user);
                this.chat.color.push('warning');
                this.chat.time.push(this.getTime());
        })
            .listenForWhisper('typing', (e) => {
                if(e.name != ''){
                    this.typing = 'typing...'
                }else{
                    this.typing = ''
                }
            });
        },
});

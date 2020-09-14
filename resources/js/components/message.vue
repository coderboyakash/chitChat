<template>
    <div>
        <li class="list-group-item rounded" :class="className"><slot></slot></li>
        <small>{{ time }}</small>
        <small class="badge float-right mb-1" :class="badgeClass">{{user}}</small>
    </div>
</template>

<script>
    export default {
        props:[
            'color',
            'user',
            'time'
        ],
        computed:{
            className(){
                return 'list-group-item-'+this.color;
            },
            badgeClass(){
                return 'badge-'+this.color;
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

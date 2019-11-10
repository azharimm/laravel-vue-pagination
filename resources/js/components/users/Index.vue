<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Users</div>

                <div class="card-body">
                   <user v-for="user in users" :key="user.id" :user="user"></user>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from './partials/User'
export default {
    data(){
        return{
             users:[]
        }
    },
    components: {
        User
    },
    mounted(){
        axios.get('/api/users')
        .then(response => {
            this.users = response.data.data
        })
    }
}
</script>

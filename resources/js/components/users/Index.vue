<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Users</div>

                <div class="card-body">
                   <user v-for="user in users" :key="user.id" :user="user"></user>
                </div>
                <pagination :meta="meta"></pagination>
            </div>
        </div>

    </div>
</template>

<script>
import User from './partials/User'
import Pagination from '../pagination/Pagination'

export default {
    data(){
        return{
             users:[],
             meta: {}
        }
    },
    components: {
        User,
        Pagination
    },
    mounted(){
        axios.get('/api/users')
        .then(response => {
            this.users = response.data.data
            this.meta = response.data.meta
        })
    }
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Users</div>

                <div class="card-body">
                   <user v-for="user in users" :key="user.id" :user="user"></user>
                </div>
                <pagination v-if="meta.current_page" :meta="meta" @pagination:switch="switchPage"></pagination>
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
    watch: {
        '$route.query' (query) {
            this.getUser(query.page)
        }
    },
    mounted(){
        this.getUser()
    },
    methods: {
        getUser(page = this.$route.query.page){
            axios.get('/api/users', {params: {page}})
            .then(response => {
                this.users = response.data.data
                this.meta = response.data.meta
            })
        },
        switchPage(page) {
            this.$router.replace({
                name: 'user.index',
                query: {
                    page
                }
            })
        }
    }
}
</script>

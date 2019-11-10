<template>
    <div>
       <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item" v-for="page in meta.last_page" :key="page">
                    <a class="page-link" href="#">{{page}}</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props:['meta']
}
</script>
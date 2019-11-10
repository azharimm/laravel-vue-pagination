<template>
    <div>
       <nav aria-label="navigation">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled' : meta.current_page === 1}">
                    <a class="page-link" href="#" @click.prevent="switched(meta.current_page - 1)">&laquo;</a>
                </li>
                <template v-if="section > 1">
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="switched(1)">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="goBackSection">...</a>
                    </li>
                </template>    
                <li 
                class="page-item" 
                v-for="page in pages" 
                :key="page"
                :class="{'active': meta.current_page === page}">
                    <a class="page-link" href="#" @click.prevent="switched(page)">{{page}}</a>
                </li>
                <template v-if="section < sections">
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="goForwardSection">...</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="switched(meta.last_page)">{{meta.last_page}}</a>
                    </li>
                </template> 
                <li class="page-item" :class="{'disabled' : meta.current_page === meta.last_page}">
                    <a class="page-link" href="#" @click.prevent="switched(meta.current_page + 1)">&raquo;</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props:['meta'],
    data(){
        return {
            numberPerSection: 3
        }
    },
    computed: {
        sections() {
            return Math.ceil(this.meta.last_page / this.numberPerSection)
        },
        section() {
            return Math.ceil(this.meta.current_page / this.numberPerSection)
        },
        lastPage() {
            let lastPage = ((this.section -1 ) * this.numberPerSection) + this.numberPerSection
            if(this.section === this.sections){
                lastPage = this.meta.last_page
            }
            return lastPage
        },
        pages() {
            return _.range(
                (this.section - 1) * this.numberPerSection + 1, 
                this.lastPage + 1
            )
        }
    },
    methods: {
        switched(page){
            if(page <= 0 || page > this.meta.last_page){
                return 
            }
            this.$emit('pagination:switch', page)
        },
        goForwardSection() {
            this.switched(this.firstPageOfSection(this.section + 1))
        },
        goBackSection() {
            this.switched(this.firstPageOfSection(this.section - 1))
        },
        firstPageOfSection(section) {
            return (section - 1) * this.numberPerSection + 1
        }
    }
}
</script>
<template>
    <div>
        <div class="media">
            <img class="mr-3" src="https://via.placeholder.com/40x40&text=..." alt="Generic placeholder image">
            <div class="media-body">
                <h5 class="mt-0">{{user.name}}</h5>
                {{user.email}}
            </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    props:['user'],
}
</script>
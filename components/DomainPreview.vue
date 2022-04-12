<template>
    <div class="card w-80 bg-lime-400 shadow-xl">
        <img  class="h-56" v-bind:src=imgURL />
        <div class="card-body bg-violet-500">
            <h2 class="card-title">{{title}}</h2>
            <p>{{description}}</p>
            <div class="justify-end card-actions">
                <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                    <NuxtLink v-bind:to=link> Visit now</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['imgURL','title','description','link']
}
</script>
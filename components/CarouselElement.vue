<template>
    <div class="grid place-items-center">
        <img  v-bind:src=CarouselImage class="max-w-3xl h-96"> 
    <p class="bg-violet-500 p-16 text-stone-50 font-black text-3xl max-w-4xl leading-loose carouselFont" >
      {{CarouselDescription}}
        </nuxt-link>
      </p>
    </div>
</template>

<script>
export default {
  props: ['CarouselImage', 'CarouselDescription']
}
</script>
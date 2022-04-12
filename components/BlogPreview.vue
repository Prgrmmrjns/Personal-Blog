<template>
<NuxtLink :to="post.slug" :aria-label="`Read - ${post.title}`">
  <article class="prose prose-sm sm:prose lg:prose-lg bg-violet-500 pl-8 pr-8 pb-4 rounded-3xl text-stone-50 hover:text-lime-400">
    <div class="flex space-x-4">
      <div class="space-y-8 text-xl font-semibold">
          <p class="grid">
            <span class="text-gray-700">Written by</span>  
            {{ post.owner }} 
            <img :src="post.profile_img" class="w-24 rounded-full" alt="Jonas Profil">
            </p>
        </div>
      <div class="container mx-auto">
        <img class="max-h-80 mx-auto rounded-2xl" :src="post.img"/>
      </div>
      
    </div>
    <div class="flex font-semibold text-lg space-x-8 bg-gray-700 text-lime-400 rounded-3xl justify-around">
          <p class="grid space-y-4"><span>Posted on:</span> {{post.creationDate}}</p>
          <p class="grid"><span>Lastly updated on:</span> {{post.lastUpdatedAt}}</p>
          <p class="grid"><span>Domain:</span> {{post.domain}}</p>
      </div>  
      <h2 class="font-semibold">
        {{ post.title }}
      </h2>
      <p class="font-light leading-7 text-lg">
        {{ post.description }}
      </p>
      <div class="mt-5">
          Details →
      </div>
  </article>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

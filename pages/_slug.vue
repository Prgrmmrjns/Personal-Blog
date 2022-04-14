<template>
<div>
  <div class="grid place-items-center mt-24">
    <div class="w-2/3 flex space-x-8 bg-violet-500 p-8 rounded-2xl justify-between">
        <div class="space-y-8 text-xl font-semibold">
          <p class="flex justify-start">
                <label class="text-gray-700 w-48 mr-4">Written by:</label>
                {{ post.owner }} 
                <img :src="post.profile_img" class="w-24 rounded-full ml-8" alt="Jonas Profil">
            </p>
            <p class="flex justify-start">
                <label class="text-gray-700 w-48 mr-4">Posted on:</label>
                {{post.creationDate}}   
            </p>
            <p class="flex justify-start">
                <label class="text-gray-700 w-48 mr-4">Lastly updated on:</label>
                {{post.lastUpdatedAt}} 
            </p>
            <p class="flex justify-start">
                <label class="text-gray-700 w-48 mr-4">Domain:</label>
                {{post.domain}}
            </p>
        </div>
        <img class="max-h-80 mx-auto rounded-2xl" :src="post.img"/>
      </div>
  </div>   
  <article class="divide-y divide-gray-300 m-24 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto max-w-none mt-5">
    <header class="mx-auto text-center pb-10">
      <h2 class="text-5xl font-bold tracking-tight text-gray-900">
        {{ post.title }}
      </h2>
    </header>

    <NuxtContent
      :document="post"
    />
  </article>
  <div class="grid place-items-center">
    <div class="form-control bg-violet-500 p-12 grid place-items-center rounded-xl">
      <h2 class="text-4xl font-bold">Comments</h2>
</div>
  </div>
</div>
  
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const post = await $content('posts')
    .where({ slug: params.slug })
    .fetch()
    return { post: post[0]}
  },
}
</script>
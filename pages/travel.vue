<template>
<div>
    <NavBar/>
    <div class="grid place-items-center">
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);">
        <div class="flex items-center justify-center h-full w-full bg-gray-700 bg-opacity-40">
            <div class="text-center">
                <h1 class="text-stone-50 text-2xl font-semibold uppercase md:text-3xl bg-gray-700 p-4 rounded-lg">Travel</h1>
            </div>
        </div>
    </div>
        </div>
    <div class="grid place-items-center h-screen">
      <ul class="divide-y divide-gray-300">
        <li v-for="post in posts" :key="post.title" class="py-14">
          <div class="rounded-xl">
            <BlogPreview :post="post" />
        </div>

    </li>
  </ul>
    </div>
    <Footer/>
</div>
    
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'createdAt', 'img', 'owner', 'createdAt', 'domain', 'slug'])
      .sortBy('createdAt', 'desc')
      .where({
          domain: 'Travel'
      })
      .fetch()

    return { posts }
  },
}
</script>
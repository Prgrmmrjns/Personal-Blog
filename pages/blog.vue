<template>
<div>
  <NavBar/>
  <div class="grid place-items-center">
    <div class="grid place-items-center">
      <h1 class="m-16 text-4xl">Domains</h1>
      <div class="grid gap-8 lg:flex lg:space-x-8 m-6">
        <DomainPreview 
          imgURL="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          title="Science" 
          description="What ist the advantage of genetically modified fries? - They are CRISPR." 
          link="science" />
        <DomainPreview 
          imgURL="https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          title="Travel" 
          description="Where do sharks like to go on vacation? - Finland!" 
          link="travel" />
        <DomainPreview 
          imgURL="https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          title="Food" 
          description="Can I tell you a vegan joke? I promise it won’t be cheesy." 
          link="food" />
        <DomainPreview 
          imgURL="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          title="Fitness" 
          description="Why don’t cows skip leg day? Because they care about their calves." 
          link="fitness" />
        <DomainPreview 
          imgURL="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          title="Programming" 
          description="A programmer went to the grocery store. His wife said: while you are out, go get some milk. - He never came back." 
          link="programming" />
      </div>
    </div>
    <div class="grid place-items-center">
      <h1 class="m-16 text-4xl font-bold">Latest Blog Posts</h1>
    </div>
      <ul class="divide-y divide-gray-300">
        <li v-for="post in posts" :key="post.title" class="py-14">
          <div class="rounded-xl">
            <BlogPreview :post="post" />
        </div>
      </li>
      </ul>
  <Footer/>
    
  </div>
</div>

</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return { posts }
  },
}
</script>
<template>
  <div>
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="bg-violet-500 p-4 rounded-2xl text-stone-50 font-black text-2xl mr-40 carouselFont">{{ item.title }}</v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "jonas.jpg",
          title: "Cool that you came by to visit my site! Here, I want to share all my experiences and knowledge with you in my blog."
        },
                {
          src: "Como.jpg",
          title: "Get to know more about this place and other breathtaking places I have been in the Travel Blog."
        },
        {
          src: "Science.jpg",
          title: "My passion? Science! I strive to progress science and humankind. Find out about my science adventures in the science blog"
        },
        {
          src: "Cat.jpg",
          title: "Do you also think out of the box? Post your creative and intriguing blogpost in the Compose section."
        }
      ]
    };
  }
};
</script>
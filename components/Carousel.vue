<template>
<div class="w-full carousel mt-32 mb-32">
  <div id="slide1" class="relative w-full carousel-item lg:flex lg:justify-center md:grid md:place-items-center">
    <CarouselElement CarouselImage="japgarten.jpg" 
    CarouselDescription="Cool that you came by to visit my site! Here, I want to share all my experiences and knowledge 
    with you in my blog."/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 carouselFont">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="relative w-full carousel-item lg:flex lg:justify-center md:grid md:place-items-center">
    <CarouselElement CarouselImage="Science.jpg" 
    CarouselDescription="My passion? Science! I strive to progress science and humankind. Find out about my science 
    adventures in the science blog."/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="relative w-full carousel-item lg:flex lg:justify-center md:grid md:place-items-center">
    <CarouselElement CarouselImage="Cat.jpg" 
    CarouselDescription="Do you also think out of the box? Post your creative and intriguing blogpost in the Compose section."/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="relative w-full carousel-item lg:flex lg:justify-center md:grid md:place-items-center">
    <CarouselElement CarouselImage="Como.jpg" 
    CarouselDescription="Get to know more about this place and other breathtaking places I have been in the Travel Blog."/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</template>

<script>
export default{
  props:['imgURL','description']
}
</script>

<style>
.carouselFont{
  font-family: 'Galada', sans-serif;
}
</style>
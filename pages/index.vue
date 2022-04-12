<template>
<div>
      <NavBar/>
      <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://wallpaperaccess.com/full/1561054.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-700 bg-opacity-40">
            <div class="text-center">
                <h1 class="text-stone-50 text-2xl font-semibold uppercase md:text-4xl bg-gray-700 pt-4  rounded-lg caption">Hi! I am Jonas. </h1>
                <h1 class="text-stone-50 text-2xl font-semibold uppercase md:text-4xl bg-gray-700 p-4 rounded-lg caption">Welcome to my personal website!</h1>
            </div>
        </div>
    </div>
        <Carousel/>
        <Footer/>
</div>

  
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
.caption{
  font-family: 'Staatliches', sans-serif;
}
</style>
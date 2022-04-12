<template>
  <div>
    <NavBar/>
          <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://wallpaperaccess.com/full/1561054.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-700 bg-opacity-40">
            <div class="text-center">
                <h1 class="text-stone-50 text-2xl font-semibold uppercase md:text-4xl bg-gray-700 pt-4  rounded-lg caption p-4">You are now signed out. </h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    $nuxt.$fire.auth.signOut()
  }
}
</script>

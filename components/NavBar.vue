<template>
    <div class="bg-gray-700  border-lime-400 border-b-4 
    max-w-full h-64 md:h-44 lg:h-28 flex ml-2">
        <nuxt-link to="/" class="" >
            <img  class="h-16 rounded-2xl shrink-0 m-4 
            hover:bg-lime-400 hover:opacity-10" 
                src="Logo.png" alt="Logo">
        </nuxt-link>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:flex pr-2 pl-2">
            <ButtonMain buttonContent="Blog" link= "blog"/>
            <ButtonMain buttonContent="Projects" link= "projects"/>
            <ButtonMain buttonContent="About" link= "about"/>
            <ButtonMain buttonContent="Contact" link= "contact"/>
            <ButtonMain v-if="!$fire.auth.currentUser" buttonContent="SignUp" link= "signup"/>
            <ButtonMain v-if="!$fire.auth.currentUser" buttonContent="SignIn" link= "signin"/>
            <ButtonMain v-else buttonContent="SignOut" link= "signout"/>
        </div>
            
    </div>
</template>

<script>

</script>
<template>
    <div>
        <div class="grid place-items-center">
    <div class="w-full bg-cover bg-center mb-24" style="height:32rem; background-image: url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);">
        <div class="flex items-center justify-center h-full w-full bg-gray-700 bg-opacity-40">
            <div class="text-center">
                <h1 
                class="text-stone-50 text-2xl font-semibold uppercase md:text-3xl bg-gray-700 p-4 rounded-lg">
                Learn about my latest projects.
                </h1>
            </div>
        </div>
    </div>
            <ul class="grid place-items-center gap-12 lg:grid-cols-2 xl:grid-cols-3">     
            <ProjectPreview 
                imgURL="weather.jpeg"
                projectName="Global Weather App" 
                projectLink="https://globalweatherfinder.netlify.app/"
                projectDescription="A website that gives you the latest weather information about any place in the world."
                projectGithubLink="https://github.com/Prgrmmrjns/Weather-App"/>
            <ProjectPreview 
                imgURL="chess.jpeg"
                projectName="Chess Game" 
                projectLink="Tobe published soon"
                projectDescription="A chess game to play with your friends and against the AI."
                projectGithubLink="Soon to be published on Github"/>
            <ProjectPreview 
                imgURL="cotwoemission.webp"
                projectName="CO2 emission Calculator" 
                projectLink="Tobe published soon"
                projectDescription="An app that estimates your yearly CO2 emission and gives tipps on how to reduce your CO2 emissions."
                projectGithubLink="Soon to be published on Github"/>
        </ul>
        <div class=" flex justify-between space-x-16 max-w-5xl bg-violet-500 text-stone-50 p-8 rounded-3xl font-semibold leading-10 text-base lg:text-lg m-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p>
                Do you have any ideas where I could improve my app? Do you have any suggestions on future projects? Then write me an email or send me a message on LinkedIn.
            </p>
        </div>
    
    
        </div>
    </div>
</template>

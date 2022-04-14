<template>
<div>
    <h1 class="text-stone-50 text-2xl font-semibold uppercase md:text-3xl m-16 rounded-lg text-center">About me</h1>
    <div class="lg:flex lg:justify-around md:grid md:place-items-center gap-6">
        <img src="About.jpg" alt="Picture of me" class="h-96 rounded-3xl m-8">
        <p class="max-w-5xl bg-violet-500 text-stone-50 p-8 rounded-3xl font-semibold leading-10 text-base lg:text-lg m-8">
        Hi! My name is Jonas. I am 22 years old. I was born and raised in Bonn and Troisdorf, Germany. 
        In 2017 I finished school and moved to Maastricht, Netherlands to start my Bachelor Biomedical Sciences. 
        Now I am currently doing my master Molecular Medicine in Göttingen, Germany.
        I love doing Sports, coding projects and reading books about Science Fiction.
        I have a wonderful girlfriend now studying in the Netherlands.
        Learning languages - no matter if spoken or programming languages - is another hobby of mine. 
        Feel free to speak to me in any languages you want.
        The current climate crisis really worries me and I try to live sustainable as much as I can. 
        However, I am very tolerant and open for other opinions and new ideas. 
        Most importantly, I am a curious person and I love to get to know new people and exchange experiences with other people!</p>
    </div>
    <div>
        <div class="grid place-items-center lg:flex lg:justify-around m-12">
        <SkillsElement 
          skilltype = "Lab skills" 
          skillone = "Cell culturing" profone = "🖖"
          skilltwo = "Genome Editing" proftwo = "🚀"
          skillthree = "Western Blot" profthree = "🧙"
          skillfour = "q-RT-PCR" proffour = "🤷"
          skillfive = "Immunohistochemistry" proffive = "🤷"
          />
        <SkillsElement
          skilltype = "Programming skills" 
          skillone = "Front End" profone = "🧑‍🎨"
          skilltwo = "Back End" proftwo = "🚑"
          skillthree = "Machine Learning" profthree = "🦸‍♂️"
          skillfour = "Game Development" proffour = "🥷"
          skillfive = "Data Analysis" proffive = "🕵️"
          />
        <SkillsElement
          skilltype = "Languages" 
          skillone = "🇩🇪" profone = "💯"
          skilltwo = "🇬🇧" proftwo = "💯"
          skillthree = "🇳🇱" profthree = "💯"
          skillfour = "🇪🇸" proffour = "🙃"
          skillfive = "🇫🇷" proffive = "🙃"
          />
        </div>
        
    </div>
</div>
    
</template>
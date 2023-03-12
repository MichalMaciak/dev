<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import michal from '$lib/assets/michal.jpg?run'
    import github from '$lib/assets/git.png?run'
    import ln from '$lib/assets/in.png?run'
    import mail from '$lib/assets/gmail.png?run'
    import phone from '$lib/assets/phone.png?run'
    import discord from '$lib/assets/discord.png?run'
    import bg from '$lib/assets/wallpaper.jpg?run'
    import SvelteSeo from "svelte-seo";

</script>

<header class="bg-slate-900">
    <section class="flex flex-col md:flex-row px-8 md:px-24 py-8 items-center md:items-start">
        <div><Img class="w-40 rounded-full max-w-xs " src={michal} alt="Michał Maciak" /> 
            <p class="text-xl text-teal-100 pt-4 text-center md:text-left">Michał Maciak <br>- maciak.dev <br> Warsaw, Poland</p></div>
        <div class="flex flex-row justify-center items-start md:justify-end w-full md:w-5/6 pt-8 md:pt-0">
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="https://github.com/MichalMaciak"><Img class="w-20 md:w-12" src={github} alt="GitHub" /></a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="https://www.linkedin.com/in/michalmaciak/"><Img class="w-20 md:w-12" src={ln} alt="linkedin" /></a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="https://discord.gg/Fscq3Khxtt"><Img class="w-20 md:w-12" src={discord} alt="discord" /></a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="mailto:michal@maicak.dev"><Img class="w-20  md:w-12" src={mail} alt="e-mail" /></a></div>
            <div class="px-2 md:px-4 hover:animate-bounce"><a href="tel:+48694296006"><Img class="w-20 md:w-12" src={phone} alt="phone" /></a></div>
        </div>  
       
       
       
       
    </section>
</header>

<main class="bg-slate-900">
    
    <section class="flex flex-col justify-center items-center pb-10"> 
      <h2 class="text-teal-100 text-4xl md:text-5xl my-12 px-8 font-sans">"The cobbler's children have no shoes"</h2>  
      <h1 class="text-6xl mx-32 md:text-9xl md:mx-72 text-teal-400  text-right font-bold font-serif tracking-wider mb-10">
            I solve <span class="underline">Your</span> problems
        </h1>
        
        <h2 class="text-teal-100 text-2xl md:text-3xl my-12 px-8 font-sans">Transforming your IT struggles into digital success:</h2>  
        
        <div class="flex flex-col md:flex-row md:py-12 ">
            <div class="px-14 py-8 md:py-0"><h3 class="text-teal-100 text-3xl font-sans border-l-2 border-teal-100 pl-4">websites, speed and functionality issues</h3></div>
            <div class="px-14 py-8 md:py-0"><h3 class="text-teal-100 text-3xl font-sans border-l-2 border-teal-100 pl-4" >applications, configurators, scripts</h3></div>
            <div class="px-14 py-8 md:py-0"><h3 class="text-teal-100 text-3xl font-sans border-l-2 border-teal-100 pl-4">management, conversion, accessibility</h3></div>
        </div>
        
    </section>
 
</main>
<footer class="bg-slate-900 border-t-2 border-teal-100">
    <p class="text-teal-100 font-sans p-8 py-8 text-right">© 2023 maciak.dev</p>
</footer>


<SvelteSeo
  title="Maciak.dev | I am solving your IT problems"
  description="Are you struggling with website speed and functionality issues, or looking to develop custom applications, configurators, or scripts? As an experienced IT developer, I specialize in solving these types of challenges and providing comprehensive management solutions. "
  canonical="https://maciak.dev"
  keywords="maciak, Problem-solving skills, IT developer, Website development, Website speed, Website functionality, Custom applications, Scripts, Management solutions"
  openGraph={{
    title: 'Maciak.dev | I am solving your IT problems',
    description: 'Are you struggling with website speed and functionality issues, or looking to develop custom applications, configurators, or scripts? As an experienced IT developer, I specialize in solving these types of challenges and providing comprehensive management solutions. ',
    image: 'https://maciak.dev/wallpaper800x600.jpg',
    url: 'https://maciak.dev',
    type: 'website',
    images: [
      {
        url: '/wallpaper800x600.jpg',
        width: 800,
        height: 600,
        alt: 'Squatting'
      }
    ],
    site_name: 'Maciak.dev'
  }}
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Maciak.dev | I am solving your IT problems",
    "description": "Are you struggling with website speed and functionality issues, or looking to develop custom applications, configurators, or scripts? As an experienced IT developer, I specialize in solving these types of challenges and providing comprehensive management solutions.",
    "url": "https://maciak.dev"
  }}
/>
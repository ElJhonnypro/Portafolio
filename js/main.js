let instagramlogo = document.getElementById('instagramlink')

instagramlogo.addEventListener('mouseover', (event) => {
    event.target.innerHTML = 'Instagram<img src="/images/instagram.png" class="instagramlogo">'
})

instagramlogo.addEventListener('mouseout', (event) => {
    event.target.innerHTML = '<img src="/images/instagram.png" class="instagramlogo">'

})

let discordlogo = document.getElementById('discordlink')

discordlogo.addEventListener('mouseover', (event) => {
    event.target.innerHTML = 'Discord: hatbax (In friends)<img src="/images/discord.png" class="instagramlogo">'
})

discordlogo.addEventListener('mouseout', (event) => {
    event.target.innerHTML = '<img src="/images/discord.png" class="instagramlogo">'

})

let botonnavbar1 = document.getElementById('prueba1')

let navbar1header = document.getElementById('navbar1')

let imagenavbar1 = document.getElementById('logonavbar1')



botonnavbar1.addEventListener('click', () => {
    imagenavbar1.classList.add('navbar1effect')
    setTimeout(() => {
        imagenavbar1.classList.remove('navbar1effect')
    }, 1000);
})

let botonnavbar2 = document.getElementById('prueba2')

let navbar2header = document.getElementById('navbar2')

let imagenavbar2 = document.getElementById('logonavbar2')


botonnavbar2.addEventListener('click', () => {
    imagenavbar2.classList.add('navbar2effect')
    setTimeout(() => {
        imagenavbar2.classList.remove('navbar2effect')
    }, 1000);
})
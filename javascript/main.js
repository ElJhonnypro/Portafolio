let instagramlogo = document.getElementById('instagramlink')

instagramlogo.addEventListener('mouseover', ( event )=>{
event.target.innerHTML = 'Instagram<img src="instagram.png" class="instagramlogo">'
})

instagramlogo.addEventListener('mouseout', ( event )=>{
    event.target.innerHTML = '<img src="instagram.png" class="instagramlogo">'

})

let discordlogo = document.getElementById('discordlink')

discordlogo.addEventListener('mouseover', ( event )=>{
    event.target.innerHTML = 'Discord: hatbax (In friends)<img src="discord.png" class="instagramlogo">'
    })
    
    discordlogo.addEventListener('mouseout', ( event )=>{
        event.target.innerHTML = '<img src="discord.png" class="instagramlogo">'
    
    })
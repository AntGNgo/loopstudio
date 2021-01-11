const renderPage = () => {
    const app = document.getElementById('app')
    app.appendChild(buildHeader())
}

const buildHeader = () => {
    const header = document.createElement('header')
    header.appendChild(buildNav())
    header.appendChild(buildMain())

    return header
}

const buildNav = () => {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    const items = ['About', 'Careers', 'Events', 'Products', 'Support']

    items.forEach(item => {
        const listItem = document.createElement('li')  
        listItem.innerHTML = item
        navList.appendChild(listItem)
    })

    const logo = buildLogo()
    nav.appendChild(logo)
    nav.appendChild(navList)
    return nav
}

const buildLogo = () => {
    const logo = document.createElement('img')
    logo.src = './images/logo.svg'
    logo.alt = 'loopstudio logo'
    logo.className = "logo"
    return logo
}


const buildMain = () => {
    const main = document.createElement('main')

    const mainText = document.createElement('h2')
    mainText.innerHTML = "Immersive experiences that deliver"
    mainText.className = 'leading-text'

    main.appendChild(mainText)

    return main

}












renderPage()

{/* <header>
    <nav>
      <img src="./images/logo.svg" alt="">
      <ul>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </nav>
    <div class="leading-text">
      Immersive experiences that deliver
    </div>
  </header>

  

  The leader in interactive VR

  Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.

  Our creations

  See all

  Deep earth
  Night arcade
  Soccer team VR
  The grid
  From up above VR
  Pocket borealis
  The curiosity
  Make it fisheye

  About
  Careers
  Events
  Products
  Support

  © 2021 Loopstudios. All rights reserved.

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
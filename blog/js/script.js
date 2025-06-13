// Header Design
const menuBtn = document.getElementById("menuBtn")
const search = document.querySelector(".search")
const header = document.querySelector("header")

menuBtn.addEventListener("click", function () {
  devices_width = document.documentElement.clientWidth
  if (devices_width < 625) {
    if (this.checked) {
      search.style.display = "flex"
      header.style.height = "200px"
    } else {
      header.style.height = "60px"
      header.style.overflow = "hidden"
    }
  } else {
    search.style.display = "block"
    header.style.height = "60px"
  }
})

// Navbar Design
const navMenu = document.getElementById("menu-btn")
const navMenuIcon = document.querySelector(".menu-btn i")
const nav = document.querySelector("nav")
const nav_text = document.querySelectorAll("nav span")
const nav_box = document.querySelectorAll(".nav-box")
const nav_icon = document.querySelectorAll("nav i")
const container = document.querySelectorAll(".container")

let isToggled = false

navMenu.addEventListener("click", () => {
  if (!isToggled) {
    navMenuIcon.style.transform = "rotate(180deg)"
    nav.style.width = "5rem"
    nav_text.forEach((span) => {
      span.style.display = "none"
    })
    nav_box.forEach((ul) => {
      ul.style.padding = "1rem 1.5rem"
      ul.style.margin = "auto"
    })
    nav_icon.forEach((i) => {
      i.style.margin = "auto"
      i.style.fontSize = "1.25rem"
    })
    container.forEach((container) => {
      container.style.left = "6rem"
      container.style.width = "90%"
    })
  } else {
    navMenuIcon.style.transform = ""
    nav.style.width = ""
    nav_text.forEach((span) => {
      span.style.display = "inline"
    })
    nav_box.forEach((ul) => {
      ul.style.padding = ""
      ul.style.margin = ""
    })
    nav_icon.forEach((i) => {
      i.style.margin = ""
      i.style.fontSize = ""
    })
    container.forEach((container) => {
      container.style.left = ""
      container.style.width = ""
    })
  }

  isToggled = !isToggled
})

const faqIcons = document.querySelectorAll(".faq-icon")

faqIcons.forEach((faqIcon) => {
  faqIcon.addEventListener("click", function () {
    const faqSingle = this.closest(".faq-single") // Get the parent .faq-single element
    const faqP = faqSingle.querySelector("p") // Find the nested p element

    faqIcon.classList.toggle("rotated")

    // Toggle the display of the corresponding p element
    faqP.style.display = faqP.style.display === "block" ? "none" : "block"
  })
})

const labels = document.querySelectorAll(".labels_single")
const labelShow = document.querySelector(".label-show")
let showAll = false

labelShow.addEventListener("click", () => {
  showAll = !showAll // Toggle the showAll variable between true and false
  labels.forEach((label, index) => {
    if (showAll) {
      // Show all labels if showAll is true
      label.style.display = "block"
      labelShow.textContent = "Show less" // Change text to 'Show less'
    } else {
      if (index < 4) {
        label.style.display = "block" // Show the first 4 labels
      } else {
        label.style.display = "none" // Hide the rest
      }
      labelShow.textContent = "Show more" // Change text to 'Show more'
    }
  })
})


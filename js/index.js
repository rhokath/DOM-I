const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// const ctaH1 = document.createElement('h1');
// ctaH1.textContent = "DOM is Awesome!";
// const sectionCta = document.querySelector('.cta-text');
// sectionCta.prepend(ctaH1);
// const ctaH1 = document.querySelector('h1');
// ctaH1.textContent = siteContent["cta"]["h1"];

// const bttn = document.querySelectgitcodegitor("button");
// bttn.textContent = siteContent["cta"]["button"];

//refactor of cta
let ctaText = document.getElementsByClassName('cta-text')[0]
console.log(ctaText)
ctaText.getElementsByTagName('h1')[0].innerHTML = siteContent.cta.h1
ctaText.getElementsByTagName('button')[0].innerHTML = siteContent.cta.button
// let navBar = document.querySelector('nav').children;
// navBar[0].textContent = siteContent["nav"]["nav-item-1"];
// navBar[1].textContent = siteContent["nav"]["nav-item-2"];
// navBar[2].textContent = siteContent["nav"]["nav-item-3"];
// navBar[3].textContent = siteContent["nav"]["nav-item-4"];
// navBar[4].textContent = siteContent["nav"]["nav-item-5"];
// navBar[5].textContent = siteContent["nav"]["nav-item-6"];

//refactor of navbar

let navLinks = document.querySelectorAll('nav a')
console.log(navLinks)


navLinks.forEach(function(link, i){
  link.textContent = siteContent.nav[`nav-item-${i + 1}`]
})



// const header4 = document.querySelectorAll('h4');
// header4[0].textContent = siteContent["main-content"]["features-h4"];
// header4[1].textContent = siteContent["main-content"]["about-h4"];
// header4[2].textContent = siteContent["main-content"]["services-h4"];
// header4[3].textContent = siteContent["main-content"]["product-h4"];
// header4[4].textContent = siteContent["main-content"]["vision-h4"];
// header4[5].textContent = siteContent["contact"]["contact-h4"];

// Refactoring the main content section

// Selecting the 'h4's in main content
let refactorHeader = document.querySelectorAll('.text-content h4')
console.log(refactorHeader)
// Selecting the values from the key value pair inside the main-content
let headerValues = Object.values(siteContent['main-content'])
console.log(headerValues)
// Filtering the values so only the values that are single words are returned
const result = headerValues.filter(value => value.length < 10)
console.log(result)
// Assigning the headers from main content their respective value
refactorHeader.forEach(function(item,i){
  item.textContent = result[i]
  console.log(result[i])
})
// Selecting the 'p's in the main content
let refactorPara = document.querySelectorAll('.text-content p')
console.log(refactorPara)
// Filtering the values for only the actual paragraphs are returned
const paraResult = headerValues.filter(value => value.length > 30)
console.log(paraResult)
// Assigning the paragraphs from main content their respective value
refactorPara.forEach(function(item,i){
  item.textContent = paraResult[i]
})

// Refactoring the Contact section

// Selecting the values in the the contact section of the JSON object
let contactValues = Object.values(siteContent.contact)
console.log(contactValues)
// Filtering out only the paragraph values
const contactResult = contactValues.filter(value => value.length >10)
// Selecting the 'p's in the contact section
let contactPara = document.querySelectorAll('.contact p')
console.log(contactPara)
// Assigning the paragraphs from the contact section their respective value
contactPara.forEach(function(item,i){
  item.textContent = contactResult[i]
})
// Selecting the 'h4' in the contact section and assigning it the correct value
let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = contactValues[0]

// const paraEl = document.querySelectorAll('p');
// paraEl[0].textContent = siteContent["main-content"]["features-content"];
// paraEl[1].textContent = siteContent["main-content"]["about-content"];
// paraEl[2].textContent = siteContent["main-content"]["services-content"];
// paraEl[3].textContent = siteContent["main-content"]["product-content"];
// paraEl[4].textContent = siteContent["main-content"]["vision-content"];
// paraEl[5].textContent = siteContent["contact"]["address"];
// paraEl[6].textContent = siteContent["contact"]["phone"];
// paraEl[7].textContent = siteContent["contact"]["email"];
// paraEl[8].textContent = siteContent["footer"]["copyright"];

// Refactor the footer

let refactorFooter = document.querySelector('footer p')
console.log(refactorFooter)
refactorFooter.textContent = siteContent.footer.copyright

let newAtag = document.createElement('a');
newAtag.textContent = "Hades";
let newAtag2 = document.createElement('a');
newAtag2.textContent = "Zeus";

const newNavContent = document.querySelector('nav');
newNavContent.appendChild(newAtag);
newNavContent.prepend(newAtag2);

let navChange = document.querySelectorAll('a');
navChange.forEach(function(currentValue){
  currentValue.style.color = 'green';
});




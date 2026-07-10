const sr = ScrollReveal({

    distance: "70px",
    duration: 1500,
    delay: 200,
    reset: false

});

sr.reveal(".hero-content", {
    origin: "left"
});

sr.reveal(".hero-image", {
    origin: "right"
});

sr.reveal("#anime h2", {
    origin: "top"
});

sr.reveal(".anime-card", {
    origin: "bottom",
    interval: 150
});

sr.reveal("#games h2", {
    origin: "top"
});

sr.reveal(".featured-game", {
    origin: "bottom"
});

sr.reveal(".game-card", {
    origin: "bottom",
    interval: 120
});

sr.reveal("#categories h2", {
    origin: "top"
});

sr.reveal(".category-card", {
    origin: "bottom",
    interval: 100
});

sr.reveal("#trending h2", {
    origin: "top"
});

sr.reveal(".trending-card", {
    origin: "left",
    interval: 120
});

sr.reveal("#gallery h2", {
    origin: "top"
});

sr.reveal(".gallery-item", {
    origin: "bottom",
    interval: 80
});

sr.reveal("footer", {
    origin: "bottom"
});

const searchOpen = document.getElementById("searchOpen");

const searchPopup = document.getElementById("searchPopup");

const closeSearch = document.getElementById("closeSearch");

searchOpen.onclick = () => {

    searchPopup.classList.add("active");

};

closeSearch.onclick = () => {

    searchPopup.classList.remove("active");

};

window.onclick = (e) => {

    if(e.target === searchPopup){

        searchPopup.classList.remove("active");

    }

};

/*================ GTA VI TRAILER =================*/

const trailerBtn = document.getElementById("openTrailer");

trailerBtn.addEventListener("click", () => {

    window.open(
        "https://www.youtube.com/watch?v=QdBZY2fkU-0",
        "_blank"
    );

});



const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

/*================ GTA VI WISHLIST =================*/

const wishlistBtn = document.querySelector(".wishlist");

wishlistBtn.addEventListener("click",()=>{

    window.open(

        "https://www.rockstargames.com/VI",

        "_blank"

    );

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const loader = document.getElementById("loader");

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        loader.classList.add("loader-hide");

    },2000);

});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText = target;

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    observer.observe(counter);

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*================ SEARCH DATABASE =================*/

const database = [

    {
        name:"One Piece",
        type:"Anime",
        link:"#anime"
    },

    {
        name:"Naruto",
        type:"Anime",
        link:"#anime"
    },

    {
        name:"Jujutsu Kaisen",
        type:"Anime",
        link:"#anime"
    },

    {
        name:"Attack on Titan",
        type:"Anime",
        link:"#anime"
    },

    {
        name:"GTA VI",
        type:"Game",
        link:"#games"
    },

    {
        name:"Cyberpunk 2077",
        type:"Game",
        link:"#games"
    },

    {
        name:"Ghost of Tsushima",
        type:"Game",
        link:"#games"
    },

    {
        name:"Black Myth Wukong",
        type:"Game",
        link:"#games"
    },

    {
        name:"Elden Ring",
        type:"Game",
        link:"#games"
    }

];

const searchInput = document.getElementById("searchInput");

const searchResults = document.getElementById("searchResults");

const noResults = document.getElementById("noResults");


function renderSearch(items){

    searchResults.innerHTML="";

    items.forEach(item=>{

        const icon = item.type==="Anime" ? "🎌" : "🎮";

        searchResults.innerHTML += `

        <div class="search-item" data-link="${item.link}">

            <div class="search-left">

                <span class="search-icon">${icon}</span>

                <span>${item.name}</span>

            </div>

            <small>${item.type}</small>

        </div>

        `;

    });

}

renderSearch(database);

searchInput.addEventListener("input",()=>{

    const value = searchInput.value.toLowerCase();

    const filtered = database.filter(item=>{

        return item.name.toLowerCase().includes(value);

    });

    renderSearch(filtered);

    if(filtered.length===0){

        noResults.style.display="block";

    }

    else{

        noResults.style.display="none";

    }

});

searchInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        const firstResult=document.querySelector(".search-item");

        if(firstResult){

            document.querySelector(firstResult.dataset.link).scrollIntoView({

                behavior:"smooth"

            });

            searchPopup.classList.remove("active");

            searchInput.value="";

            renderSearch(database);

            noResults.style.display="none";

        }

    }

});

searchResults.addEventListener("click",(e)=>{

    const item=e.target.closest(".search-item");

    if(!item) return;

    document.querySelector(item.dataset.link).scrollIntoView({

        behavior:"smooth"

    });

    searchPopup.classList.remove("active");

    searchInput.value="";

    renderSearch(database);

    noResults.style.display="none";

});

new Swiper(".trendingSwiper",{

    slidesPerView:3,

    spaceBetween:30,

    loop:true,

    autoplay:{

        delay:3000,

        disableOnInteraction:false

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        768:{

            slidesPerView:2

        },

        1024:{

            slidesPerView:3

        }

    }

});

sr.reveal("#upcoming h2",{

    origin:"top"

});

sr.reveal(".timeline-item",{

    origin:"left",

    interval:150

});

/*================ MOBILE MENU =================*/

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuBtn.innerHTML = "✕";

        document.body.style.overflow = "hidden";

    }

    else{

        menuBtn.innerHTML = "☰";

        document.body.style.overflow = "auto";

    }

});

document.addEventListener("click",(e)=>{

    if(

        !navMenu.contains(e.target) &&

        !menuBtn.contains(e.target)

    ){

        navMenu.classList.remove("active");

        menuBtn.innerHTML="☰";

        document.body.style.overflow="auto";

    }

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = "☰";

        document.body.style.overflow = "auto";

    });

});

/*================ GALLERY LIGHTBOX =================*/

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

let currentImage = 0;

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentImage=index;

        showImage();

        lightbox.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

function showImage(){

    lightboxImg.src = galleryImages[currentImage].src;

}

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

nextBtn.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage();

});

prevBtn.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage();

});

/*================ LIGHTBOX KEYBOARD =================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

    if(e.key==="ArrowRight"){

        currentImage++;

        if(currentImage>=galleryImages.length){

            currentImage=0;

        }

        showImage();

    }

    if(e.key==="ArrowLeft"){

        currentImage--;

        if(currentImage<0){

            currentImage=galleryImages.length-1;

        }

        showImage();

    }

});

/*================ CUSTOM CURSOR =================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

const hoverItems=document.querySelectorAll(

    "button,a,.anime-card,.game-card,.gallery-item,.category-card"

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});

/*================ CONTACT FORM =================*/

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        formMessage.style.color = "#EF4444";

        formMessage.innerText = "Please fill in all fields.";

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        formMessage.style.color = "#F59E0B";

        formMessage.innerText = "Please enter a valid email.";

        return;

    }

    formMessage.style.color = "#22C55E";

    formMessage.innerText = "Message sent successfully!";

    showToast("✅ Message Sent Successfully");

    contactForm.reset();

});

/*================ SCROLL PROGRESS =================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop = window.scrollY;

    const docHeight =

    document.documentElement.scrollHeight -

    window.innerHeight;

    const progress =

    (scrollTop/docHeight)*100;

    progressBar.style.width = progress + "%";

});

/*================ FAVORITES =================*/

const favoriteButtons = document.querySelectorAll(".favorite-btn");

const favoriteCount = document.getElementById("favoriteCount");

function updateFavoriteCount(){

    let count = 0;

    favoriteButtons.forEach((button,index)=>{

        if(localStorage.getItem("favorite"+index)==="true"){

            count++;

        }

    });

    favoriteCount.innerText = count;

}

favoriteButtons.forEach((button,index)=>{

    if(localStorage.getItem("favorite"+index)==="true"){

        button.classList.add("active");

        button.innerHTML="❤";

    }

    button.addEventListener("click",(e)=>{

        e.stopPropagation();

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            button.innerHTML="❤";

            showToast("❤️ Added to Favorites");

            localStorage.setItem("favorite"+index,true);

        }

        else{

            button.innerHTML="♡";

            showToast("💔 Removed from Favorites");

            localStorage.removeItem("favorite"+index);

        }

        updateFavoriteCount();

    });

});

updateFavoriteCount();

/*================ FAVORITES POPUP =================*/

const favoritesPopup = document.getElementById("favoritesPopup");

const favoritesList = document.getElementById("favoritesList");

const closeFavorites = document.getElementById("closeFavorites");

const favoriteCounter = document.querySelector(".favorite-counter");

favoriteCounter.addEventListener("click",()=>{

    favoritesPopup.classList.add("active");

    renderFavorites();

});

closeFavorites.addEventListener("click",()=>{

    favoritesPopup.classList.remove("active");

});

favoritesPopup.addEventListener("click",(e)=>{

    if(e.target===favoritesPopup){

        favoritesPopup.classList.remove("active");

    }

});

function renderFavorites(){

    favoritesList.innerHTML="";

    let found=false;

    favoriteButtons.forEach((button,index)=>{

        if(localStorage.getItem("favorite"+index)==="true"){

            found=true;

            const card=button.closest(".anime-card,.game-card");

            const title=card.querySelector("h3").innerText;

            favoritesList.innerHTML+=`

                <div class="favorite-item">

                    ❤️ ${title}

                </div>

            `;

        }

    });

    if(!found){

        favoritesList.innerHTML="<p>No favorites yet.</p>";

    }

}

/*================ TOAST =================*/

const toast = document.getElementById("toast");

const toastText = document.getElementById("toastText");

function showToast(message){

    toastText.innerText = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}

/*================ WATCH NOW BUTTONS =================*/

const watchLinks = {

    "One Piece":"https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",

    "Naruto":"https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",

    "Jujutsu Kaisen":"https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",

    "Attack on Titan":"https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan"

};

document.querySelectorAll(".watch-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        const title = button.closest(".anime-info").querySelector("h3").innerText;

        window.open(watchLinks[title],"_blank");

    });

});

/*================ PLAY BUTTONS =================*/

const trailerLinks = {

    "One Piece":"https://www.youtube.com/results?search_query=One+Piece+Official+Trailer",

    "Naruto":"https://www.youtube.com/results?search_query=Naruto+Official+Trailer",

    "Jujutsu Kaisen":"https://www.youtube.com/results?search_query=Jujutsu+Kaisen+Official+Trailer",

    "Attack on Titan":"https://www.youtube.com/results?search_query=Attack+on+Titan+Official+Trailer"

};

document.querySelectorAll(".play-btn").forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.stopPropagation();

        const title = button.closest(".anime-card").querySelector("h3").innerText;

        window.open(trailerLinks[title],"_blank");

    });

});



/*================ GAME CARDS =================*/

const gameLinks = {

    "Ghost of Tsushima":
    "https://www.playstation.com/games/ghost-of-tsushima/",

    "Black Myth: Wukong":
    "https://www.heishenhua.com/",

    "Cyberpunk 2077":
    "https://www.cyberpunk.net/",

    "Elden Ring":
    "https://en.bandainamcoent.eu/elden-ring/elden-ring"

};

document.querySelectorAll(".game-card").forEach(card=>{

    card.addEventListener("click",()=>{

        const title=card.querySelector("h3").innerText;

        window.open(gameLinks[title],"_blank");

    });

});

/*================ HERO BUTTONS =================*/

const heroButtons = document.querySelectorAll(".hero-buttons button");

heroButtons[0].addEventListener("click",()=>{

    document.querySelector("#anime").scrollIntoView({

        behavior:"smooth"

    });

});

heroButtons[1].addEventListener("click",()=>{

    document.querySelector("#games").scrollIntoView({

        behavior:"smooth"

    });

});

/*================ NEWSLETTER =================*/

const newsletterBtn=document.querySelector(".newsletter-box button");

newsletterBtn.addEventListener("click",()=>{

    showToast("✅ Thanks for subscribing!");

});





/*-----------------------------------------------------*/

document.getElementById("exploreAnime")
.addEventListener("click",()=>{

    document.querySelector("#anime").scrollIntoView({

        behavior:"smooth"

    });

});

document.getElementById("exploreGames")
.addEventListener("click",()=>{

    document.querySelector("#games").scrollIntoView({

        behavior:"smooth"

    });

});
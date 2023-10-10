TweenMax.staggerFrom("nav ul li",1, {
    opacity:0,
    x:-20,
    ease: Power3.easeInOut
}, 0.08)
TweenMax.from(".first-name",1, {
    opacity:0,
    delay: .8,
    x:-60,
    ease: Expo.easeInOut
})
TweenMax.from(".last-name",1, {
    opacity:0,
    delay: 1.5,
    x:-40,
    ease: Expo.easeInOut
})
TweenMax.from(".job-name",1, {
    opacity:0,
    delay: 2,
    x:40,
    ease: Expo.easeInOut
})
TweenMax.from(".job-name a",1, {
    opacity:0,
    delay: 2.5,
    x:40,
    ease: Expo.easeInOut
})
document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from JSON file
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Get the container where cards will be appended
            const cardContainer = document.querySelector('.new-container');

            // Loop through each data object and create HTML for cards
            data.forEach(item => {
                const cardHTML = `
                    <div class="card">
                        <img src="${item.imgSrc}" class="card-img" alt="${item.title}">
                        <div class="card-body">
                            <h1 class="card-title">${item.title}</h1>
                            <p class="card-sub-title">${item.subTitle}</p>
                            <p class="card-info">${item.info}</p>
                            <small>voir plus</small>
                        </div>
                    </div>
                `;

                // Append card HTML to the container
                cardContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => {
            console.error("There was an error fetching the data:", error);
        });
});


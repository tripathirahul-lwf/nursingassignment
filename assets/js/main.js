(function () {
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area"); var sticky = header_navbar.offsetTop; if (window.pageYOffset > sticky) { header_navbar.classList.add("sticky"); } else { header_navbar.classList.remove("sticky"); }
        var backToTo = document.querySelector(".scroll-top"); if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { backToTo.style.display = "flex"; } else { backToTo.style.display = "none"; }
    }; function onScroll(event) { var sections = document.querySelectorAll('.page-scroll'); var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; for (var i = 0; i < sections.length; i++) { var currLink = sections[i]; var val = currLink.getAttribute('href'); var refElement = document.querySelector(val); var scrollTopMinus = scrollPos + 73; if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) { document.querySelector('.page-scroll').classList.remove('active'); currLink.classList.add('active'); } else { currLink.classList.remove('active'); } } }; window.document.addEventListener('scroll', onScroll); var pageLink = document.querySelectorAll('.page-scroll'); pageLink.forEach(elem => { elem.addEventListener('click', e => { e.preventDefault(); document.querySelector(elem.getAttribute('href')).scrollIntoView({ behavior: 'smooth', offsetTop: 1 - 60, }); }); }); "use strict";

})();

const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
        } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
        }
    };
});


// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// accordionItemHeaders.forEach(accordionItemHeader => {
//     accordionItemHeader.addEventListener("click", event => {
//         accordionItemHeader.classList.toggle("active");
//         const accordionItemBody = accordionItemHeader.nextElementSibling;
//         if (accordionItemHeader.classList.contains("active")) {
//             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//         }
//         else {
//             accordionItemBody.style.maxHeight = 0;
//         }
//     });
// });
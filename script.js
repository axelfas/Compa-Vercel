const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('navbar-menu-open');
    });

    const navbarLinks = document.querySelectorAll('.navbar-item a');

    navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
    navbarMenu.classList.remove('navbar-menu-open');
        });
    });

    document.getElementById("showMoreButton").addEventListener("click", function() {
        var moreImages = document.getElementById("moreImages");
        moreImages.classList.toggle("hidden");
        if (moreImages.classList.contains("hidden")) {
          document.getElementById("showMoreButton").innerText = "Show more";
        } else {
          document.getElementById("showMoreButton").innerText = "Show less";
        }
      });

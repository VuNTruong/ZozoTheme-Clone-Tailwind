// This is to keep track of current page in promo pages
var currentPagePromoPages = 1;

// This is to keep track of current page in latest project pages
var currentPageLatestProjectPages = 1;

// This is to keep track of current page in feedback pages
var currentPageFeedbackPages = 1;

// This is to keep track of current width of the promo page
var promoPageCurrentWidth = 0;

// This is to keep track of current width of a single latest project card
var latestProjectCardCurrentWidth = 0;

// This is to keep track of current width of the feedback card
var feedbackCardCurrentWidth = 0;

// This is to keep track of number of pages in latest project pages
var numberOfPagesLatestProjectPages = 0;

// This is to keep track of number of cards per page in latest project pages
var numberOfCardsPerPageLatestProjectPages = 0;

// This is to keep track of number of pages in feedback pages
var numberOfPagesFeedbackPages = 0;

// This is to keep track of number of cards per page in feedback pages
var numberOfCardsPerPageFeedbackPages = 0;

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Promo pages *********************/
// The function to navigate user in promo pages
function gotoPagePromoPage(pageNumber) {
  // Update current page
  currentPagePromoPages = pageNumber;

  // Update cursor
  r.style.setProperty(
    "--promo-page-cursor",
    `${promoPageCurrentWidth * (2 - currentPagePromoPages) * 2}px`
  );
}

// The function to bring user to previous page in promo pages
function goBackPagePromoPages() {
  if (currentPagePromoPages == 1) {
    currentPagePromoPages = 3;
  } else {
    // Update current page
    currentPagePromoPages = currentPagePromoPages - 1;
  }

  // Update cursor
  r.style.setProperty(
    "--promo-page-cursor",
    `${promoPageCurrentWidth * (2 - currentPagePromoPages) * 2}px`
  );
}

// The function to bring user to next page in promo pages
function goForwardPagePromoPages() {
  if (currentPagePromoPages == 3) {
    currentPagePromoPages = 1;
  } else {
    // Update current page
    currentPagePromoPages = currentPagePromoPages + 1;
  }

  // Update cursor
  r.style.setProperty(
    "--promo-page-cursor",
    `${promoPageCurrentWidth * (2 - currentPagePromoPages) * 2}px`
  );
}

// The function to handle event of when user brings mouse inside the promo area
function mouseOverPromoAreaHandler() {
  // Show the promo icon
  r.style.setProperty("--promo-icon-display", "block");

  // The promo page go left button
  var promoPageGoLeftButton = document.getElementById(
    "promo-pages-go-left-button"
  );

  // The promo page go right button
  var promoPageGoRightButton = document.getElementById(
    "promo-pages-go-right-button"
  );

  promoPageGoLeftButton.classList.add("animate-fade-in");
  promoPageGoLeftButton.addEventListener("animationend", (event) => {
    if (event.animationName == "fade-in") {
      promoPageGoLeftButton.classList.remove("animate-fade-in");
    }
  });

  promoPageGoRightButton.classList.add("animate-fade-in");
  promoPageGoRightButton.addEventListener("animationend", (event) => {
    if (event.animationName == "fade-in") {
      promoPageGoRightButton.classList.remove("animate-fade-in");
    }
  });
}

// The function to handle event of when user brings mouse out of the promo area
function mouseOutPromoAreaHandler() {
  // The promo page go left button
  var promoPageGoLeftButton = document.getElementById(
    "promo-pages-go-left-button"
  );

  // The promo page go right button
  var promoPageGoRightButton = document.getElementById(
    "promo-pages-go-right-button"
  );

  promoPageGoLeftButton.classList.add("animate-fade-out");
  promoPageGoLeftButton.addEventListener("animationend", (event) => {
    if (event.animationName == "fade-out") {
      promoPageGoLeftButton.classList.remove("animate-fade-out");

      // Show the promo icon
      r.style.setProperty("--promo-icon-display", "none");
    }
  });

  promoPageGoRightButton.classList.add("animate-fade-out");
  promoPageGoRightButton.addEventListener("animationend", (event) => {
    if (event.animationName == "fade-out") {
      promoPageGoRightButton.classList.remove("animate-fade-out");
    }
  });
}
//******************** Promo pages *********************/

//******************** Latest project pages *********************/
// The function to go to previous page in latest project pages
function goBackLatestProjectPages() {
  // Check and see if user is at the first page or not
  if (currentPageLatestProjectPages == 1) {
    // Take user to the last page
    takeUserToSpecifiedLatestProjectPage(numberOfPagesLatestProjectPages);
  } else {
    // Decrement current latest project page and call the function to take user to that page
    takeUserToSpecifiedLatestProjectPage(currentPageLatestProjectPages - 1);
  }
}

// The function to go to next page in latest project pages
function goForwardPageLatestProjectPages() {
  // Check and see if user is at the last page or not
  if (currentPageLatestProjectPages == numberOfPagesLatestProjectPages) {
    // Take user to the first page
    takeUserToSpecifiedLatestProjectPage(1);
  } else {
    // Increment current latest project page and call the function to take user to that page
    takeUserToSpecifiedLatestProjectPage(currentPageLatestProjectPages + 1);
  }
}

// The function to bring user to a specified latest project page
function takeUserToSpecifiedLatestProjectPage(pageNumber) {
  // Update current page
  currentPageLatestProjectPages = pageNumber;

  // Update cursor
  r.style.setProperty(
    "--latest-project-page-cursor",
    `-${(latestProjectCardCurrentWidth + 10) * (pageNumber - 1)}px`
  );
}
//******************** Latest project pages *********************/

//******************** Feedback pages *********************/
// The function to go to previous page in feedback pages
function goBackFeedbackPages() {
  // Check and see if user is at the first page or not
  if (currentPageFeedbackPages == 1) {
    // Take user to the last page
    takeUserToSpecifiedFeedbackPage(numberOfPagesFeedbackPages);
  } else {
    // Decrement current page number and call the function to take user to that page
    takeUserToSpecifiedFeedbackPage(currentPageFeedbackPages - 1);
  }
}

// The function to go to next page in feedback pages
function goForwardFeedbackPages() {
  // Check and see if user is at the last page or not
  if (currentPageFeedbackPages == numberOfPagesFeedbackPages) {
    // Take user to the first page
    takeUserToSpecifiedFeedbackPage(1);
  } else {
    // Increment current page number and call the function to take user to that page
    takeUserToSpecifiedFeedbackPage(currentPageFeedbackPages + 1);
  }
}

// The function to take user to a specified feedback page
function takeUserToSpecifiedFeedbackPage(pageNumber) {
  // Update current page
  currentPageFeedbackPages = pageNumber;

  // Update cursor
  r.style.setProperty(
    "--feedback-page-cursor",
    `-${(feedbackCardCurrentWidth + 20) * (pageNumber - 1)}px`
  );
}
//******************** End Feedback pages *********************/

//******************** Hamburger menu *********************/
// The function to open hamburger menu
function openHamburgerMenu() {
  // Get the hamburger menu element, menu area element, page content element
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var hamburgerMenuArea = document.getElementById("hamburger-menu-area");
  var pageContent = document.getElementById("page-content");

  // Show the menu and menu area
  hamburgerMenu.classList.toggle("show");
  hamburgerMenuArea.classList.toggle("show");

  // Animate the menu in
  hamburgerMenu.classList.add("animate-slide-in-right-to-left-hamburger-menu");
  pageContent.classList.add("animate-slide-out-right-to-left-page-content");

  // Remove the animation when they end
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-in-right-to-left-hamburger-menu") {
      hamburgerMenu.classList.remove(
        "animate-slide-in-right-to-left-hamburger-menu"
      );
    }
  });
  pageContent.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-out-right-to-left-page-content") {
      pageContent.classList.remove(
        "animate-slide-out-right-to-left-page-content"
      );

      // Bring page content out to the left
      r.style.setProperty("--page-content-margin-left", "-370px");
      r.style.setProperty("--page-content-margin-right", "370px");
    }
  });
}

// The function to close hamburger menu
function closeHamburgerMenu() {
  // Get the hamburger menu element, menu area element, page content element
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var hamburgerMenuArea = document.getElementById("hamburger-menu-area");
  var pageContent = document.getElementById("page-content");

  // Animate the menu out
  hamburgerMenu.classList.add("animate-slide-out-left-to-right-hamburger-menu");
  pageContent.classList.add("animate-slide-in-left-to-right-page-content");

  // Remove the animation when they end
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-out-left-to-right-hamburger-menu") {
      hamburgerMenu.classList.remove(
        "animate-slide-out-left-to-right-hamburger-menu"
      );

      // Hide the menu and menu area
      hamburgerMenu.classList.remove("show");
      hamburgerMenuArea.classList.remove("show");
    }
  });

  pageContent.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-in-left-to-right-page-content") {
      pageContent.classList.remove(
        "animate-slide-in-left-to-right-page-content"
      );

      // Bring the page content in to the right
      r.style.setProperty("--page-content-margin-left", "0px");
      r.style.setProperty("--page-content-margin-right", "0px");
    }
  });
}
//******************** End Hamburger menu *********************/

//******************** Left Hamburger menu *********************/
// The function to open left hamburger menu
function openLeftHamburgerMenu() {
  // Get the left hamburger menu element
  var leftHamburgerMenu = document.getElementById("left-hamburger-menu");

  // Show the menu
  leftHamburgerMenu.classList.toggle("show");

  // Animate the menu in
  leftHamburgerMenu.classList.add(
    "animate-slide-in-left-to-right-left-hamburger-menu"
  );

  // Remove the animation once they are done
  leftHamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-in-left-to-right-left-hamburger-menu") {
      leftHamburgerMenu.classList.remove("animate-slide-in-left-to-right-left-hamburger-menu");
    }
  })
}

// The function to close left hamburger menu
function closeLeftHamburgerMenu() {
  // Get the left hamburger menu element
  var leftHamburgerMenu = document.getElementById("left-hamburger-menu");

  // Hide the menu
  leftHamburgerMenu.classList.remove("show");

  // Animate the menu away
  leftHamburgerMenu.classList.add(
    "animate-slide-out-right-to-left-left-hamburger-menu"
  );

  // Remove the animation once they are done
  leftHamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-out-right-to-left-left-hamburger-menu") {
      leftHamburgerMenu.classList.remove("animate-slide-out-right-to-left-left-hamburger-menu")
    }
  })
}
//******************** End Left Hamburger menu *********************/

// The function to handle event of when body is scrolled
function scrollHandler() {
  // Reference the sticky header menu bar
  var stickyHeaderMenuBar = document.getElementById("sticky-header");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // Animate the menu down
    stickyHeaderMenuBar.classList.add("animate-down");

    // Show sticky header menu bar
    r.style.setProperty("--sticky-header-display", "block");
  } else {
    // Hide sticky header menu bar
    r.style.setProperty("--sticky-header-display", "none");
  }
}

// The function to adjust page size when screen resizes
function adjustPageSize() {
  // Get the promo page scroll area element
  var promoPageElement = document.getElementById("promo-main-content");

  // Get the latest project card element
  var latestProjectCard = document.getElementsByClassName(
    "latest-project-cards__card"
  )[0];

  // Get the feedback card element
  var feedbackCard = document.getElementsByClassName("feedback-cards__card")[0];

  // Update current width of the promo page
  promoPageCurrentWidth = promoPageElement.clientWidth;

  // Update current width of the latest project card
  latestProjectCardCurrentWidth = latestProjectCard.clientWidth;

  // Update current width of the feedback card
  feedbackCardCurrentWidth = feedbackCard.clientWidth;

  // Update page width for promo pages container
  r.style.setProperty("--promo-page-width", `${promoPageCurrentWidth}px`);

  // Keep user on the same promo page that user has been on previously
  gotoPagePromoPage(currentPagePromoPages);

  // Bring user back to first page of latest project and feedback pages
  takeUserToSpecifiedLatestProjectPage(1);
  takeUserToSpecifiedFeedbackPage(1);

  // Update number of latest project cards per page
  numberOfCardsPerPageLatestProjectPages = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-latest-project-cards-per-page");

  // Update number of latest projects pages
  numberOfPagesLatestProjectPages =
    5 - numberOfCardsPerPageLatestProjectPages + 1;

  // Update number of feedback cards per page
  numberOfCardsPerPageFeedbackPages = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-feedback-cards-per-page");

  // Update number of feedback pages
  numberOfPagesFeedbackPages = 5 - numberOfCardsPerPageFeedbackPages + 1;
}

// Add a listener for when the window resizes
window.addEventListener("resize", adjustPageSize);

// Inital config
window.onload = () => {
  // Call the function to adjust page size when screen resizes
  adjustPageSize();

  // When windows is loaded, let user stay on page 1 of promo page
  gotoPagePromoPage(1);
};

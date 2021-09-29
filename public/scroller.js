// Simple script to tweak side scrolling cards.
// www.thedigitalhive.com
// Note: to fix the smoothness of the scroll, I used CSS
//    .scrollbox {
//          scroll-behavior: smooth;
//    }

// Check if page is loaded
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    // Save our targeted scrolling elements
    const scrollbox = document.querySelector('.scrollbox');
    // Save the size of each card, so we know how much to shift over by
    var card_size = scrollbox.querySelector('div').clientWidth;

    // Fix glitch when window resizes, so does card width, so
    // need to update width.
    function WindowResized() {
      card_size = scrollbox.querySelector('div').clientWidth;
    }

    // When Window size changes, call update function.
    window.onresize = WindowResized;

    function scrollToNextCard() {
      scrollbox.scrollBy(card_size, 0);
    }

    function scrollToPrevCard() {
      scrollbox.scrollBy(-card_size, 0);
    }

    // Set listeners for click, and call Scroll Functions
    document.querySelector('.btn.next').addEventListener('click', scrollToNextCard);
    document.querySelector('.btn.prev').addEventListener('click', scrollToPrevCard);

    // Set listener for mouse wheel, stop default scroll up/down
    // then call side to side card scroll functions.
    scrollbox.addEventListener("wheel", function (e) {

        e.preventDefault();

        if (e.deltaY > 0) 
            scrollToNextCard();
        else 
            scrollToPrevCard();
    });
  }
};
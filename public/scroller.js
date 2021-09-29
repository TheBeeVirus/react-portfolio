document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    const scrollbox = document.querySelector('.scrollbox');
    var card_size = scrollbox.querySelector('div').clientWidth;

    function WindowResized() {
      card_size = scrollbox.querySelector('div').clientWidth;
    }

    window.onresize = WindowResized;

    function scrollToNextCard() {
      scrollbox.scrollBy(card_size, 0);
    }

    function scrollToPrevCard() {
      scrollbox.scrollBy(-card_size, 0);
    }

    document.querySelector('.btn.next').addEventListener('click', scrollToNextCard);
    document.querySelector('.btn.prev').addEventListener('click', scrollToPrevCard);

    scrollbox.addEventListener("wheel", function (e) {

        e.preventDefault();

        if (e.deltaY > 0) 
            scrollToNextCard();
        else 
            scrollToPrevCard();
    });
  }
};
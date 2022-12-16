const animatedItems = document.querySelectorAll('.animated-item');

if (animatedItems.length > 0) {
  window.addEventListener('scroll', animation);
  function animation(params) {
    animatedItems.forEach((item) => {
      const itemHeight = item.offsetHeight;
      const itemOffset = offset(item).top;
      const animationStart = 4;

      let animationItemPoint = window.innerHeight - itemHeight / animationStart;
        if (itemHeight > window.innerHeight) {
          animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
        }

        if ((scrollY >  itemOffset - animationItemPoint ) && (scrollY <  itemOffset + itemHeight)) {
            item.classList.add('visible');
        } else {
            if (!item.classList.contains('_not-hide')) {
              item.classList.remove('visible');
            }                
        }
    })
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => animation(), 300);
}
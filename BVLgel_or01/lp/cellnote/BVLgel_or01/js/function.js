// アコーディオン
//---------------------------------------------
document.querySelectorAll(".js_accordion").forEach((accordion) => {
  accordion.addEventListener("click", function (event) {
    let targetElement = event.target;

    // もしクリックされた要素が<img>か<span>であれば、その親要素をターゲットとして取得
    const tagName = targetElement.tagName.toLowerCase();
    if (tagName === "img" || tagName === "span") {
      targetElement = targetElement.parentElement;
    }

    if (targetElement.classList.contains("js_accordionBtn")) {
      const btn = targetElement;
      const content = btn.nextElementSibling;

      btn.classList.toggle("is_active");
      content.classList.toggle("is_visible");
    }
  });
});


window.addEventListener('load',function() {

  // 画面に入った要素をアニメーションさせる
  // ---------------------------------------------
  const animationObserve = function doObserve(element, rootMargin, once = true, callback) {
    const targets = document.querySelectorAll(element);
    const options = {
      root: null,
      rootMargin: rootMargin,
    };

    const observer = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add('is_active');
          if (once) {
            observer.unobserve(item.target);
          }
          if (callback && typeof callback === 'function') {
            callback();
          }
        } else {
          item.target.classList.remove('is_active');
        }
      });
    }, options);

    targets.forEach(function (target) {
      observer.observe(target);
    });
  };

  // 1回のみアニメーション
  animationObserve('.io', '-30% 0px', true);

});

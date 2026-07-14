document.addEventListener("DOMContentLoaded", () => {
  // スクロール時に要素を上品にふわっと表示させる（Intersection Observer）
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null, // 画面全体を監視対象にする
    rootMargin: "0px",
    threshold: 0.1, // 要素が10%見えたら実行
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // 一度表示されたら監視を解除して軽量化
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => {
    observer.observe(el);
  });
});

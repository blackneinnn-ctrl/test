// 画面に要素が入ったらクラスを付与する設定
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // 画面に入った（交差した）時
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // クラスを追加して表示させる
    }
  });
});

// .fade-in-up というクラスがついている要素をすべて監視する
document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});
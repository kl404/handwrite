// 获取所有图片
const images = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 当图片进入视口
    if (entry.isIntersecting) {
      const img = entry.target;
      // 将 data-src 的值赋给 src
      img.src = img.dataset.src;
      // 加载完成后取消观察
      observer.unobserve(img);
    }
  });
});

// 观察所有图片
images.forEach((img) => observer.observe(img));

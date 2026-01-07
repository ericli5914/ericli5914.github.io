const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft  = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.portforile-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');
  const imgItems = document.querySelectorAll('.portforile-carousel .img-item');

  // 以“更小的那个数量”为准，避免图/文字数量不一致越界
  const total = Math.min(imgItems.length, portfolioDetails.length);

  // 防御：万一 index 越界，夹回合法范围
  index = Math.max(0, Math.min(index, total - 1));

  // 移动图片
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  // 切换文字卡片
  portfolioDetails.forEach(d => d.classList.remove('active'));
  if (portfolioDetails[index]) portfolioDetails[index].classList.add('active');

  // 按钮禁用状态
  if (index === 0) arrowLeft.classList.add('disabled');
  else arrowLeft.classList.remove('disabled');

  if (index === total - 1) arrowRight.classList.add('disabled');
  else arrowRight.classList.remove('disabled');
};

// 右键
arrowRight.addEventListener('click', () => {
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');
  const imgItems = document.querySelectorAll('.portforile-carousel .img-item');
  const total = Math.min(imgItems.length, portfolioDetails.length);

  if (index < total - 1) index++;
  activePortfolio();
});

// 左键
arrowLeft.addEventListener('click', () => {
  if (index > 0) index--;
  activePortfolio();
});

// 页面加载时初始化一次（保证初始状态正确）
activePortfolio();

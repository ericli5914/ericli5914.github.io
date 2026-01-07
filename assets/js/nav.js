document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // 1) remove .active from all sections
      sections.forEach(sec => sec.classList.remove('active'));

      // 2) read the hash, e.g. "#resume" → "resume"
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
        // 3) update URL (optional)
        history.replaceState(null, '', `#${targetId}`);
      }
    });
  });
});

// const navLinks = document.querySelectorAll('nav .links:first-child a');
// const logoLink

// const activePage= () =>{
//   navLinks.forEach(link =>{
//     navLinks.classList.remove('active');
//   })
// }
// navLinks.forEach((link, idx) => {
//   link.addEventListener('click', () =>{
//     if (!link.classList.contains('active')){
//       activePage();

//       link.classList.add('active');
//     }
//   })
// })

document.addEventListener('DOMContentLoaded', () => {

  /* ================ 变量 ================ */
  const navLinks = document.querySelectorAll('.links a');
  /* 只选有 id 的 section，用于滚动检测。如果 home 没 id 就手动加上 id="home" */
  const sections  = [...document.querySelectorAll('section[id]')];

  /* ================ 点击导航 ================ */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  /* ================ 滚动高亮 ================ */
  const activateByScroll = () => {
    const scrollPos = window.scrollY + 120;     // 120 px 偏移，避开导航栏高度
    sections.forEach(sec => {
      const top    = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        const target = document.querySelector('.links a[href="#'+ sec.id +'"]');
        if (target && !target.classList.contains('active')) {
          navLinks.forEach(l => l.classList.remove('active'));
          target.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', activateByScroll);
  activateByScroll();   // 页面刚加载时也跑一次
});
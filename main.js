'use strict';

//Nav
const basicToggle = (icon) => {
  icon.classList.toggle('fa-chevron-down');
  icon.classList.toggle('fa-chevron-up');
};
const guidesEl = document.getElementById('guides');
guidesEl.addEventListener('click', (e) => {
  const icon = document.querySelector('.left #guides .fa');
  const inGuidesEl = document.getElementById('in-guides');
  inGuidesEl.classList.toggle('hidden');
  guidesEl.classList.toggle('active-nav');
  basicToggle(icon);
  e.stopPropagation();
});

const langEl = document.getElementById('lang');
langEl.addEventListener('click', (e) => {
  const icon = document.querySelector('.right #lang .chev');
  const inLangusagesEl = document.querySelector('#lang .my-languagies');
  inLangusagesEl.classList.toggle('hidden');
  basicToggle(icon);
  e.stopPropagation();
});

//Main Collegies

//Hide any previously clicked ..
const bodyEl = document.querySelector('body');
bodyEl.addEventListener('click', () => {
  const inGuidesEl = document.getElementById('in-guides');
  const iconGuides = document.querySelector('.left #guides .fa');

  const inLangusagesEl = document.querySelector('#lang .my-languagies');
  const iconLang = document.querySelector('.right #lang .chev');

  //guides
  inGuidesEl.classList.add('hidden');
  iconGuides.classList.remove('fa-chevron-up');
  iconGuides.classList.add('fa-chevron-down');
  guidesEl.classList.remove('active-nav');

  //Languages
  inLangusagesEl.classList.add('hidden');
  iconLang.classList.remove('fa-chevron-up');
  iconLang.classList.add('fa-chevron-down');
});

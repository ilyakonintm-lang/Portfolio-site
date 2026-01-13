const motionBtn = document.getElementById('motionBtn');
const verticalBtn = document.getElementById('verticalBtn');
const horizontalBtn = document.getElementById('horizontalBtn');

const motionGrid = document.querySelector('.folio-grid.motion');
const verticalGrid = document.querySelector('.folio-grid.vertical');
const horizontalGrid = document.querySelector('.folio-grid.horizontal');

const buttons = [motionBtn, verticalBtn, horizontalBtn];
const grids = [motionGrid, verticalGrid, horizontalGrid];

if (buttons.includes(null) || grids.includes(null)) {
  console.error('Не найдены элементы. Проверь id/class в HTML:', {
    motionBtn, verticalBtn, horizontalBtn,
    motionGrid, verticalGrid, horizontalGrid
  });
} else {

  function activateSection(activeBtn, activeGrid) {
    buttons.forEach(btn => btn.classList.remove('active'));
    grids.forEach(grid => grid.classList.remove('active'));

    activeBtn.classList.add('active');
    activeGrid.classList.add('active');
  }

  motionBtn.addEventListener('click', () => {
    activateSection(motionBtn, motionGrid);
  });

  verticalBtn.addEventListener('click', () => {
    activateSection(verticalBtn, verticalGrid);
  });

  horizontalBtn.addEventListener('click', () => {
    activateSection(horizontalBtn, horizontalGrid);
  });
}

/* play / pause по клику */
const videos = document.querySelectorAll('.folio-grid video');

videos.forEach(video => {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

const verticalBtn = document.getElementById('verticalBtn');
const horizontalBtn = document.getElementById('horizontalBtn');
const verticalGrid = document.querySelector('.folio-grid.vertical');
const horizontalGrid = document.querySelector('.folio-grid.horizontal');

if (!verticalBtn || !horizontalBtn || !verticalGrid || !horizontalGrid) {
  console.error('Не найдены элементы. Проверь id/class в HTML:', {
    verticalBtn, horizontalBtn, verticalGrid, horizontalGrid
  });
} else {
  verticalBtn.addEventListener('click', () => {
    verticalGrid.classList.add('active');
    horizontalGrid.classList.remove('active');
    verticalBtn.classList.add('active');
    horizontalBtn.classList.remove('active');
  });

  horizontalBtn.addEventListener('click', () => {
    horizontalGrid.classList.add('active');
    verticalGrid.classList.remove('active');
    horizontalBtn.classList.add('active');
    verticalBtn.classList.remove('active');
  });
}

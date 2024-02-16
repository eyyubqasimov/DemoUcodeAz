
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
      const color = button.dataset.color;
      const currentBackgroundColor = button.style.backgroundColor;
      const currentTextColor = button.style.color;
      
      if (currentBackgroundColor === color) {
          button.style.backgroundColor = 'white';
          button.style.color = 'black'; 
      } else {
          button.style.backgroundColor = color;
          if (isLightColor(color)) {
              button.style.color = 'black';
          } else {
              button.style.color = 'white';
          }
      }
  });
});

function isLightColor(color) {
  return parseInt(color.replace('#', ''), 16) > 0xffffff / 2;
}







  
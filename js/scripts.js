const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
let verticalFrequency = 0.0001;
turbulence.setAttribute('baseFrequency', verticalFrequency + ' 0.00001');
const steps = 30;
const interval = 10;

buttons.forEach( function(button) {
  button.addEventListener('mouseover', function() {
    verticalFrequency = 0.0001;
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        verticalFrequency += 0.0015;
        turbulence.setAttribute('baseFrequency', verticalFrequency + ' 0.00001');
      }, i * interval);
    }
    setTimeout(() => {
      let verticalFrequency = 0.0001;
      turbulence.setAttribute('baseFrequency', verticalFrequency + ' 0.00001');
    }, steps * interval);
  });
});
import Notiflix from 'notiflix';


function createPromise(position,delay) {
  return new Promise((resolve, reject) => {
 
    const shouldResolve = Math.random() > 0.3;
  setTimeout (() => {
  if (shouldResolve) {
    // Fulfill
    resolve({position, delay});
  } else {
    // Reject
    reject({position,delay});
  }
}, delay);
});
};



document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const firstDelay = parseInt(event.target.elements.delay.value);
  const step = parseInt(event.target.elements.step.value);
  const amount = parseInt(event.target.elements.amount.value);

  for (let i = 0; i < amount; i++) {
      const position = i + 1;
      const delay = firstDelay + i * step;

      createPromise(position, delay)
          .then(({position, delay}) => {
              return Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({position, delay}) => {
              return Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          })
  }
}); 

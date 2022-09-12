import Notiflix from 'notiflix';

const formEl = document.querySelector('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;

  for (let i = 0; i < amount.value; i += 1) {
    let position = i + 1;
    let delayStep = Number(delay.value) + Number(step.value) * i;

    setTimeout(createPromise(position, delayStep), delayStep);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

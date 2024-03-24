export const DELAY = (func) => {
  const arrayOfMs = [500, 1000, 1500, 2000, 2500, 3000];
  const randomNumber = Math.floor(Math.random() * arrayOfMs.length);
  const delay: number = arrayOfMs[randomNumber];

  const timer = setTimeout(() => func, delay);
  return () => clearTimeout(timer);
};

import { SetStateAction } from "react";

export const DELAY = (setState: {
  (value: SetStateAction<boolean>): void;
  (arg0: boolean): any;
}) => {
  const arrayOfMs = [500, 1000, 1500, 2000, 2500, 3000];
  const randomIndex = Math.floor(Math.random() * arrayOfMs.length);
  const delay: number = arrayOfMs[randomIndex];

  const timer = setTimeout(() => setState(false), delay);
  return () => clearTimeout(timer);
};

import React, { useReducer, useEffect } from 'react';

const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

type Carousel = {
  next: () => void
  back: () => void
  style: React.CSSProperties
}

export function useCarousel(
  length: number,
): Carousel {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style: React.CSSProperties = {
    transform: 'translateX(0)',
    width: `${100 * length}%`,
    left: `-${state.active * 100}%`,
  };

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir = (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (100 * (pref || dir)) / length;
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  return {
    next: () => dispatch({ type: 'next', length }),
    back: () => dispatch({type: 'prev', length}),
    style,
  };
}

export function makeIndices(start: number, delta: number, num: number) {
  const indices: Array<number> = [];

  while (indices.length < num) {
    indices.push(start);
    start += delta;
  }

  return indices;
}

type CarouselState = {
  offset: number;
  desired: number;
  active: number;
}

const initialCarouselState: CarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};

interface CarouselNextAction {
  type: 'next';
  length: number;
}

interface CarouselPrevAction {
  type: 'prev';
  length: number;
}

interface CarouselJumpAction {
  type: 'jump';
  desired: number;
}

interface CarouselDoneAction {
  type: 'done';
}

type CarouselAction =
  | CarouselJumpAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDoneAction;

function carouselReducer(state: CarouselState, action: CarouselAction): CarouselState {
  function previous(current: number) {
    return Math.max(current - 1, 0);
  }
  
  function next(current: number, length: number) {
    return Math.min(current + 1, length - 1);
  }
  
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
      };
    case 'next':
      return {
        ...state,
        desired: next(state.active, action.length),
      };
    case 'prev':
      return {
        ...state,
        desired: previous(state.active),
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    default:
      return state;
  }
}
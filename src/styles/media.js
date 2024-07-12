import { css } from "styled-components";

// breakpoints
const sizes = {
    desktop: 1024,
    tablet: 768,
    phone: 576,
}

// Create a responsive mixin
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc;
}, {});
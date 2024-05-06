'use strict';
export const roundNumApprox = (num: number) => {
  switch (true) {
    case num >= 1_000_000_000:
      return `${Math.floor(num / 1_000_000_000)}Bn`;
    case num >= 1_000_000:
      return `${Math.floor(num / 1_000_000)}M`;
    case num >= 1_000:
      return `${Math.floor(num / 1_000)}K`;
    default:
      return num;
  }
};

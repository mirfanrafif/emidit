import React, { ComponentPropsWithoutRef } from 'react';

const IconUnderline = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path d="M1.5 2H2V7C2 9.78125 4.21875 12 7 12C9.75 12 12 9.78125 12 7V2H12.5C13.0312 2 13.5 1.5625 13.5 1C13.5 0.46875 13.0312 0 12.5 0H9C8.4375 0 8 0.46875 8 1C8 1.5625 8.4375 2 9 2H9.5V7C9.5 8.40625 8.375 9.5 7 9.5C5.59375 9.5 4.5 8.40625 4.5 7V2H5C5.53125 2 6 1.5625 6 1C6 0.46875 5.53125 0 5 0H1.5C0.9375 0 0.5 0.46875 0.5 1C0.5 1.5625 0.9375 2 1.5 2ZM13 14H1C0.4375 14 0 14.4688 0 15C0 15.5625 0.4375 16 1 16H13C13.5312 16 14 15.5625 14 15C14 14.4688 13.5312 14 13 14Z" />
    </svg>
  );
};

export default IconUnderline;

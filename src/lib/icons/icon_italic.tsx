import React, { ComponentPropsWithoutRef } from 'react';

const IconItalic = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path d="M12 1.25C12 0.5625 11.4375 0 10.75 0H5.25C4.53125 0 4 0.5625 4 1.25C4 1.96875 4.53125 2.5 5.25 2.5H6.46875L2.78125 11.5H1.25C0.53125 11.5 0 12.0625 0 12.75C0 13.4688 0.53125 14 1.25 14H6.75C7.4375 14 8 13.4688 8 12.75C8 12.0625 7.4375 11.5 6.75 11.5H5.5L9.1875 2.5H10.75C11.4375 2.5 12 1.96875 12 1.25Z" />
    </svg>
  );
};

export default IconItalic;

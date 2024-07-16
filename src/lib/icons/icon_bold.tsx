import React, { ComponentPropsWithoutRef } from 'react';

const IconBold = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path d="M10.5 6.75C11.0938 6.03125 11.4688 5.125 11.4688 4.125C11.4688 1.875 9.625 0 7.34375 0H1.25C0.53125 0 0 0.5625 0 1.25C0 1.96875 0.53125 2.5 1.25 2.5H1.5V11.5H1.25C0.53125 11.5 0 12.0625 0 12.75C0 13.4688 0.53125 14 1.25 14H7.875C10.125 14 12 12.1562 12 9.875C12 8.625 11.4062 7.5 10.5 6.75ZM4 2.5H7.34375C8.21875 2.5 8.96875 3.25 8.96875 4.125C8.96875 5.03125 8.21875 5.75 7.34375 5.75H4V2.5ZM7.875 11.5H4V8.25H7.875C8.75 8.25 9.5 9 9.5 9.875C9.5 10.7812 8.75 11.5 7.875 11.5Z" />
    </svg>
  );
};

export default IconBold;

import {memo} from "react";

const TrashIcon: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.125 3.73779C11.0438 3.53154 8.95 3.42529 6.8625 3.42529C5.625 3.42529 4.3875 3.48779 3.15 3.61279L1.875 3.73779" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.3125 3.10625L5.45 2.2875C5.55 1.69375 5.625 1.25 6.68125 1.25H8.31875C9.375 1.25 9.45625 1.71875 9.55 2.29375L9.6875 3.10625" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7812 5.7124L11.375 12.0062C11.3062 12.9874 11.25 13.7499 9.50625 13.7499H5.49375C3.75 13.7499 3.69375 12.9874 3.625 12.0062L3.21875 5.7124" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.45654 10.3125H8.53779" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.9375 7.8125H9.0625" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default memo(TrashIcon);
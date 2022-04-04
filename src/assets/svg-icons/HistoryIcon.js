import React from 'react';

const HistoryIcon = ({ active }) => {
  return (
    <svg
      class="w-6 h-6"
      fill={active ? 'white' : 'none'}
      stroke="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"></path>
    </svg>
  );
};

export default HistoryIcon;

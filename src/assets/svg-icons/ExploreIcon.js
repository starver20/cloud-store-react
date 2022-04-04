import React from 'react';

const ExploreIcon = ({ active }) => {
  return (
    <svg
      class="w-6 h-6"
      fill={active ? 'white' : 'none'}
      stroke="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-width="1"
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default ExploreIcon;
const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="16"
      height="16"
      fill="currentColor"
    >
      {" "}
      <g>
        <circle
          cx="128"
          cy="104"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>{" "}
        <path
          d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </g>
    </svg>
  );
};

export default LocationIcon;

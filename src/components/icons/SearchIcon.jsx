const SearchIcon = ({color="currentColor", size=24, ...props}) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 20.9998C16.7467 20.9998 21 16.7465 21 11.4998C21 6.25311 16.7467 1.99982 11.5 1.99982C6.25327 1.99982 1.99998 6.25311 1.99998 11.4998C1.99998 16.7465 6.25327 20.9998 11.5 20.9998Z"
        stroke={color}
        strokeWidth="1.40625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 21.9998L20 19.9998"
        stroke={color}
        strokeWidth="1.40625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

export default SearchIcon;

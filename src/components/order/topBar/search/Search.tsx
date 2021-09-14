import React from "react";
import "./Search.scss";
const Search: React.FC = () => {
  return (
    <div className="search-bar">
      <span className="_search-icon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.4522 12.3943L17.7796 16.7216C18.0735 17.0118 18.0735 17.4894 17.7796 17.7796C17.4857 18.0735 17.0118 18.0735 16.718 17.7796L12.3906 13.4559C11.0829 14.5286 9.41143 15.1714 7.58571 15.1714C3.39429 15.1714 0 11.7735 0 7.58571C0 3.39796 3.39429 0 7.58571 0C11.7735 0 15.1714 3.39796 15.1714 7.58571C15.1714 9.41143 14.5249 11.0865 13.4522 12.3943ZM1.50612 7.58571C1.50612 10.9359 4.23184 13.6616 7.58571 13.6616C10.9359 13.6616 13.6653 10.9359 13.6653 7.58571C13.6653 4.23551 10.9359 1.50612 7.58571 1.50612C4.23184 1.50612 1.50612 4.23551 1.50612 7.58571Z"
            fill="#16284D"
          />
        </svg>
      </span>
      <input type="text" placeholder="Search order" />
    </div>
  );
};

export default Search;

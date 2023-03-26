import React from "react";

export default function Search() {
  return (
    <div className="search-engine">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search for a new city..."
        />
      </form>
    </div>
  );
}

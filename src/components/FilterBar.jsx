import { useState, useEffect } from "react";
import { SelectPicker, DatePicker } from "rsuite";
import TagsDatabase from "../data/tags";

const FilterBar = ({ onFilterBarUpdate }) => {
  const [selectedTag, setSelctedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchButtonToggle, setSearchButtonToggle] = useState(false);

  useEffect(() => {
    onFilterBarUpdate({
      searchQuery: searchQuery ? searchQuery : null,
      selectedDate,
      selectedTag,
    });
  }, [selectedDate, selectedTag, searchButtonToggle]);

  const tags = Object.values(TagsDatabase);

  const OnTagSelect = (value) => {
    const tag = value;
    if (tag == TagsDatabase.all.value) {
      OnTagCleared();
    } else {
      setSelctedTag(tag);
    }
  };

  const OnTagCleared = () => {
    setSelctedTag(null);
  };

  const onSearchButtonClick = () => {
    setSearchButtonToggle((value) => !value)
  };

  const onSearchQueryChanged = (e) => {
    const search_term = e.target?.value;
    setSearchQuery(search_term);
  };

  const onResetButtonClick = () => {
    setSelctedTag(null);
    setSearchQuery("");
    setSelectedDate(null);
    setSearchButtonToggle((value) => !value);
  };
  const OnDateSeleced = (selected_date) => {
    setSelectedDate(selected_date);
  };
  const OnDateCleared = () => {
    setSelectedDate(null);
  }

  const currentDate = new Date();
  const minDate = new Date(2025, 0, 1); // January 1, 2025

  return (
    <div id="filter-bar-contianer">
      <div id="filter-bar">
        <div className="search-container">
          <button
            id="search-button"
            className="bi bi-search"
            onClick={onSearchButtonClick}
          />
          <input
            type="text"
            id="search-input"
            autoComplete="off"
            placeholder="Search Posts..."
            value={searchQuery}
            onChange={onSearchQueryChanged}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                onSearchButtonClick();
              }
            }}
          />
          <button id="reset-filters-mobile" onClick={onResetButtonClick}>
            <i className="bi bi-backspace" />
          </button>
        </div>

        <div className="tag-date-reset-container">
          <DatePicker
            oneTap
            format="MMM yyyy"
            placeholder={"Date"}
            editable={false}
            style={{ minWidth: 120 }}
            shouldDisableDate={(date) => date < minDate || date > currentDate}
            onSelect={OnDateSeleced}
            onClean={OnDateCleared}
            value={selectedDate}
          />

          <SelectPicker
            data={tags}
            style={{ minWidth: 140 }}
            value={selectedTag}
            placeholder="Tags"
            searchable={false}
            onSelect={OnTagSelect}
            onClean={OnTagCleared}
          />

          <button
            id="reset-filters"
            className="reset-btn"
            onClick={onResetButtonClick}
          >
            <i className="bi bi-backspace" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { searchCall } from "../actions/app_actions";
import { debounce } from "../utils/utils";

function callSearchApi(event, searchCall) {
  const { value } = event.target;
  searchCall(value);
}

function SearchBar(props) {
  const { searchCall } = props;
  const debouncedSearch = debounce(searchCall, 300);

  return (
    <div className="search-bar">
      <input onChange={(event) => callSearchApi(event, debouncedSearch)} />
    </div>
  );
}

const mapDispatchToActions = (dispatch) => {
  return {
    searchCall: bindActionCreators(searchCall, dispatch),
  };
};

export default compose(connect(null, mapDispatchToActions))(SearchBar);

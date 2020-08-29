import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Card from "./card";

import "./results.scss";

function Results(props) {
  const { items } = props;
  if (!items.length) return "no results found";

  return (
    <>
      {items.map((item, index) => {
        return <Card data={item} key={index} />;
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default compose(connect(mapStateToProps, null))(Results);

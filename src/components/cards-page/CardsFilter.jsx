import React from "react";
import Select from "react-select";

const CardsFilter = (props) => {
  const styles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#F2F2F2",
      width: "135px",
      height: "23px",
      height: "23px",
      maxHeight: "23px",
    }),
  };

  return (
    <div className="filter-container">
      <p>{props.filter.name}</p>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={(filter) => {
          const newFilter = {
            name: props.filter.apiName,
            value: filter.label,
          };
          props.setFilters(newFilter);
          return newFilter;
        }}
        styles={styles}
        options={[
          { label: "All", value: "" },
          ...props.filter.options,
        ]}
      />
    </div>
  );
};

export default CardsFilter;

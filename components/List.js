import React from "react";

const List = (props) => {
  return (
    <ul className={`grid list-disc grid-cols-2 gap-3 font-Fira text-main-100`}>
      {props.children}
    </ul>
  );
};

export default List;

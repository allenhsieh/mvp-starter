import React from 'react';

const SelectAll = ({handleSelectAll}) => (
  <form>
    <br />
    <label>
      <input
        name="selectAll"
        type="checkbox"
        onChange={(event) => handleSelectAll(event)}
      />
      <b>SELECT ALL</b>
    </label>
  </form>
)

export default SelectAll;
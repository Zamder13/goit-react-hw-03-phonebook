import PropTypes from "prop-types";
import { FilterTable } from "./Filter.styled";
const Filter = ({ value, onChange }) => {
  return (
    <FilterTable>
      <label>
        Filter
        <input type="text" value={value} onChange={onChange} />
      </label>
    </FilterTable>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

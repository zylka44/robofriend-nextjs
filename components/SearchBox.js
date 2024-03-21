import "tachyons";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--purple bg-washed-red"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

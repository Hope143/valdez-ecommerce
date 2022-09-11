function searchProduct({ searchItem, setSearchItem }) {
  function onHandleChange(e) {
    setSearchItem(e.target.value);
  }

  return (
    <div>
      <input
        placeholder="search..."
        type="text"
        className="form-control rounded-0 border-dark fs-5"
        onChange={onHandleChange}
      />
    </div>
  );
}

export default searchProduct;

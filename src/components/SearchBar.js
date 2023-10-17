function SearchBar(props) {
    const {text, onTextChange, searchRequest} = props;
    return (
        <div className="search-bar">
            <input type="text" placeholder="search for restaurants" value={text} onChange={(e) => {onTextChange(e)}}></input>
            <button className="search-btn" onClick={() => {searchRequest()}}>search</button>
        </div>
    )
}

export default SearchBar;
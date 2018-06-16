import React from "react";

const SearchOptions =(props)=>{
    return(
        <div>
            <div className="container">
                <h2 className="searchHeader">Search</h2>
                <input type="text" className="searcOptions" onChange={props.onChangeHendeler}/>
            </div>
        </div>
    )
}
export default SearchOptions
import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        keyword:""
    }


    constructor(props){
        super(props)
    }

    keywordUpdate = (e) => {
        const { keywordUpdate } = this.props;
        console.log(keywordUpdate,e.target.value);
        keywordUpdate(e.target.value)
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.keyword !== this.props.keyword;
    }

    render() {
        //console.log(this.props.keyword)
        console.log("render SearchBar")
        return(
        <div>
            <input value={this.props.keyword} onChange={this.keywordUpdate} placeholder='검색'/>
        </div>
    )
    }

}

export default SearchBar;
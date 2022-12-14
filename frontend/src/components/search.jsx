import React, {useState} from 'react';
import './search.css'
import search from '../media/search.png'
import {ContentOverview, LandmarkOverview} from './overview'

function SearchResultList(props){
    var children = [];
    for(let key in props.searchResult) {
        if(props.searchResult[key]['landmark_id']){ 
            // Content       
            children.push(<ContentOverview 
                key={key}
                content={props.searchResult[key]}
                handleToContent={props.handleToContent}
                showLandmarkName={true}/>);
        }
        else{
            // Landmark
            children.push(<LandmarkOverview 
                key={key}
                landmark={props.searchResult[key]}
                handleToLandmark={props.handleToLandmark}
            />)
        }
    }
    return(<div>{children}</div>)
}

function SearchBar(props){
    const [pattern, setPattern] = useState('');
    return(
        <div className='searchBar'>
            <form>
            <input 
                className='inputBox'
                placeholder='Search a landmark or content'
                value={pattern}
                onChange={(event) => {setPattern(event.target.value)}}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        props.handleSearch(pattern);
                    }
                }}
            />
            <img className='searchImage' src={search} alt='🔍'
            onClick={() => props.handleSearch(pattern)}/>
            </form>
        </div>
    );
}

export {SearchBar, SearchResultList}
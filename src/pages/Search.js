import React from 'react';
import './Search.css';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './../components/StateProvider';
import { actionTypes } from '../components/reducer';

const Search = ({hideButtons = false}) => {
    const [{},dispatch] = useStateValue();
     
    const [input,setInput] = useState("");
    const history = useHistory();

    
    const search = (e) =>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SESRCH_TEAM,
            term: input
        })
         
        history.push('/search');
    }
    return (
        <form className="search" onSubmit={search}>
            <div className="search__input">
                 <SearchIcon className="search__inputIcon" />
                 <input   value={input}
                  onChange={(e) => setInput(e.target.value)} 
                   type="text" />
                 <MicIcon />
            </div>

            {
                !hideButtons ? (
                    <div className="search__buttons" >
                    <Button onClick={search} variant="outlined" >Google Search</Button>
                    <Button variant="outlined" >I'am Feeling Lucky</Button>
                </div>
                ) : (
                    <div className="search__buttons" >
                    <Button className="search__buttonsHidden" onClick={search} variant="outlined" >Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined" >I'am Feeling Lucky</Button>
                </div>
                )
            }
           
        </form>
    );
};

export default Search;
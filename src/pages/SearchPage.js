import React from 'react';
import './SearchPage.css'
import { useStateValue } from './../components/StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from './Search';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import response from '../response';

const SearchPage = () => {

    const [{term},dispatch] = useStateValue();
    const {data} = useGoogleSearch(term)
    // const data = response;

    // https://cse.google.com/cse/create/new

    // Mock api call
    console.log(data)

    return (
        <div className="searchPage"  >
              <div className="searchPage__header">
               <Link to="/">
               <img className="searchPage__log" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="" />
               </Link>

               <div className="searchPage__headerBody">
                <Search hideButtons />
                 <div className="serachPage__options">
                    <div className="search__optionsLeft">
                        <div className="searchPage__options">
                        <SearchIcon />
                        <Link to="/"  >All</Link> 
                        </div> 
                        <div className="searchPage__options">
                        <DescriptionIcon />
                        <Link   to="/" >News</Link> 
                        </div> 
                        <div className="searchPage__options">
                        <ImageIcon />
                        <Link to="/" >Images</Link> 
                        </div> 
                        <div className="searchPage__options">
                        <LocalOfferIcon />
                        <Link to="/" >Shopping</Link> 
                        </div> 
                        <div className="searchPage__options">
                        <RoomIcon />
                        <Link to="/" >Maps</Link> 
                        </div> 
                        <div className="searchPage__options">
                        <MoreVertIcon />
                        <Link to="/" >More</Link> 
                        </div> 
 
                    </div> 
                    <div className="search__optionsRight">
                    {/* <div className="searchPage__options">
                        <Link to="/settings" >Settings</Link> 
                        </div> 
                        <div className="searchPage__options">
                        <Link to="/tools" >Tools</Link> 
                        </div>  */}
 
                    </div>

 
                </div>
               </div> 
              </div>
              
              
              
              {
                  term && (
                    <div className="seacrhPage__results">
                        <p className="search__resultCount">
                        About     {data?.searchInformation.
                        formattedTotalResults}  results ({data?.searchInformation.
                       formattedSearchTime} seconds)  for {term}
                        </p>




                        {
                  data?.items.map(item=> (
                      <div className="searchPage__result" >
                           
                          <a href={item.link} >
                              {
                        item.pagemap?.cse_image?.length &&
                        item.pagemap?.cse_image[0]?.src && (
                             <img 
                             className="seacrh__res__img"
                             src={
                                 item.pagemap?.cse_image?.length
                                  > 0 && item.pagemap?.cse_image[0]?.src
                             }
                             alt=""
                             />  )
                              }
                          {item.displayLink}
                          </a>
                          <a
                          className="searchPage__result__title"
                           href={item.link} >
                            <h2>{item.title}</h2>
                           </a>

                         <p className="searchPage__result__Snippet">
                        {item.snippet}
                         </p>
                      </div>
                  ))
              }
                       
                    </div> 
                  )}
        </div>
    );
};

export default SearchPage;
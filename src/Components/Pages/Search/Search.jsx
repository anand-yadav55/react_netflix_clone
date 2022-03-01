import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer';
import Loading from '../../Loading/Loading'
import SearchResult from './SearchResult'


import './search.css'
const Search = () => {
  const [loading,setLoading] = useState(false);
  const [movies,setMovies] = useState([]);
  //this is the api for searching
  //  https://yts.mx/api/v2/list_movies.json?query_term=${term}`


  return (
    <>
    <div className = 'searched-video'>
      <Navbar/>
      {/* <SearchForm /> */}
      {loading ? <Loading/> : 
        <div className="searched-content">
          {   
              movies.map((element,index)=>{
              return (<SearchResult key = {index} element = {element}/>)
            })
          }
      </div>
      }
    </div>
    <Footer />
    </>
  )
}

export default Search

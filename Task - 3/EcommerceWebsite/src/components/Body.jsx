import Restaurantcards from "./Restaurantcards";
import { CardData } from '../config';
import { useState } from 'react';
import { useEffect} from 'react';
import ShimmerUI from "./ShimmerUI";
import { swiggyAPI } from "../config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useIsOnline from "../utils/useIsOnline";
import NoNet from "./NoNet";

// **********
// -----React Uses One-Way DATA BINDING-----
// This means Data on UI is automatically updated, but we cannot change the data from UI
// One-way data binding is a mechanism in React that allows data to flow in one direction, from the parent component to the child   
// component. This means that when the data in the parent component changes, the child component will automatically update to reflect the  
// changes. However, if the data in the child component changes, the parent component will not be updated.
// Here Local Variable is a parent and Value is a child, so when parent(local var) is updated then child will be updated
// But from UI when value is updated, it doesn't update the parent.
// **********
//1:49:5




const Body = () => {
  // const search_val = "KFC";
  // onChange = {(event) => console.log(event.target.value)}
  // value={search_val}
  const [restaurant, setRestaurant] =  useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    getRestaurant();
  }, []);
  
  async function getRestaurant(){
    try{
      const swiggyData = await fetch(swiggyAPI);
      const liveData = await swiggyData.json();
      // const finalData = await liveData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants;
      const finalData = await liveData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurant(finalData);
      setFilteredRest(finalData);
    }
    catch(e){
      console.log("Error fetching data: ", e);
      // location.reload();
    }
  }

  const isOnline = useIsOnline(); 
 
  if(!isOnline) return <NoNet/>;

  if(!restaurant) return null; //early return 

  
  return (restaurant.length === 0)? <ShimmerUI/> : (
      <>
        <div id="search-container">
          <div className="search">
              <input type="text" 
                  className="search__input" 
                  placeholder="Type your text"
                  value={searchText}
                  onChange = {(event) => {setSearchText(event.target.value)}}
              ></input>
              <button 
                  type="submit"
                  className="search__button"
                  onClick={()=>{
                    const filteredData =  filterData(searchText, restaurant);
                    setFilteredRest(filteredData);
                  }}
              >
                  <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                      <g>
                          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                      </g>
                  </svg>
              </button>
          </div>  
        </div>

        <div id='body'>
            {
              filteredRest.map((restData) => {
                return (
                  <Link to={"restaurantmenu/"+ restData.info.id}  key={restData.info.id}>
                    <Restaurantcards {...restData.info}/>
                  </Link>
                )
              })
            }
        </div>
      </>
    )
}

export default Body;

// 2:13:38 rafce
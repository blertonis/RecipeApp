import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SubMenu from './components/SubMenu';
import FeaturedItem from './components/FeaturedItem';
import Item from './components/Item';
import Heading from './components/Heading';
import { Switch ,Route} from 'react-router-dom';
import ViewRecipe from './components/ViewRecipe';
import useFetch from './useEffect';
import Footer from './components/Footer';
import ListRecipes from './components/ListRecipes';

import React, { useState, useEffect } from 'react';


function App() {
  const [searchValue,setSearchValue] = useState("");
  const [search,setSearch] = useState(false);
  useEffect(() => {
    if(searchValue.length>=1 && searchValue!=""){
      setSearch(true)
    } else{
      setSearch(false);
    }
  },[searchValue]);

  
  const {data:featured,isPending:featuredPending} = useFetch("https://api.spoonacular.com/recipes/random?number=2");
  const {data:topPicks,isPending:picksPending} = useFetch("https://api.spoonacular.com/recipes/random?number=8");


  return (
    <div className="container">
     <Header searchValue={searchValue} setSearchValue={setSearchValue} ></Header>
    
    <Switch>
      <Route exact path="/">
   
      <SubMenu></SubMenu>
      {search ? (
          <div>Search results for:{searchValue}</div>
         ) : (
          <div>

<Heading value="Top picks"></Heading>
    {featuredPending && <h1 class="loading">Loading...</h1>}
     {featured && <FeaturedItem item={featured.recipes}></FeaturedItem> }
     <Heading value="Other"></Heading>
     {picksPending && <h1 class="loading">Loading...</h1>}
     {topPicks && <Item item={topPicks.recipes}></Item> }
          </div>
     
         )}
      </Route>

      <Route exact path="/viewrecipes/:id">
      <SubMenu></SubMenu>
        <ViewRecipe></ViewRecipe>
      </Route>

      <Route exact path="/listrecipes/:type">
      
      <SubMenu></SubMenu>
      <ListRecipes></ListRecipes>
      
      </Route>
    </Switch>

     <Footer></Footer>

    </div>
  );
}

export default App;

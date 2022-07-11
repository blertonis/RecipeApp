import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SubMenu from './components/SubMenu';
import FeaturedItem from './components/FeaturedItem';
import Item from './components/Item';
import Heading from './components/Heading';
import { Switch ,Route} from 'react-router-dom';
import ViewRecipe from './components/ViewRecipe';
import useFetch from './hooks/useEffect';
import Footer from './components/Footer';
import ListRecipes from './components/ListRecipes';

import React, { useState, useEffect } from 'react';


function App() {
  const [searchValue,setSearchValue] = useState("");
  const [search,setSearch] = useState(false);
  const [type,setType] = useState("");
  const {data:sr} = useFetch(`https://api.spoonacular.com/recipes/complexSearch/?query=${type}`);


  useEffect(() => {
    if(searchValue.length>=1 && searchValue!=""){
      setSearch(true);
      setType(searchValue);
      console.log(sr);

    } else{
      setSearch(false);
    }
  },[searchValue]);

  
  const {data:featured,isPending:featuredPending} = useFetch("https://api.spoonacular.com/recipes/random?number=2");
  const {data:topPicks,isPending:picksPending} = useFetch("https://api.spoonacular.com/recipes/random?number=8");
  const {data:searchres,isPending:searchPending} = useFetch(`https://api.spoonacular.com/recipes/complexSearch/?query=${type}`);


  return (
    <div className="container">
     <Header searchValue={searchValue} setSearchValue={setSearchValue} ></Header>
    
    <Switch>
      <Route exact path="/">
   
      <SubMenu></SubMenu>
      {search ? (
          <div>Search results for:{searchValue}
          {searchres && <Item item={searchres.results}></Item> }

          
          </div>
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

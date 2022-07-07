const Header = ({searchValue,setSearchValue}) =>{
    return(     <div class="menu">
    <div class="title">
<h1><span id="aaa">Recepe</span>App</h1>
    </div>
    <div class="search">
            
        <input type="text" class="fff" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder="search"/><button id="ss"><i class="fa fa-search"></i></button>
    </div>
    
</div>)
}

export default Header;
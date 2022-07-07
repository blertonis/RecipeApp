import { useState } from 'react';
import {Link} from 'react-router-dom';

const SubMenu = () =>{
    const [pizza,setPizza] = useState(true);
    const [noddle,setNoddle] = useState(false);
    const [other,setOther] = useState(false);

    const [qebab,setQebab] = useState(false);

    const highlight = (val) =>{
        if(val=='pizza'){
            setPizza(true);
        } else if(val=="noddle"){
            setNoddle(true);
        }

    }
    return(   <div className="sort">
       
       <div>
       {pizza ? (
          <Link to="/">
          <div className="ffa pizza">
          <i class="fa-solid fa-house"></i>Home
          </div>
          </Link>
       ) : (

        <Link to="/">
           <div className="ffa" onClick={() => {setPizza(true);setNoddle(false);setOther(false);setQebab(false)}}>
              
           <i class="fa-solid fa-house"></i>Home
           </div>
           </Link>
       )}
       </div>
         


       <div>
       {noddle ? (
          <Link to="/listrecipes/noodle">
           <div className="ffa pizza" onClick={() => {setNoddle(false);setPizza(false);setOther(false);setQebab(false)}}>
           <i class="fa fa-bars" aria-hidden="true"></i>
            Noddle
        </div>
          </Link>
       ) : (

        <Link to="/listrecipes/noodle">
          <div className="ffa"  onClick={() => {setNoddle(true);setPizza(false);setOther(false);setQebab(false)}}>
          <i class="fa fa-bars" aria-hidden="true"></i>
            Noddle
        </div>
           </Link>
       )}
       </div>

       {other ? (
          <Link to="/listrecipes/pasta">
           <div className="ffa pizza" onClick={() => {setNoddle(false);setPizza(false);setOther(false);setQebab(false)}}>
           <i class="fa-solid fa-bowl-food"></i>
            Pasta
        </div>
          </Link>
       ) : (

        <Link to="/listrecipes/pasta">
          <div className="ffa"  onClick={() => {setNoddle(false);setPizza(false);setOther(true);setQebab(false)}}>
          <i class="fa-solid fa-bowl-food"></i>                      Pasta
        </div>
           </Link>
       )}
    {qebab ? (
          <Link to="/listrecipes/pizza">
           <div className="ffa pizza" onClick={() => {setNoddle(false);setPizza(false);setOther(false);setQebab(false)}}>
            <i className="fa-solid fa-pizza-slice"></i>
            Pizza
        </div>
          </Link>
       ) : (

        <Link to="/listrecipes/pizza">
          <div className="ffa"  onClick={() => {setNoddle(false);setPizza(false);setOther(false);setQebab(true)}}>
            <i className="fa-solid fa-pizza-slice"></i>
            Pizza
        </div>
           </Link>
       )}

</div>);
}

export default SubMenu;
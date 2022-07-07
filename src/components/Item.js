import { useHistory } from "react-router-dom";

const Item = ({item}) =>{

    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/viewrecipes/${id}`);}  



    return(<div className="list">

{item.map((m) => (
               <div class="other-item" onClick={() => handleClick(m.id)}>
               <img src={m.image}/>
               
                   <div class="caption">{m.title}</div>
           </div>
       ))}

    </div>);
}

export default Item;
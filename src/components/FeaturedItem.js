import useFetch from "../useEffect";
import {useHistory} from 'react-router-dom';
const FeaturedItem = ({item}) => {

 const history = useHistory();
        const handleClick = (id) => {
            history.push(`/viewrecipes/${id}`);}  



return(<div class="list">
                
       {item.map((m) => (
               
                 <div class="featured" onClick={() => handleClick(m.id)}>
                       
                 <img src={m.image}/>
                 <div class="caption">{m.title}</div>
                 
                </div>
               
       ))}


               

        </div>);
}


export default FeaturedItem;
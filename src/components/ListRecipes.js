
import useFetch from '../useEffect';
import { useParams } from 'react-router-dom';
import Item from './Item'
const ListRecipes = () =>{
    const {type} = useParams();
    const {data,isPending} = useFetch(`https://api.spoonacular.com/recipes/complexSearch/?query=${type}`);


    return(<div>
        {isPending && <h1>Loading...</h1>}
    {data && <Item item={data.results}></Item>} 
    </div>)
}

export default ListRecipes;
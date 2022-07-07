import {useParams} from 'react-router-dom';

import useFetch from '../useEffect';

const ViewRecipe = () =>{

    const {id} = useParams();
    const {data,isPending} = useFetch(`https://api.spoonacular.com/recipes/${id}/information`,'?key');
    console.log(data && data);

    return(<div className="view-recipe">
<div className="recipe-image">
{data && <img src={data.image}></img>}
</div>

<div>
    
    <h1>{data && data.title}</h1>
    {data && <p dangerouslySetInnerHTML={{__html: data.summary}}></p>}
    
    {data && <p dangerouslySetInnerHTML={{__html: data.instructions}}></p>}

    <ul>
       {data && data.extendedIngredients.map((f) => {
           <li>faaaff</li>
         
       })}
    </ul>
</div>

    </div>)
}

export default ViewRecipe;
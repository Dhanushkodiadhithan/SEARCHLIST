import { useEffect, useState } from 'react';
import './App.css'
function App(){
    const cities=['indoor','chennai','bhopal','surat','coimbatore','pune','solapur']

    const[search,setsearch]=useState('');          

    const[filtered,setfiltered]=useState(cities); 

    const onchangehandler=(event)=>{      
        setsearch(event.target.value)
    }

    useEffect(()=>{  
        const filtered=[...cities].filter(
            (element)=>(element?.toLocaleLowerCase()?.startsWith(search.toLocaleLowerCase()))  // filtering the cities array based on whether each city starts with the lowercase version of the search value. This will update the list of cities that match the search criteria.

        )
            setfiltered(filtered)

        
    }
    ,[search])



return(
    <div className='container'>
        <input className='searchbar' placeholder='TYPE TO SEARCH...'value={search} onChange={onchangehandler}></input>
        <ul className='searchlist'>
            {
                filtered.map((element)=>{
                    return(
                        <li className='result' value={element}>{element}</li>
                    )

                })
            }

        </ul>
    </div>
)
}
export default App;
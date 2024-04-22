import React from 'react';
import "./Table.css";
import {useState} from 'react';
const Table= ({breeds})=> {
    const [dogBreeds, setDogBreeds]=useState(breeds);
    const [searchQuery, setSearchQuery]=useState('');
    console.log(dogBreeds);
    const [sortConfig,setSortConfig]=useState({
        column:undefined,
        direction:"asc"
    });

    const handleSort=(key)=>{
        console.log(key)
        const newSortConfig={column:key,direction:"asc"}
        if(sortConfig.column===key && sortConfig.direction==="asc"){
           newSortConfig.direction="desc";
        }
        setSortConfig(newSortConfig)
        const sortedBreeds=[...breeds].sort((a,b)=>{
            if(newSortConfig.direction==='asc'){
                return a[key] > b[key]? 1:-1;
            } else{
                return a[key] < b[key]? 1:-1;
            }
            

        });
        setDogBreeds(sortedBreeds);
    }

    const getHeaderArrow=(key)=>{
        if(sortConfig.column !== key) return null
        if(sortConfig.direction==='asc'){
            return <span>&#8595;</span>
        }
        else{
            return <span>&#8593;</span>
        }
    }
    const renderHeader=(name,key)=>{
        return(<th onClick={()=>handleSort(key)}><div>{name} {getHeaderArrow(key)}</div></th>)
    }

    const handleSearchChange=(e)=>{
        setSearchQuery(e.target.value);

        const newBreeds=breeds.filter((breed)=>{
            return breed.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setDogBreeds(newBreeds)

    }
  return (
    <div className='table'>
        <div className=''><input type='text' value={searchQuery} onChange={handleSearchChange} placeholder='search breeds'></input>
        </div>
        <>
        <table>
            <thead>
                <tr>
                    {renderHeader('ID','id')}
                    {renderHeader('Name','name')}
                    {renderHeader('Average Weight','avgWeight')}
                    {renderHeader('Average Lifespan','avgLifespan')}
                    {renderHeader('Average Height','avgHeight')}
                    {renderHeader('Active Breed?','isActive')}
                </tr>
            </thead>
            <tbody>
                {dogBreeds.map((breed)=>{
                    return(<tr key={breed.id}>
                        <td>{breed.id}</td>
                        <td>{breed.name}</td>
                        <td>{breed.avgWeight}</td>
                        <td>{breed.avgLifespan}</td>
                        <td>{breed.avgHeight}</td>
                        <td>{breed.isActive?'Yes':'No'}</td>
                    </tr>)
                })}
            </tbody>
        </table>
        </>
    </div>
  )
}

export default Table
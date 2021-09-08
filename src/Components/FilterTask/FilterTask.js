import React from 'react'
import './FilterTask.css'

const FilterTask = ({setFilterr}) => {

    return (
        <div className='filterB'>
            <button onClick={()=>setFilterr('1')}>All</button>
            <button onClick={(e)=>setFilterr('2')}>Done</button>
            <button onClick={(e)=>setFilterr('3')}>Undone</button>
        </div>
    )
}

export default FilterTask

import React, { useEffect, useState } from 'react'
import {toatlPopulation} from '../API/api'

const TotalPopulation = () => {
const [totalPop, setToatalPop] = useState()

    const fetchapi = async()=>{
        const totalPop = await toatlPopulation();
        console.log(totalPop);
        setToatalPop(totalPop);
    };

    useEffect(()=>{
        fetchapi();
    },[]);
  return (
    <div>
      Total Population :
      {totalPop}
    </div>
  )
}

export default TotalPopulation
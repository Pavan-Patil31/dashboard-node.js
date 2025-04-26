import React, { useEffect, useState } from 'react'
import {totalCountries} from '../API/api'

const TotalCountries = () => {
const [tCount, setTCount] = useState();

useEffect(()=>{
    const tC = totalCountries();
    setTCount(tC);
},[])

  return (
    <div>
        Total Countries:
        {tCount}

    </div>
  )
}

export default TotalCountries
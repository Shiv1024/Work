import React from 'react'
import AmountCountTable from './Components/AmountCountTable'
import AmountCountGraph from './Components/AmountCountGraph'
import AmountTable from './Components/AmountTable'
import AmountGraph from './AmountGraph'

const Amount = () => {

  return (
    <div>
        <AmountCountTable/>
        <AmountCountGraph/>
        <AmountTable/>
        <AmountGraph/>
    </div>
  )
}

export default Amount

import React from "react"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';

  
export default function POWER(){
    
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        fetch("https://backend-lalai.herokuapp.com/api/v1/all")
        .then(data=> data.json())
        .then(item => {
            setState(item)
        })
    }, [state])
    const P = []
    state.map(item => {
        return P.push(item.data.irms)
        
    })
    const power = []
    P.forEach((item, num) => {
      power.push({ argument: num, value: item })
    })
      
    return (
        <>
        <Chart
          data={power}
        >
          <ArgumentAxis />
          <ValueAxis />
          <SplineSeries
            name="Irms"
            valueField="value"
            argumentField="argument"
            color={"red"}
          />
           <Title
             text="Power (W)"
           />
        </Chart>
        
        </>
    )
}
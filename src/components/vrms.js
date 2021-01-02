import React from "react"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';

  
export default function VRMS(){
    
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        fetch("https://backend-lalai.herokuapp.com/api/v1/all")
        .then(data=> data.json())
        .then(item => {
            setState(item)
        })
    }, [])
    const vrms = []
    state.map(item => {
        return vrms.push(item.data.vrms)
    })
    const vrmsScheme = []
    vrms.forEach((item, num) => {
        vrmsScheme.push({ argument: num, value: item })
    })
      
    return (
        <>
        <Chart
          data={vrmsScheme}
        >
          <ArgumentAxis />
          <ValueAxis />
          <SplineSeries
            name="Irms"
            valueField="value"
            argumentField="argument"
            color={"orange"}
          />
           <Title
             text="VRMS (V)"
           />
        </Chart>
        
        </>
    )
}
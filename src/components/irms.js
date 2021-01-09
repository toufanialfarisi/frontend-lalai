
import React from "react"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';

  
export default function IRMS(){
    
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        fetch("https://backend-lalai.herokuapp.com/api/v1/all")
        .then(data=> data.json())
        .then(item => {
            setState(item.data)
        })
    }, [])
    const irms = []
    const vrms = []
    state.map(item => { return irms.push(item.irms)})
    const vrmsScheme = []
    vrms.forEach((item, num) => {
        vrmsScheme.push({ argument: num, value: item })
    })
    const irmsScheme = []
    irms.forEach((item, num) => {
        irmsScheme.push({ argument: num, value: item })
    })
      
    return (
        <>
        <Chart
          data={irmsScheme}
        >
          <ArgumentAxis />
          <ValueAxis />
          <SplineSeries
            name="Irms"
            valueField="value"
            argumentField="argument"
          />
           <Title
             text="Irms (mA)"
           />
        </Chart>
        
        </>
    )
}
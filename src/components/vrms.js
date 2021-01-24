import React from "react"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';

import {useData} from "../components/DataProvider"
  
export default function VRMS(){
    const {endpoint} = useData()
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        fetch(endpoint+"/all")
        .then(data=> data.json())
        .then(item => {
            setState(item.data)
        })
    }, [])
    
    const vrms = []
    state.map(item => {
        return vrms.push(item.vrms)
    })
    const vrmsScheme = []
    vrms.forEach((item, num) => {
        vrmsScheme.push({ argument: num, value: item })
    })
    console.log(vrmsScheme)
    return (
        <>
        <Chart
          data={vrmsScheme}
        >
          <ArgumentAxis />
          <ValueAxis />
          <SplineSeries
            name="Vrms"
            valueField="value"
            argumentField="argument"
            color={"orange"}
          />
           <Title
             text="Vrms (V)"
           />
        </Chart>
        
        </>
    )
}

import React from "react"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
import {useData} from "../components/DataProvider"
  
export default function POWER(){
  const {endpoint} = useData()
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        fetch(endpoint + "/all")
        .then(data=> data.json())
        .then(item => {
            setState(item.data)
        })
    }, [])
    const P = []
    state.map(item => {
        return P.push(item.irms)
        
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
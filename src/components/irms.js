
import React from "react"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
import {useData} from "../components/DataProvider"

export default function IRMS(){
    const {endpoint} = useData()
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        fetch(endpoint+"/all")
        .then(data=> data.json())
        .then(item => {
            setState(item.data)
        })
    }, [])
    const irms = []
    state.map(item => { return irms.push(item.irms)})
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
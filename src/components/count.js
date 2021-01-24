import React from "react"
import Typography from '@material-ui/core/Typography';
import {useData} from "../components/DataProvider"
export default function Count(){
    const {endpoint} = useData();
    const [state, setState] = React.useState({});
    React.useEffect(() => {
        fetch(endpoint + "/count")
        .then(data=> data.json())
        .then(item => {
            setState(item)
        })
    }, [state])
    return (
        <>
        <Typography variant="p" color="textSecondary">Number Incoming Data</Typography>
        <div style={{margin:"auto"}}>
            <Typography variant="h1" color="primary">{state.size}</Typography>
        </div>
        </>
    )
}
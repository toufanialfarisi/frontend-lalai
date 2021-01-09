import React from "react"
import Typography from '@material-ui/core/Typography';

export default function Count(){
    const [state, setState] = React.useState({})
    React.useEffect(() => {
        fetch("https://backend-lalai.herokuapp.com/api/v1/count")
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
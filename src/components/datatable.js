import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

  
export default function DataTable(){
  const [state, setState] = React.useState([])
  const store = []
  React.useEffect(() => {
    fetch("https://backend-lalai.herokuapp.com/api/v1/all")
    .then(data=>data.json())
    .then(result=> {
      setState(result.data)
      // store.push(result.data)
    })
  }, [])
    const classes = useStyles();
    return (
        <>
        <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Vrms</TableCell>
            <TableCell align="center">Irms</TableCell>
            <TableCell align="center">P</TableCell>
            <TableCell align="center">Prediction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((item) => (
            <TableRow key={item._id}>
                <TableCell align="center">{item.vrms}</TableCell>
              <TableCell align="center">{item.irms}</TableCell>
              <TableCell align="center">{item.p}</TableCell>
              <TableCell align="center"  component="th" scope="row">
                {item.y_pred}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
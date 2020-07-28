import React from 'react'
import { makeStyles, FormControl, FormLabel, Select, MenuItem, InputBase, Paper } from '@material-ui/core'

const useStyle = makeStyles({

    input: {
        flex: 1,
        paddingLeft: 4
      },
      paper: {
        width: "100%",
        boxShadow: "none",
        border: "1px solid #ced4da",
        marginBottom: 5,
      },
      label: {
        color: "rgb(0,0,0)",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
      },
})
const SimpleInput = (props) => {

    const {
        name,
        type,
        fullWidth
    } = props
    const classes =  useStyle()

    return (
        <FormControl fullWidth={fullWidth}>
            <FormLabel className={classes.label}>{name}</FormLabel>
            <Paper component="form" className={classes.paper}>
              <InputBase className={classes.input} fullWidth={fullWidth}  type={type}/>
            </Paper>
          </FormControl>
    )
}

export default SimpleInput
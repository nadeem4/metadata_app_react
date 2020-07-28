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
        marginTop: 5,
        marginBottom: 6,
        width: "100%",
      },
})
const FilterInput = (props) => {

    const {
        name,
        type,
        fullWidth
    } = props
    const classes =  useStyle()

    return (
        <FormControl fullWidth={fullWidth}>
        <FormLabel className={classes.label}> {name} </FormLabel>
        <Paper component="form" className={classes.paper}>
          <Select
            labelId="label"
            id="select"
            value="Contains"
            fullWidth={fullWidth}
            className={classes.input} 
          >
            <MenuItem value="Contains">Contains</MenuItem>
            <MenuItem value="Do Not Contain">Do Not Contain</MenuItem>
          </Select>
        </Paper>
        <Paper component="form" className={classes.paper}>
          <InputBase className={classes.input} fullWidth={fullWidth}/>
        </Paper>
      </FormControl>
    )
}

export default FilterInput
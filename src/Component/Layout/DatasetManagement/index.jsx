import React from 'react'
import { Grid } from '@material-ui/core'
import DatasetFilter from './Filter/index.jsx'
import Datasets from './Datasets/index.jsx'

const DatasetManagement = () => {

    return ( 
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid container item xs={10} spacing={2}>
                <Grid item xs={3}><DatasetFilter/></Grid>
                <Grid item xs={9}><Datasets/></Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}

export default DatasetManagement
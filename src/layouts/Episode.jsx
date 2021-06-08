import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertList from "../pages/JobAdvert/JobAdvertList";
import JobPositionList from "../pages/JobPositionList";
import EmployerList from "../pages/EmployerList";

export default function Episode() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={12}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobAdvertList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobPositionList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}

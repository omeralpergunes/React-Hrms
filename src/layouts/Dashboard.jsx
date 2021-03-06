import React from 'react'
import { Grid } from "semantic-ui-react";
import Episode from './Episode';
import SideBar from "./SideBar";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Episode />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

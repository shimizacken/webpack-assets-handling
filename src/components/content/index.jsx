import React from 'react';
import { HeartsLoader, ThreeDotsLoader, Grid } from  '../loaders';

export default class Content extends React.Component {

    render() {

        return(
            <div style={{
                backgroundColor: '#9B59B6',
                width: '75px',
                padding: '5px'
            }}>
                <Grid width={50} />
            </div>
        );
    }
}
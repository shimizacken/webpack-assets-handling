import React from 'react';
import classNames from 'classnames';
import { HeartsLoader, ThreeDotsLoader, Grid } from  '../loaders';
import styles from './style.scss';

export default class Content extends React.Component {

    render() {

        console.log(styles);

        return(
            <div className={classNames(styles.loaderWrapper)}>
                <Grid width={50} />
            </div>
        );
    }
}
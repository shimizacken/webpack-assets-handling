import React from 'react';
import ToolBar from '../toolbar';
import Content from '../content';

export default class MainWrapper extends React.Component {

    render() {

        return(
            <div className='main-wrapper'>
                <ToolBar />
                <div className='main-content'>
                    <h1>
                        {`${this.props.title}`}
                    </h1>
                    <Content />
                </div>
            </div>
        );
    }
}
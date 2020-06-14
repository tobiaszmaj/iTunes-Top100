import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
    render() {
        return (
            <div className={'notFound'}>
                <div className="error404 glitch" data-text="iTunes Top 100">iTunes Top 100</div>
                <div className="pageNotFound glitch" data-text="Click the logo at the top, to check the latest ranking.">Click the logo at the top, to check the latest ranking.</div>
            </div>
        )
    }
}

export default NotFound; 
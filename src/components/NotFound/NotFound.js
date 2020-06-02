import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
    render() {
        return (
            <div className={'notFound'}>
                <div className="error404 glitch" data-text="404">404</div>
                <div className="pageNotFound glitch" data-text="PAGE NOT FOUND">Page not found</div>
            </div>
        )
    }
}

export default NotFound; 
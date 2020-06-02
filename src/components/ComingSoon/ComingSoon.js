import React, { Component } from 'react';
import './ComingSoon.scss';

class ComingSoon extends Component {
    render() {
        return (
            <div className={'comingSoon'}>
                <div className="comingSoon__text">
                    <span className="text__main">Coming soon.</span><br />
                    <span className="text__additional">Or not. I don't know yet.</span>
                </div>
            </div>
        )
    }
}

export default ComingSoon; 
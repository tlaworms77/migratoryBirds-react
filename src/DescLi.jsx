import React, { Component } from 'react';

class DescLi extends Component {

    render() {
        const { lis, key } = this.props;
        return (
            <>
                {
                    (lis).map((v, i)=>{
                        return (
                            <li id={key}>
                                <span>{v}</span>
                            </li>
                        );
                    })
                }
            </>
        );
    };

}

export default DescLi;
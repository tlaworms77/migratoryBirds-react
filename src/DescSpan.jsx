import React, { Component } from 'react';

class DescSpan extends Component {

    render() {
        const { descList, key } = this.props;
        return (
            <>
                {
                    (descList).map((v, i)=>{
                        return (
                            <div id={key}>
                                <span>{v}</span>
                                <br />
                            </div>
                        );
                    })
                }
            </>
        );
    };

}

export default DescSpan;
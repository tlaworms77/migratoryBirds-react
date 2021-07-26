import React, { Component } from 'react';

class SimpleInput extends Component {

    render() {
        const { descList, key } = this.props;
        return (
            <>
                {
                    (descList).map((v, i)=>{
                        return (
                            <div className={this.props.sampleInput} id={key}>
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

export default SimpleInput;
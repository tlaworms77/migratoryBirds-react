import React, { Component } from 'react';
import MigratoryBirds  from './MigratoryBirds';
import DayOfTheProgrammer  from './DayOfTheProgrammer';
import BillDivision  from './BillDivision';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faArrowCircleLeft, faArrowLeft, faChevronLeft, faChevronRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

class App extends Component {

    state = {
        problemNumber : 3
    }

    onTransPrevProblem = (e) => {
        let minPage = 1;
        let prevPage = this.state.problemNumber - 1;
        if( prevPage >= minPage ) {
            this.setState({problemNumber: prevPage});
        } else {
            this.setState({problemNumber: 3});
        }
    }
    onTransNextProblem = (e) => {
        let maxPage = 3;
        let nextPage = this.state.problemNumber + 1;
        if( nextPage <= maxPage ) {
            this.setState({problemNumber: nextPage});
        } else {
            this.setState({problemNumber: 1});
        }
    }

    renderSwitch = (param) => {
        switch(param) {
            case 1: return <MigratoryBirds/>
            case 2: return <DayOfTheProgrammer/> 
            case 3: return <BillDivision/> 
        }
    }

    render() {
        let { problemNumber } = this.state;
        return (
            <>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button  style={{width: '100px', height: '100px'}} title='Prev Problem!' onClick={this.onTransPrevProblem}><FontAwesomeIcon icon={faChevronLeft} /></button>
                </div>
                {
                    this.renderSwitch(problemNumber)
                }
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button  style={{width: '100px', height: '100px'}} title='Next Problem!' onClick={this.onTransNextProblem}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </>
        );
    };

}

export default App;
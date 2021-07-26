import React, { Component } from 'react';
import DescSpan from './DescSpan';
import SimpleInput from './SimpleInput';
import DescLi from './DescLi';
import './algorithm.css';

class DayOfTheProgrammer extends Component {

    state = {
        title: 'Day Of The Programmer',
        content: [
            {
                header: '',
                desc: [
                    "Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.",
                    "From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.",
                    "In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:"
                ],
                lastDesc: [
                    "Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.",
                    "For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984."
                ],
                li: [
                    'Divisible by 400.',
                    'Divisible by 4 and not divisible by 100.'
                ],
                sampleTag: []
            },
            {
                header: 'Function Description',
                desc: [
                    'Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.',
                    'migratoryBirds has the following parameter(s):'
                ],
                lastDesc: [
                ],
                li: [
                    'year: an integer'
                ],
                sampleTag: []
            },
            {
                header: 'Input Format',
                desc: [
                    'A single integer denoting year y.'
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: []
            },
            {
                header: 'Constraints',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                    '1700 \le y \le 2700'
                ],
                sampleTag: [
                    
                ]
            },
            {
                header: 'Output Format',
                desc: [
                    'Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.'
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: []
            },
            {
                header: 'Sample Input 0',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    '2017'
                ]
            },
            {
                header: 'Sample Output 0',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    '13.09.2017'
                ]
            },
            {
                header: 'Explanation 0',
                desc: [
                    'In the year y = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days.', 
                    'When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243.', 
                    'Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September).', 
                    'We then print the full date in the specified format, which is 13.09.2017.'
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: []
            },
            {
                header: 'Sample Input 1',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    '2016'
                ]
            },
            {
                header: 'Sample Output 1',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    '12.09.2016'
                ]
            },
            {
                header: 'Explanation 1',
                desc: [
                    'Year y = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017.', 
                    'When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244.', 
                    'Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that it falls on day 12 of the 9th month (September).',
                    'We then print the full date in the specified format, which is 12.09.2016.'
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: []
            },
            {
                header: 'Sample Input 2',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    '1800'
                ]
            },
            {
                header: 'Sample Output 2',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    '12.09.1800'
                ]
            },
            {
                header: 'Explanation 2',
                desc: [
                    'Since 1800 is leap year as per Julian calendar. Day lies on 12 September.'
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: []
            }
        ],
        testCount: '',
        inputValue: '',
        resolve: '?'
    };

    onChangeInput = (e) => {
        this.setState({
            testCount: e.target.value
        });
    }

    onChangeInputArray = (e) => {
        this.setState({
            inputValue: e.target.value //[...this.state.inputArray, e.target.value]
        });
    }

    onClickResultBtn = (e) => {
        e.preventDefault();

        let testCnt = this.state.testCount;
        if(testCnt < 5 || testCnt > 2*100000) {
            alert('테스트 N의 갯수는 5이상 2X100000이하 입니다.')
            return;
        }

        var inputArray = (this.state.inputValue).split(' ');
        if(testCnt != inputArray.length) {
            alert('테스트 N의 갯수와 샘플입력 갯수와 다릅니다.')
            return;
        }
        
        this.setState( { resolve: migratoryBirds(inputArray) } );
        
    }

    onTransPrevProblem = (e) => {
        
    }
    
    onTransNextProblem = (e) => {

    }


    isHeaderReturn = (v) => {
        return v.header ? (<><b>{v.header}</b><br /></>) : <></>;
    }

    render() {
        const { title, content, testCount, inputValue, resolve, sampleTag } = this.state;
        return (
            <>
                <div >
                    <div className='headerTitle'>
                        <h1>{title}</h1>
                    </div>
                    <div className='pb-content'>
                        <h2>Problem</h2>
                        <div>
                            {
                                (content).map((v, i)=>{
                                    return (
                                        <div key={i + 'A'}>
                                            {this.isHeaderReturn(v)}
                                            <DescSpan key={i + 'B'} descList={v.desc} />
                                            <ul>
                                                <DescLi key={'li-' + i} lis={v.li} />
                                            </ul>
                                            <SimpleInput sampleInput="sampleInput" key={i + 'tag'} descList={v.sampleTag} />
                                            <DescSpan key={i + 'C'} descList={v.lastDesc} />
                                            <br />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <h2>Resolve</h2>
                    <form>
                        <span>※Constraints: 5 ≤ N ≤ 2X10<sup>5</sup></span><br/>
                        <label htmlFor='testCount'>Input TypeCount : </label>
                        <input type="number" id='testCount' onChange={this.onChangeInput} value={testCount} />
                        <br/>
                        <label htmlFor='inputArr'>Sample Array : </label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input id='inputArr' onChange={this.onChangeInputArray} value={inputValue} />
                        &nbsp;
                        <button onClick={this.onClickResultBtn}>Result</button>
                        <br/>
                        <span> Result BirdType: </span><b>Type {resolve}</b>
                    </form>
                </div>
            </>
        );
    };

}

const migratoryBirds = (arr) => {
    let migratoryBirdsMap = new Map(); 
    migratoryBirdsMap.set(1, 0); 
    migratoryBirdsMap.set(2, 0); 
    migratoryBirdsMap.set(3, 0); 
    migratoryBirdsMap.set(4, 0); 
    migratoryBirdsMap.set(5, 0); 
    arr.filter((v) => { 
        let intValue = parseInt(v); 
        migratoryBirdsMap.set(intValue, migratoryBirdsMap.get(intValue)+1); 
        return v;
    }); 
    let result = [];
    migratoryBirdsMap.forEach((v, k) => {
        result = [...result, v]
    });
    return result.findIndex( (v)=>{ 
        return v == result.reduce((a,b) => a > b ? a : b) 
    } ) + 1;

}

export default DayOfTheProgrammer;
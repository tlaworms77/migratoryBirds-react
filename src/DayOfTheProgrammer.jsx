import React, { Component } from 'react';
import DescSpan from './DescSpan';
import SimpleInput from './SimpleInput';
import DescLi from './DescLi';
import './algorithm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faArrowCircleLeft, faArrowLeft, faChevronLeft, faChevronRight, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

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
        testYear: 2021,
        resolve: 'yyyy-mm-dd'
    };

    onChangeInput = (e) => {
        this.setState({
            testYear: e.target.value
        });
    }

    onClickResultBtn = (e) => {
        e.preventDefault();
        let testYear = parseInt(this.state.testYear);
        if(testYear < 1700 || testYear > 2700) {
            alert('제약사항을 읽어보세요.');
            return;
        }
        
        this.setState( { resolve: dayOfProgrammer(testYear) } );
        
    }

    isHeaderReturn = (v) => {
        return v.header ? (<><b>{v.header}</b><br /></>) : <></>;
    }

    render() {
        const { title, content, testYear, resolve } = this.state;
        return (
            <>
                <div className={'bodyContents'}>
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
                        <span>※Constraints: 1700 ≤ y ≤ 2700</span><br/>
                        <label htmlFor='testYear'>Searching Year : </label>
                        <input placeholder={2021} minLength={4} maxLength={4} type="number" id='testYear' onChange={this.onChangeInput} value={testYear} />
                        <button onClick={this.onClickResultBtn}><FontAwesomeIcon icon={faSearch} /></button>
                        <br/>
                        <span> Result The Programmer Day: </span><b>{resolve}</b>
                    </form>
                </div>
            </>
        );
    };

}

/* 
 * 1700 <= the Gregorian Calender <= 1917 
 * 1918 <= tye Julian Calender <= ...
 */
const dayOfProgrammer = (year) =>  {
    let resultDate = '26.09.1918'
    let programmerDay = '.09.' + year + '';
    if (year < 1918) { 
        resultDate = isJulianLeafYear(year, programmerDay);
     } else if (year > 1918) {
        resultDate = isGregorianLeafYear(year, programmerDay);
     }

    return resultDate;
}

/* 1918 <= the Gregorian Calender <= ... */
const isGregorianLeafYear = (year, programmerDay) => {
    let isLeafDay = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
    return getProgrammersDate(isLeafDay, programmerDay);
}

/* 1700 <= tye Julian Calender <= 1917 */
const isJulianLeafYear = (year, programmerDay) => {
    let isLeafDay = (year % 4 === 0);
    return getProgrammersDate(isLeafDay, programmerDay);
}

const getProgrammersDate = (isLeafDay, programmerDay) => {
    return isLeafDay ? '12' + programmerDay : '13' + programmerDay;
}

export default DayOfTheProgrammer;

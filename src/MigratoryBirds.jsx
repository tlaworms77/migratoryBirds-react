import React, { Component } from 'react';
import DescSpan from './DescSpan';
import SimpleInput from './SimpleInput';
import DescLi from './DescLi';
import './algorithm.css';

class MigratoryBirds extends Component {

    state = {
        title: 'Migratory Birds',
        desc: 'Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.',
        content: [
            {
                header: 'Example',
                desc: [
                        'arr = [1,1,2,2,3]',
                        'There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.'
                    ],
                lastDesc: [
                ],
                li: [
                    
                ],
                sampleTag: []
            },
            {
                header: 'Function Description',
                desc: [
                    'Complete the migratoryBirds function in the editor below.',
                    'migratoryBirds has the following parameter(s):'
                ],
                lastDesc: [
                ],
                li: [
                    'int arr[n]: the types of birds sighted'
                ],
                sampleTag: []
            },
            {
                header: 'Returns',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                    'int: the lowest type id of the most frequently sighted birds'
                ],
                sampleTag: []
            },
            {
                header: 'Input Format',
                desc: [
                    'The first line contains an integer, n, the size of arr.',
                    'The second line describes arr as n space-separated integers, each a type number of the bird sighted.'
                ],
                lastDesc: [
                ],
                li: [
                ],
                sampleTag: [
                    
                ]
            },
            {
                header: 'Constraints',
                desc: [
                ],
                lastDesc: [
                ],
                li: [
                    '5 ≤ n ≤ 2 X 100,000',
                    'It is guaranteed that each type is 1, 2, 3, 4, or 5.'
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
                    '6',
                    '1 4 4 4 5 3'
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
                    '4'
                ]
            },
            {
                header: 'Explanation 0',
                desc: [
                    'The different types of birds occur in the following frequencies:'
                ],
                lastDesc: [
                    'The different types of birds occur in the following frequencies:'
                ],
                li: [
                    'Type 1: 1 bird',
                    'Type 2: 0 birds',
                    'Type 3: 1 bird',
                    'Type 4: 3 birds',
                    'Type 5: 1 bird'
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
                    '11',
                    '1 2 3 4 5 4 3 2 1 3 4'
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
                    '3'
                ]
            },
            {
                header: 'Explanation 1',
                desc: [
                    'The different types of birds occur in the following frequencies:'
                ],
                lastDesc: [
                    'Two types have a frequency of 3, and the lower of those is type 3.'
                ],
                li: [
                    'Type 1: 2 bird',
                    'Type 2: 2 birds',
                    'Type 3: 3 bird',
                    'Type 4: 3 birds',
                    'Type 5: 1 bird'
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

    render() {
        const { title, desc, content, testCount, inputValue, resolve, sampleTag } = this.state;
        return (
            <>
                <div className={'bodyContents'}>
                    <div className='headerTitle'>
                        <h1>
                            {title}
                        </h1>
                    </div>
                    <div className='pb-content'>
                        <h2>Problem</h2>
                        <span>{desc}</span>
                        <br /><br />
                        <div>
                            {
                                (content).map((v, i)=>{
                                    return (
                                        <div key={i + 'A'}>
                                            <b>{v.header}</b><br />
                                            <DescSpan key={i + 'B'} descList={v.desc}/>
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

export default MigratoryBirds;
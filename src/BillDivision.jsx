import React, { Component } from 'react';
import DescSpan from './DescSpan';
import SimpleInput from './SimpleInput';
import DescLi from './DescLi';
import './algorithm.css';

class BillDivision extends Component {

    state = {
        title: 'Bill Division',
        content: [
            {
                header: '',
                desc: [
                    "Two friends Anna and Brian, are deciding how to split the bill at a dinner.", 
                    "Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion.", 
                    "You must determine if his calculation is correct.",
                    "For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2] which costs 6.",
                    "If Brian calculates the bill correctly, Anna will pay (2 + 4)/2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4 + 6)/2 = 6. In the second case, he should refund 3 to Anna."
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
                    'Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.',
                    'bonAppetit has the following parameter(s):'
                ],
                lastDesc: [
                ],
                li: [
                    "bill: an array of integers representing the cost of each item ordered",
                    "k: an integer representing the zero-based index of the item Anna doesn't eat",
                    "b: the amount of money that Anna contributed to the bill"
                ],
                sampleTag: []
            },
            {
                header: 'Input Format',
                desc: [
                    "The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.",
                    "The second line n contains  space-separated integers bill[i] where 0 ≤ i ≤ n.",
                    "The third line contains an integer, b, the amount of money that Brian charged Anna for her share of the bill."
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
                    '2 ≤ n ≤ 100,000',
                    '0 ≤ k＜ n',
                    '0 ≤ bill[i] ≤ 10,000',
                    '0 ≤ b ≤ Σ(n-1, i=0)bill[i]',
                    'The amount of money due Anna will always be an integer'
                ],
                sampleTag: [
                    
                ]
            },
            {
                header: 'Output Format',
                desc: [
                    'If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., b[changed] - b[actual]) that Brian must refund to Anna. This will always be an integer.'
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
                    '4 1',
                    '3 10 2 9',
                    '12'
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
                    '5'
                ]
            },
            {
                header: 'Explanation 0',
                desc: [
                    "Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian.", 
                    "The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is b[actual] = 7.", 
                    "Brian charged her b[charged] = 12 for her portion of the bill.", 
                    "We print the amount Anna was overcharged, b[charged] - b[actual] = 12 - 7 = 5, on a new line."
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
                    '4 1',
                    '3 10 2 9',
                    '7'
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
                    'Bon Appetit'
                ]
            },
            {
                header: 'Explanation 1',
                desc: [
                    "Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian.", 
                    "The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is b[actual] = 7.", 
                    "Because b[actual] = b[charged] = 7, we print Bon Appetit on a new line."
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

    render() {
        const { title, desc, content, testCount, inputValue, resolve, sampleTag } = this.state;
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

export default BillDivision;
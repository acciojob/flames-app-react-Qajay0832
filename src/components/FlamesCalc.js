import React, { useState } from 'react'

const FlamesCalc = () => {
    const flamesResults = {
        0: "Siblings",
        1: "Friends",
        2: "Love",
        3: "Affection",
        4: "Marriage",
        5: "Enemy"
    };
    const [Input1, setInput1] = useState('')
    const [Input2, setInput2] = useState('')
    const [answer, setAnswer] = useState('')
    const handleInput1 = (e) => {
        setInput1(e.target.value);
    }
    const handleInput2 = (e) => {
        setInput2(e.target.value);
    }
    const Result = (one, two) => {
        let First = one.split('');
        let Second = two.split('');
        First = First.filter(e => {
            if (Second.includes(e)) {
                const index = Second.indexOf(e);
                Second.splice(index, 1);
                return false
            }
           return true
        }
        )
        return (flamesResults[(First.length + Second.length) % 6])
    }
    const Calculate = () => {
        if(!Input1 || !Input2){
            setAnswer('Please Enter valid input')
        }
        else{
            setAnswer(Result(Input1, Input2))
        }
    }
    const Clear =()=>{
        setAnswer('');
        setInput1('');
        setInput2('');
    }
    return (
        <div>
            <input type="text" data-testid="input1" value={Input1} onChange={handleInput1} />
            <input type="text" data-testid="input2" value={Input2} onChange={handleInput2} />
            <button data-testid="calculate_relationship" onClick={Calculate}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={Clear}>Clear</button>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}

export default FlamesCalc
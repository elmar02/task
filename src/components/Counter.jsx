import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)
    const incr = ()=> {
        if(number<10){
            setNumber(prev=>prev+1)
            randomizeBg()
        }
            
    }
    const decr = ()=> {
        if(number>-10){
            setNumber(prev=>prev-1)
            randomizeBg()
        }
            
    }

    const randomizeBg = ()=>{
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        console.log(red,green,blue);
        
        document.body.style.background = `rgb(${red},${green}, ${blue})`
    }

    useEffect(()=>{
        randomizeBg()
    },[])
    return (
        <div className='counter' >
            <button onClick={decr}>-</button>
            <span>{number}</span>
            <button onClick={incr}>+</button>
        </div>
    )
}

export default Counter
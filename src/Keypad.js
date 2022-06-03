import React from 'react';

const Keypad = ({result,setResult,subResult,setSubResult}) => {

   const clickHandler = (e) =>{
        let eventVal = e.target.value;
        if(eventVal == 0 && result == 0){
            return  setResult(eventVal);
        }

        if(result != 0){
            return setResult(result + eventVal);
        }
       
       setResult(eventVal);
   }
   const clickClrHandler = (e) =>{
       e.preventDefault();
       let eventVal = e.target.value;
       if(eventVal === "delete"){
        return setResult(result.slice(0,-1));
        ;
    }
       if(eventVal === "clear"){
       setResult(0);
       return;
       } 
      
       setResult(0);
       setSubResult('')
   }
   const clickOpHandler = (e) =>{
    let eventVal = e.target.value;
    setSubResult(result+eventVal);
   setResult('');
}
    return (
        <div className='keys'>
            <button value={'%'} onClick={clickHandler}>%</button>
                    <button><span>&#8730;</span></button>
                    <button>x<sup>2</sup></button>
                    <button><sup>1</sup>/<sub></sub>x</button>

                    <button value="clear" onClick={clickClrHandler}>CE</button>
                    <button value="c" onClick={clickClrHandler}>C</button>
                    <button value="delete" onClick={clickClrHandler}><i className="fa-solid fa-delete-left"></i></button>
                    <button><i className="fa-solid fa-divide"></i></button>
                    
                    <button value={7} onClick={clickHandler}>7</button>
                    <button value={8} onClick={clickHandler}>8</button>
                    <button value={9} onClick={clickHandler}>9</button>
                    <button value={'x'} onClick={clickOpHandler}><i className="fa-solid fa-x"></i></button>
                    
                    <button value={4} onClick={clickHandler}>4</button>
                    <button value={5} onClick={clickHandler}>5</button>
                    <button value={6} onClick={clickHandler}>6</button>
                    <button><i className="fa-solid fa-minus"></i></button>
                    
                    <button value={1} onClick={clickHandler}>1</button>
                    <button value={2} onClick={clickHandler}>2</button>
                    <button value={3} onClick={clickHandler}>3</button>
                    <button><i className="fa-solid fa-plus"></i></button>
                    
                    <button><i className="fa-solid fa-plus-minus"></i></button>
                    <button value={0} onClick={clickHandler}>0</button>
                    <button><b>.</b></button>
                    <button><i className="fa-solid fa-equals"></i></button>
        </div>
    );
}

export default Keypad;

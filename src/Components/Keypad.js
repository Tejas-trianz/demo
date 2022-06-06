import React from "react";

const Keypad = ({result,setResult,subResult,setSubResult}) => {

   const clickHandler = (e) =>{

       if(e.target.value){
            if(result==="0"|| result === "error"){
                setResult( e.target.value);
            }
            else{
            setResult(result+ e.target.value);
            }
           return;
        }

        let nameVal = e.target.name;
        let resValue = parseInt(result);
        // console.log(resValue);

        switch(nameVal){
            case "sqrt": setSubResult("sqrt("+ resValue +")");
                            setResult(Math.sqrt(resValue));
                            break;

            case "inverse": setSubResult(`1/(${resValue})`);
                            setResult(1/(resValue));
                            break;

            case "power": setSubResult(`pow(${resValue})`);
                            setResult(Math.pow(resValue, 2));
                            break;

            case "clear":setResult("0");
                            setSubResult("");
                            break;

            case "c": setResult("0");
                            break;

            case "negate": if(result.charAt(0) === "-"){
                                setResult(result.substring(1));
                            } else {
                                setResult("-" + result);
                            }
                            break;

            default: setResult("error");
                    setSubResult("");
        }
    };
       

//    const clearHandler = (e) =>{
//        let btnNameVal = e.target.name;
//         if(btnNameVal === "c"){
            
//             return;
//         }
       
//     };
    
   const deleteHandler = () =>{
    setResult(result.slice(0,-1));
    if(result ===''|| result.length === 1){
        setResult("0");
    }
   };

    const calculate =() =>{
        let resValue;
        try{
            resValue = eval(result).toString();
        }
        catch{
            setResult("error");
        }
        if(resValue && result !=="0"){
            setSubResult(result);
            setResult(resValue);
        }
        
    };

    return (
        <div className="keypad">
            <div className="special-keys">
                <button>MC</button>
                <button>MR</button>
                <button>M+</button>
                <button>M-</button>
                <button>MS</button>
                <button>M<sup>&#9660;</sup></button>
            </div>
            <div className="keys">
                <button value="%" onClick={clickHandler}>%</button>
                <button name="clear" onClick={clickHandler}>CE</button>
                <button name="c" onClick={clickHandler}>C</button>
                <button name="delete" onClick={deleteHandler}><i className="fa-solid fa-delete-left"></i></button>
                
                <button name="inverse" onClick={clickHandler}><sup>1</sup>/<sub></sub>x</button>
                <button name="sqrt" onClick={clickHandler} ><span>&#8730;</span></button>
                <button name="power" onClick={clickHandler}>x<sup>2</sup></button>  
                <button value="/" onClick={clickHandler}>&divide;</button>
                
                <button value="7" onClick={clickHandler}>7</button>
                <button value="8" onClick={clickHandler}>8</button>
                <button value="9" onClick={clickHandler}>9</button>
                <button value="*" onClick={clickHandler}>x</button>
                
                <button value="4" onClick={clickHandler}>4</button>
                <button value="5" onClick={clickHandler}>5</button>
                <button value="6" onClick={clickHandler}>6</button>
                <button value={"-"} onClick={clickHandler}>&ndash;</button>
                
                <button value="1" onClick={clickHandler}>1</button>
                <button value="2" onClick={clickHandler}>2</button>
                <button value="3" onClick={clickHandler}>3</button>
                <button value="+" onClick={clickHandler}>+</button>
                
                <button name="negate" onClick={clickHandler}>+/-</button>
                <button value="0" onClick={clickHandler}>0</button>
                <button value="." onClick={clickHandler}><b>.</b></button>

                <button name="eval" onClick={calculate} id="result">=</button>
            </div>
        </div>
    );
}

export default Keypad;
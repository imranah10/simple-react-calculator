import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import Appname from "./components/Appname";
import { useState } from "react";


function App() {
  const[inpval,setInpval]=useState('')
  const onbtnclick=(buttonText)=>{
    if (buttonText==='C'){
      setInpval('')
    }
    else if(buttonText==='='){
      const result=eval(inpval)
      setInpval(result)
    }
    else{
      const DisValue=inpval+buttonText;
      setInpval(DisValue)
    }


  }
  return (
    <div className={styles.calculator}>
      <Appname />
      <Display dispval={inpval} />
      <BtnContainer onbtnclick={onbtnclick} />
    </div>
  );
}

export default App;

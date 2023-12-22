import styles from './BtnContainer.module.css'
const BtnContainer=({onbtnclick})=>{
  const BtnName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
        <div className={styles.BtnGroup}>
          {BtnName.map(btns=>  <input className={styles.Button} type="button" value={btns} onClick={()=> onbtnclick(btns)}/>)}

      </div>
    )
}
export default BtnContainer;
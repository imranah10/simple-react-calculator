import styles from './Display.module.css'
const Display=({dispval})=>{
    return(
        <input className={styles.display} type="text" value={dispval}readOnly />
    )
}
export default Display;
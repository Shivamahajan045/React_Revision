import styles from "./Button.module.css";
const Button = () =>{
    return (
        <div className={styles["btn-container"]}>
        <button className={styles.button}>Click me!</button>
        </div>
    )
}

export default Button;
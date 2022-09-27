import React from "react"
import s from "../key/key.module.css"

export const Key = (props) => {
    let result;

    let isFloat = (n) => {
        return n === +n && n !== (n | 0);
    }

    let add = () => {
        let keyValue = props.keyValue;
        console.log(keyValue);

        if (props.current == "0") {
            props.setCurrent(keyValue);
        } else {
            switch (keyValue) {
                case "0" :
                case "1" :
                case "2" :
                case "3" :
                case "4" :
                case "5" :
                case "6" :
                case "7" :
                case "8" :
                case "9" :
                    props.setCurrent(props.current + keyValue);
                    break;
                case "." :
                    if (!props.isPointer) {
                        props.setCurrent(props.current + keyValue);
                        props.setPointer(true);
                    }
                    break;
                case "AC" :
                    props.setCurrent("0");
                    props.setPrev("0");
                    props.setPointer(false);
                    props.setAction(null);
                    break;
                //  Глючит с сипользованием равно =
                case "C" :
                    props.setCurrent("0");
                    props.setPointer(false);
                    break;
                case "+" :
                    props.setPrev(props.current);
                    props.setCurrent("0");
                    props.setAction("+");
                    break;
                case "-" :
                    props.setPrev(props.current);
                    props.setCurrent("0");
                    props.setAction("-");
                    break;
                case "*" :
                    props.setPrev(props.current);
                    props.setCurrent("0");
                    props.setAction("*");
                    break;
                case "/" :
                    props.setPrev(props.current);
                    props.setCurrent("0");
                    props.setAction("/");
                    break;
                case "%" :
                    props.setPrev(props.current);
                    props.setCurrent("0");
                    props.setAction("%");
                    break;
                case "=" :
                    if ((props.current === "0") && (props.action === "/")) {
                        props.setCurrent("Error: divided by Zero");
                        break;
                    } else {
                        switch (props.action) {
                            case "+":
                                result = Number(props.prev) + Number(props.current);
                                props.setCurrent(result);
                                console.log("Equal: " + result);
                                break;
                            case "-":
                                result = Number(props.prev) - Number(props.current);
                                props.setCurrent(result);
                                console.log("Equal: " + result);
                                break;
                            case "*":
                                result = Number(props.prev) * Number(props.current);
                                props.setCurrent(result);
                                console.log("Equal: " + result);
                                break;
                            case "/":
                                result = Number(props.prev) / Number(props.current);
                                props.setCurrent(result);
                                console.log("Equal: " + result);
                                break;
                            case "%":
                                result = Number(props.prev / 100) * Number(props.current);
                                props.setCurrent(result);
                                console.log("Equal: " + result);
                                break;
                            default:
                                props.setCurrent("0");
                                console.log("Equal, default case, set Zero");
                                break;
                        }
                    }
                    break;
                case "-1" :
                    let value = Number(props.current) * (-1)
                    props.setCurrent(String(value));
                    console.log("Set negative");
                    break;
                // Не работает глючит с точкой
                /*case "<" :
                    // не работает с дробными числами, не учитывает точку
                    if (props.action !== null) {
                        break
                    }
                    let a = props.current.substr(0, props.current.length - 1);
                    props.setCurrent(a);
                    console.log("delete last symbol");
                    break;*/
                default:
                    console.log("main *case* default");
                    break;
            }
        }


    }

    return (
        <div className={s.col}>
            <button className={s.key} value={props.keyValue} onClick={add}>{props.keyValue}</button>
        </div>
    )
}
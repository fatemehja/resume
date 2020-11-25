import React, { Component } from 'react';
import { MdExpandMore } from 'react-icons/md';

//export default class DownIcon extends Component 
const DownIcon = (props) => {
//    render() {
       return (
            <div  style = {{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "-35px",
                    transform: "translateY(-70px)",
                }}
                onClick = {props.onClick} 
            >
                <div style = {{
                    maxWidth : "30px",
                    verticalAlign: "bottom",
                    fontSize: "4vh",
                    margin: "0",
                    padding: "0"
                }}>
                    <MdExpandMore />
                </div>
            </div>
        
        )
    }
//     }
// }
export default DownIcon;
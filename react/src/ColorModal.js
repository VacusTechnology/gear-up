import React from 'react';


export default class ColorModal extends React.Component {
    constructor(props){
        super(props);

        this.colorList = [ '000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333', 
                           '660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 
                           'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66',
                           '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF' ];
   
    }

    componentDidMount() {
        var picker = document.querySelector(".color-picker-container .color-picker");
        picker.style.setProperty('visibility','hidden');
        console.log("HIDDEN");
    }



    render(){
        const colors = this.colorList.map((color,index)=> {
            return (
                <li key={index} class={index}></li>
            );
        });

        return(
            <div class="color-picker-container">
                <p>Choose color (# hex)</p>
                
                <div class="holder-wrapper">
                    <input type="text" name="custom_color" placeholder="#FFFFFF" id="pickcolor" class="call-picker"></input>
                    <div class="color-holder"></div>
                </div>    

                <div class="color-picker" id="color-picker">
                    {colors }
                </div>
            </div>
        );
    }

}
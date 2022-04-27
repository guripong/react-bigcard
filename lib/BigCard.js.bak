import React from "react";
import './BigCard.css';

const BigCard = React.forwardRef(({title,style,...props},ref)=>{
    let defaultStyle={width:'calc(100% - 30px)',backgroundColor:'white',marginTop:'15px',marginBottom:'15px',marginLeft:'15px',borderRadius:'12px'
    ,boxShadow:'0 4px 25px 0 rgba(0,0,0,.1)',padding:'1.5rem',boxSizing:'border-box',position:'relative'}

    for(let key in style){
        defaultStyle[key] = style[key];
    };

    const [hide,set_hide] = React.useState(false);

    return (<div className="BigCard" ref={ref}>
        <div style={defaultStyle}>
            <div className="hidecontents"style={{position:'absolute',top:'1.5rem',right:'1.5rem'}} onClick={()=>{
                set_hide(!hide);
            }}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{height:'25px',cursor:'pointer',
                        transform:hide?'rotate(180deg)':'',
                    transition:'transform .2s ease-in-out'}}
                        fill="currentColor"
                        viewBox="0 0 284.929 284.929"
                        xmlSpace="preserve">
                    <g>
                        <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                            L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                            c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                            c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
                    </g>
                </svg>

            </div>
            {title&&
                    <div style={{width:'100%',textAlign:'left',fontSize:'20px',color:'#333'}}>
                        {title()}
                    </div>
            }

            <div style={{display:hide?'none':'block',width:'100%'}}>
                {props.children}
            </div>

        </div>
    </div>)
})

export default BigCard;

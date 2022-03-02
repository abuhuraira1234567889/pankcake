import React,{useState} from 'react';
import "./detail.css"





const faq = [
    {
        id:1,
        question: "Eligible trading pairs",
        answere: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus delectus hic nisi quae culpa nesciunt doloribus, magni facere quasi a esse odio possimus laboriosam et sit, nemo quo magnam?"

    },
    {
        id:2,
        question: "Eligible trading pairs",
        answere: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus delectus hic nisi quae culpa nesciunt doloribus, magni facere quasi a esse odio possimus laboriosam et sit, nemo quo magnam?"

    },
    {
        id:3,
        question: "Eligible trading pairs",
        answere: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus delectus hic nisi quae culpa nesciunt doloribus, magni facere quasi a esse odio possimus laboriosam et sit, nemo quo magnam?"

    },
    {
        id:4,
        question: "Eligible trading pairs",
        answere: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus delectus hic nisi quae culpa nesciunt doloribus, magni facere quasi a esse odio possimus laboriosam et sit, nemo quo magnam?"

    },
    {
        id:5,
        question: "Eligible trading pairs",
        answere: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus delectus hic nisi quae culpa nesciunt doloribus, magni facere quasi a esse odio possimus laboriosam et sit, nemo quo magnam?"

    }
]

const Detail = () => {
    const [show,setShow]=useState(0);
    function showData(key){
        show===key? setShow(0):setShow(key)
        

    }
    return (

        <>
            <div className="detail-wrapper">
                <div className="container">
                    <div className="detail-head">
                        <h1>Detail</h1>
                    </div>
                    {
                        faq.map((items, index) => {
                            return(
                                <div className="detail-content">
                                <div className="detail-body">
                                    <h5>{items.question}</h5>
                                    <p onClick={e=>showData(items.id)}>{show === items.id? "Hide":"Detail"}</p>
                                </div>
                                {
                                    show===items.id && 
                                    <div className="detail-ans">
                                    <p>{items.answere}</p>
                                </div>

                                }
                                

                            </div>


                            )
                           

                        })
                    }




                </div>
            </div>



        </>
    );
}


export default Detail;
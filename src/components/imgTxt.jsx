import { useEffect, useState } from "react";

export default function ImgTxt({ imgArray, setImgIndex, imgIndex }) {

    const [dotsArray, setDotsArray] = useState([])



    useEffect(() => {

        setDotsArray(imgArray.map((dot, index) => (imgIndex == index) ? ({ initialState: true }) : ({ initialState: false })))

    }, [imgIndex])


    // 
    function setToThisImg(index, event) {

        console.log(index);

        setImgIndex(index)

        setDotsArray(dotsArray.map((dot, indexOfDot) => (index == indexOfDot) ? ({ initialState: true }) : ({ initialState: false })))

    }

    return (
        <>
            <div>
                <p>
                    {imgArray[imgIndex].name}
                </p>
            </div>

            <ul>
                {
                    dotsArray.map((dot, index) =>
                        (dot.initialState == true) ?
                            <li key={index} ><span className="on"></span></li> :
                            <li key={index} onClick={() => setToThisImg(index)}><span></span></li>
                    )
                }
            </ul>
        </>
    )
}

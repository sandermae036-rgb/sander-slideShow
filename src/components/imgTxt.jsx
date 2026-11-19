import { useEffect, useState } from "react";

export default function ImgTxt({ imgArray, setImgIndex, imgIndex }) {

    const [dotsArray, setDotsArray] = useState([])

    useEffect(() => {

        setDotsArray(imgArray.map(() => ({ initialState: false })))

    }, [])

    console.log(dotsArray);


    function setToThisImg(index, event) {
        setImgIndex(index)

        setDotsArray(dotsArray.map((dot, indexOfDot) => (index === indexOfDot) ? { initialState: true } : { initialState: false }))

    }

    return (
        <>
            <div>
                <p>
                    {""}
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

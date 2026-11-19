import { useEffect, useState } from "react";

export default function ImgTxt({ imgArray, setImgIndex, imgIndex }) {

    const [dotsArray, setDotsArray] = useState([])



    useEffect(() => {

        setDotsArray(imgArray.map((dot, index) => (imgIndex == index) ? ({ initialState: true }) : ({ initialState: false })))

    }, [imgIndex])


    // 
    function setToThisImg(index, event) {

        setImgIndex(index)

        setDotsArray(dotsArray.map((dot, indexOfDot) => (index == indexOfDot) ? ({ initialState: true }) : ({ initialState: false })))

    }

    return (
        <>
            <div className="dotWrapper">
                <ul>
                    {
                        dotsArray.map((dot, index) =>
                            (dot.initialState == true) ?
                                <li key={index}
                                    className="dot">
                                    <span className="inner-dot on"></span>
                                </li>

                                :

                                <li key={index}
                                    className="dot"
                                    onClick={() => setToThisImg(index)}>
                                    <span className="inner-dot"></span>
                                </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

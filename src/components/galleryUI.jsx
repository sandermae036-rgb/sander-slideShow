import { useState } from "react";
import Image from "./image";
import BackArrow from "./backArrow";
import FrontArrow from "./FrontArrow";
import ImgTxt from "./imgTxt";

export default function GalleryUI() {

    const [imgArray, setImgArray] = useState([
        { name: "img1", src: "street_01.jpg" },
        { name: "img2", src: "street_02.jpg" },
        { name: "img3", src: "street_03.jpg" }
    ])


    const [imgIndex, setImgIndex] = useState(0)

    return (
        <>
            <section>
                <Image imgArray={imgArray} imgIndex={imgIndex} />

                <BackArrow imgIndex={imgIndex} setImgIndex={setImgIndex} imgArray={imgArray} />

                <FrontArrow imgIndex={imgIndex} setImgIndex={setImgIndex} imgArray={imgArray} />

                <ImgTxt imgArray={imgArray} setImgIndex={setImgIndex} imgIndex={imgIndex} />

            </section>
        </>
    )
}

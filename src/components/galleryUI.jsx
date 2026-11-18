import { useState } from "react";
import Image from "./image";
import BackArrow from "./backArrow";
import FrontArrow from "./FrontArrow";

export default function GalleryUI() {

    const [imgArray, setImgArray] = useState([{ name: "img1", src: "street_01.jpg" }, { name: "img2", src: "street_02.jpg" }])
    const [imgIndex, setImgIndex] = useState(1)
    console.log(imgIndex);

    return (
        <>
            <section>
                <Image imgArray={imgArray} imgIndex={imgIndex} />

                <BackArrow imgIndex={imgIndex} setImgIndex={setImgIndex} imgArray={imgArray} />

                <FrontArrow imgIndex={imgIndex} setImgIndex={setImgIndex} imgArray={imgArray} />

            </section>
        </>
    )
}

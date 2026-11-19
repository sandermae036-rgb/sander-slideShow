import { FaArrowLeft } from "react-icons/fa6"

export default function BackArrow({ imgIndex, setImgIndex, imgArray }) {

    function goBackward() {

        if (imgIndex == 1) {
            setImgIndex(imgArray.length)
        } else {
            setImgIndex(imgIndex - 1)
        }
    }

    return (
        <>
            <figure onClick={goBackward}>
                <FaArrowLeft />
            </figure>
        </>
    )
}

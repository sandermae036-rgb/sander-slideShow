import { FaArrowLeft } from "react-icons/fa6"

export default function BackArrow({ imgIndex, setImgIndex, imgArray }) {

    function goBackward() {

        if (imgIndex == 0) {
            setImgIndex(imgArray.length - 1)
        } else {
            setImgIndex(imgIndex - 1)
        }
    }

    return (
        <>
            <figure onClick={goBackward} className='gallery__right'>
                <FaArrowLeft />
            </figure>
        </>
    )
}

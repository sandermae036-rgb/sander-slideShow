import { FaArrowLeft } from 'react-icons/fa6'

export default function FrontArrow({ imgIndex, setImgIndex, imgArray }) {

    function goForward() {

        if (imgIndex == imgArray.length) {
            setImgIndex(1)
        } else {
            setImgIndex(imgIndex + 1)
        }
    }

    return (
        <>
            <figure onClick={goForward}>
                <FaArrowLeft />
            </figure>
        </>
    )
}

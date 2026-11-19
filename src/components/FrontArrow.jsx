import { FaArrowRight } from 'react-icons/fa6'

export default function FrontArrow({ imgIndex, setImgIndex, imgArray }) {

    function goForward() {

        if (imgIndex == imgArray.length - 1) {
            setImgIndex(0)
        } else {
            setImgIndex(imgIndex + 1)
        }
    }

    return (
        <>
            <figure onClick={goForward} className='gallery__left'>
                <FaArrowRight />
            </figure>
        </>
    )
}

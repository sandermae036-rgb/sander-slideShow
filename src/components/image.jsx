

export default function Image({ imgIndex, imgArray }) {

    const img = imgIndex

    return (
        <>
            <div className="gallery__content">
                <figure className="gallery__img">
                    {/* //original code
                    <img className="gallery__img" src={"../src/assets/" + imgArray[img].src} alt={""} />
                    */}
                    {/* //copilot code */}
                    <img key={imgIndex} className="gallery__img" src={"../src/assets/" + imgArray[img].src} alt={""} />
                </figure>


                <h2 className="gallery__img">
                    {imgArray[imgIndex].name}
                </h2>

            </div>
        </>
    )
}

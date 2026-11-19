

export default function Image({ imgIndex, imgArray }) {

    const img = imgIndex

    return (
        <>
            <figure>
                <img src={"../src/assets/" + imgArray[img].src} alt={""} />
            </figure>
        </>
    )
}

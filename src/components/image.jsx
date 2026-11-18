

export default function Image({ imgIndex, imgArray }) {

    const img = imgIndex - 1

    return (
        <>
            <figure>
                <img src={"../src/assets/" + imgArray[img].src} alt={""} />
            </figure>
        </>
    )
}

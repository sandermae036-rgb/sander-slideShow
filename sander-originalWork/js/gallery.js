let galleryDom = document.querySelectorAll(".gallery")

galleryDom.forEach((gallery) => {

    // Variabels for DOM elements
    const gallery__left = gallery.querySelector(".gallery__left")   // venstre pil
    const gallery__right = gallery.querySelector(".gallery__right") // højre pil
    let ulDom = gallery.querySelector(".gallery__ul")               // container for slides
    let liDom = ulDom.children
    const dotWrapperDom = gallery.querySelector(".dotWrapper")

    // Variabels 
    let totalIndex = liDom.length
    let currentIndex = 0
    let isAnimating = false;    // bruges til at forhindre spam klik under animation
    const time = ".5s"

    // Event listeners på pile
    gallery__left.addEventListener("click", animateLeft)
    gallery__right.addEventListener("click", animateRight)

    // -------------------
    // ANIMATION LEFT (næste slide)
    // -------------------
    function animateLeft() {
        // if an animation is active, stop
        if (isAnimating) return
        isAnimating = true;

        ulDom.style.transition = `transform ${time} ease-in-out`;
        ulDom.style.transform = `translateX(-${100}%)`;
        ulDom.addEventListener("transitionend", (event) => {
            handleAnimationLeft()
            isAnimating = false;

        }, { once: true })

        currentIndex = countCurrentSlide(currentIndex, "left")
        updateActiveElementClass(dotsArray, currentIndex)
    }
    // Moves first slide to last (infinite loop effect)
    function handleAnimationLeft() {
        shiftFirstToLast()
        ulDom.style.transition = ""
        ulDom.style.transform = ""
    }

    function countCurrentSlide(currentIndex, direction) {

        // Go forward (left click)
        if (direction === "left") {
            // If we are on the last → jump to the first
            if (currentIndex === totalIndex - 1) {
                return 0;
            }
            // Otherwise +1
            return currentIndex + 1;
        }

        // Go back (right click)
        if (direction === "right") {
            // If we are on first → jump to last
            if (currentIndex === 0) {
                return totalIndex - 1;
            }
            // Otherwise -1
            return currentIndex - 1;
        }
    }
    // -------------------
    // ANIMATION RIGHT (previous slide)
    // -------------------
    function animateRight() {

        if (isAnimating) return
        isAnimating = true

        shiftLastToFirst()
        ulDom.style.transition = "none"; // Disable transition for instant position change
        ulDom.style.transform = "translateX(-100%)"; // Move to -100% instantly
        ulDom.offsetHeight // force the browser to refresh

        ulDom.style.transition = `transform ${time} ease-in-out`; // Re-enable animation
        ulDom.style.transform = "translateX(0)"; // Animate back to 0

        // When the animation end
        ulDom.addEventListener("transitionend", () => {
            ulDom.style.transition = "";
            ulDom.style.transform = "";
            isAnimating = false

        }, { once: true });
        currentIndex = countCurrentSlide(currentIndex, "right")
        updateActiveElementClass(dotsArray, currentIndex)
    }

    // -------------------
    // SHIFT DOM ELEMENTS
    // -------------------

    // Moves first slide to the end
    function shiftFirstToLast() {
        const firstLi = ulDom.firstElementChild
        ulDom.appendChild(firstLi)
    }
    // Moves last slide to the beginning
    function shiftLastToFirst() {
        const lastLi = ulDom.lastElementChild
        ulDom.prepend(lastLi)
    }

    // -------------------
    // DOTS
    // -------------------
    const { dotsArray, dotsWrapper } = createDots(totalIndex)
    dotWrapperDom.appendChild(dotsWrapper)

    dotsArray.forEach((dot, index) => {
        dot.addEventListener("click", () => handleDotsClick(index))

    })


    function handleDotsClick(index) {
        let difference = currentIndex - index
        let direction = 0

        currentIndex = index

        if (difference < 0) {
            direction = "left"
        }
        else if (difference > 0) {
            direction = "right"
        }

        let steps = Math.abs(difference)

        let move = 100 * steps

        console.log(move);

        if (direction === "right") {
            // Move around slides
            for (let index = 1; index <= steps; index++) {
                shiftLastToFirst();
            }
            // Jump position
            ulDom.style.transform = `translateX(-${move}%)`;
            // Tving browser til at opdatere layout (reflow)
            ulDom.offsetHeight

            // Animate back
            ulDom.style.transition = `transform ${time} ease-in-out`;
            ulDom.style.transform = "translateX(0)";


            // When the animation is finish
            ulDom.addEventListener("transitionend", () => {
                //isAnimating = false;
                ulDom.style.transition = "";
                ulDom.style.transform = "";
            }, { once: true });

        }
        else if (direction === "left") {
            // Move multiple slides visually
            ulDom.style.transition = `transform ${time} ease-in-out`;
            ulDom.style.transform = `translateX(-${move}%)`;

            ulDom.addEventListener("transitionend", () => {
                for (let index = 1; index <= steps; index++) {
                    shiftFirstToLast()
                }
                ulDom.style = ""
            }, { once: true })
        }
        updateActiveElementClass(dotsArray, currentIndex)

    }

    function updateActiveElementClass(dotsArray, currentIndex) {
        dotsArray.forEach((dot, index) => {
            if (currentIndex == index) {
                dot.classList.add("active")
            }
            else {
                dot.classList.remove("active")
            }

        })
    }

    function createDots(numberOfDots) {
        let dotsArray = []
        const dotsWrapper = document.createElement("ul")


        for (let index = 0; index < numberOfDots; index++) {
            // span
            let span = document.createElement("span")
            span.classList.add("inner-dot")
            let dot = document.createElement("li")
            dot.classList.add("dot")
            // first dot is aktiv
            if (index === 0) {
                dot.classList.add("active")
            }

            dot.appendChild(span)
            dotsWrapper.appendChild(dot)

            dotsArray.push(dot)

        }

        const myObj = {
            dotsArray,
            dotsWrapper
        }
        return myObj

    }

    // -------------------
    // TOUCH EVENTS
    // -------------------
    touchEvent();

    function touchEvent() {


        let startX = 0; // Stores the X position where the touch starts
        const swipeThreshold = 50; // Minimum swipe distance required to trigger navigation

        // Detect when the user touches the screen
        ulDom.addEventListener("touchstart", (event) => {
            startX = event.touches[0].clientX; // Save the starting horizontal touch position
        });

        // Detect when the user lifts their finger
        ulDom.addEventListener("touchend", (event) => {

            const endX = event.changedTouches[0].clientX; // Get the final horizontal touch position
            const diff = endX - startX; // Calculate swipe distance

            // Check if swipe distance exceeds the threshold
            if (Math.abs(diff) > swipeThreshold) {

                // Swipe left
                if (diff < 0) {
                    animateLeft();
                }

                // Swipe right
                else {
                    animateRight();
                }
            }
        });
    }

})
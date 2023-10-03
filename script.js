const sildes = document.querySelectorAll(".slide");

let counter = 0;
sildes.forEach((slide, index) => {
    slide.style.left = `${index*100}%`;
})

const slideImage = () => {
    sildes.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

const goPrev = () => {

    counter--;
    slideImage()

}

const goNext = () => {
    if (counter < (sildes.length - 1)) {
        counter++;
    } else {
        counter = 0;
    }


    slideImage();

}
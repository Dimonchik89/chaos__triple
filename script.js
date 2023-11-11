
const dotA = document.querySelector('div[data-name="a"]');
const dotB = document.querySelector('div[data-name="b"]');
const dotC = document.querySelector('div[data-name="c"]');
const container = document.querySelector(".container");
const fullWidth = container.offsetWidth;
const fullHeight = container.offsetHeight;

const customDot = `<div class="dot" data-id="handle" style="top: 300px; left: 300px"></div>`
container.insertAdjacentHTML("beforeend", customDot)



const dotATop = dotA.offsetTop;
const dotALeft = dotA.offsetLeft;

const dotBTop = dotB.offsetTop;
const dotBLeft = dotB.offsetLeft;

const dotCTop = dotC.offsetTop;
const dotCLeft = dotC.offsetLeft;



function createMarkup() {
    let newDotTop = +document.querySelector('.dot[data-id="handle"]').offsetTop;
    let newDotLeft = +document.querySelector('.dot[data-id="handle"]').offsetLeft;



    for(let i = 0; i < 10000; i++) {
        const num = +Math.floor(Math.random() * 3 + 1)

        if(num === 1) {

            const newDotTopPosition = ((dotBTop + newDotTop) / 2);
            const newDotLefPosition = ((newDotLeft - dotBLeft) / 2);

            console.log("newDotTopPosition2", newDotTopPosition);
            console.log("newDotLefPosition2", newDotLefPosition);


            const newDot = `<div class="dot" data-id="handle" style="top: ${newDotTopPosition}px; left: ${newDotLefPosition}px"></div>`;
            container.insertAdjacentHTML("beforeend", newDot)
            newDotTop = newDotTopPosition;
            newDotLeft = newDotLefPosition;
            
        } else if(num === 2) {

            const newDotTopPosition = ((newDotTop - dotATop)/ 2);
            const newDotLefPosition = ((dotALeft + newDotLeft) / 2 );

            console.log("newDotTopPosition1", newDotTopPosition, dotATop, newDotTop);
            console.log("newDotLefPosition1", newDotLefPosition, dotALeft, newDotLeft);

            const newDot = `<div class="dot" data-id="handle" style="top: ${newDotTopPosition}px; left: ${newDotLefPosition}px"></div>`;
            container.insertAdjacentHTML("beforeend", newDot)

            newDotTop = newDotTopPosition;
            newDotLeft = newDotLefPosition;

        } else {
            const newDotTopPosition = ((dotCTop + newDotTop) / 2);
            const newDotLefPosition = ((dotCLeft + newDotLeft) / 2);

            console.log("newDotTopPosition3", newDotTopPosition);
            console.log("newDotLefPosition3", newDotLefPosition);


            const newDot = `<div class="dot" data-id="handle" style="top: ${newDotTopPosition}px; left: ${newDotLefPosition}px"></div>`;
            container.insertAdjacentHTML("beforeend", newDot)
            newDotTop = newDotTopPosition;
            newDotLeft = newDotLefPosition;
        }
    }
}

createMarkup()
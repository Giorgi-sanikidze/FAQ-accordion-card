let accordion = document.querySelectorAll(".accordion");
let answers = document.querySelectorAll(".answer");



    accordion.forEach((item) => {
        const question = item.querySelector(".question")
        const answer = item.querySelector(".answer");
        const image = item.querySelector(".image");



        question.addEventListener("click", () => {
            if (answer.style.height == '0px' || answer.style.height == 0) {
                console.log(answer.style.height)
                answer.style.height = '100px';
                answer.style.overflow = 'scroll'
                question.style.fontWeight = 'bold'
            } else {
                answer.style.height = 0;
                answer.style.overflow = 'hidden'

                question.style.fontWeight = 'normal'
            }


            if (image.style.rotate === "0deg") {
                image.style.rotate = "180deg";
            }
            else {
                image.style.rotate = "0deg";
            }

        })



        image.addEventListener("click", () => {
            if (answer.style.display == "block") {
                answer.style.display = "none";
                question.style.fontWeight = 'normal'
            } else {
                answer.style.display = "block";
                question.style.fontWeight = 'bold'
            }


            if (image.style.rotate === "0deg") {
                image.style.rotate = "180deg";
            }
            else {
                image.style.rotate = "0deg";
            }
        
        })
    })







cursor = document.querySelector("#cursor")
cursorblur = document.querySelector("#cursorblur")

document.addEventListener("mousemove", function (dets) {

    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursorblur.style.top = dets.y-160 + "px"
    cursorblur.style.left = dets.x-160 + "px"
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.3,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top-25%",
        end: "top -70%",
        
        scrub: 2

    }
})
window.addEventListener("load", function () {

    //initialize mobile variable
    let isMobile;

    if (window.innerWidth < 607) {
        isMobile = true;
    } else {
        isMobile = false;
    }



    //scroll page to 0 0 on reload
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }



    // desktop hovering selection
    document.querySelectorAll(".projectList > li").forEach(function (projectLinks, projectLinksIndex) {
        document.querySelectorAll(".projectBlock").forEach(function (projectBlocks, projectBlocksIndex, projectBlocksArray) {

            //start on a random project
            let randomNumber = Math.floor(Math.random() * projectBlocksArray.length);
            document.querySelector("#projectContainer").scrollTo({
                left: projectBlocksArray[randomNumber].getBoundingClientRect().left + document.querySelector("#projectContainer").scrollLeft
            })



            function scrollToProject() {
                if (projectBlocksIndex == projectLinksIndex) {
                    document.querySelector("#projectContainer").scrollTo({
                        left: projectBlocks.getBoundingClientRect().left + document.querySelector("#projectContainer").scrollLeft,
                        behavior: "smooth",
                    })
                }
            }

            if (!isMobile) {
                projectLinks.addEventListener("mouseenter", function () {
                    scrollToProject();
                })
            }

            if (isMobile) {
                projectLinks.addEventListener("click", function () {
                    scrollToProject();
                })
            }
        })
    })



    //end of load function
})

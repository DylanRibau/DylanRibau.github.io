function updateTimelineBar() {
    const timelineContainer = document.querySelector(".timeline-container");
    const timelineBar = document.querySelector(".timeline-bar");
    const timelineItems = document.querySelectorAll(".timeline-item");

    if (timelineContainer && timelineBar && timelineItems) {
        const itemStyle = window.getComputedStyle(timelineItems[0]);
        const marginLeft = parseFloat(itemStyle.marginLeft);
        const marginRight = parseFloat(itemStyle.marginRight);
        const totalMargin = marginLeft + marginRight;

        const totalWidth = [...timelineItems].reduce((acc, item) => acc + item.offsetWidth + totalMargin, 0);

        timelineBar.style.width = `${totalWidth}px`;
    }
}

window.addEventListener("load", updateTimelineBar);
window.addEventListener("resize", updateTimelineBar);

document.addEventListener("DOMContentLoaded", function () {
    const experienceContainer = document.querySelector(".timeline-container");

    if (experienceContainer) {
        experienceContainer.addEventListener("wheel", function (event) {
            event.preventDefault();
            experienceContainer.scrollBy({
                left: event.deltaY * 1.3,
                behavior: "smooth" 
            });
        });
    }
});

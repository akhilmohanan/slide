let index = 1;
const MAX_PAGE = 2
const MIN_PAGE = 1
const animationNameList = {
    slidein: 'slidein',
    slideforward: 'slideforward',
    slidebackward: 'slidebackward'
};
const arrowBack = document.getElementById('BackArrow');
const presentaionContent = document.getElementById('PresentaionContent');
const presentaionInitialPage = document.getElementById(`page${index}`);
const presentaionProgress = document.getElementById('presentaionProgress');
setProgress();

function getPage(pageIndex) {
    return document.getElementById(`page${pageIndex}`);
}

function setProgress() {
    presentaionProgress.style.width = `${(index / MAX_PAGE) * 100}%`;
}

arrowBack.addEventListener('click', (event) => {
    if (index === MIN_PAGE) { return }
    index--;
    presentaionContent.classList.add('slidebackward');
});

const arrowForward = document.getElementById('ForwardArrow');
arrowForward.addEventListener('click', (event) => {
    if (index === MAX_PAGE) { return }
    index++;
    presentaionContent.classList.add('slideforward');
});

presentaionContent.addEventListener("webkitAnimationEnd", (event) => {
    if (event.animationName === animationNameList.slideforward) {
        presentaionContent.classList.remove('slideforward');
        const previousPage = getPage(index - 1)
        const nextpage = getPage(index);
        previousPage.classList.remove('show');
        nextpage.classList.add('show', 'slidein');
        setProgress()
    } else if (event.animationName === animationNameList.slidebackward) {
        presentaionContent.classList.remove('slidebackward');
        const previousPage = getPage(index + 1)
        const nextpage = getPage(index);
        previousPage.classList.remove('show');
        nextpage.classList.add('show', 'slidein');
        setProgress();
    }
    
});


function playYesButton(){
    // step 1 :- valetine's day hidden whilw click yes
    let hideTitle = document.getElementById('captionSection');
    hideTitle.classList.add('hidden');

    // step 2 :- antik celebration open and play
    let openVideo = document.getElementById('forYes');
    openVideo.classList.remove('hidden');

    // agree Button enable
    let agreeButton = document.getElementById('agreeButton');
    agreeButton.classList.remove('hidden');
}

function playNotYesButton(){
    // step 1 :- valetine's day hidden while click No
    let hideTitle = document.getElementById('captionSection');
    hideTitle.classList.add('hidden');

    // step 2 :- Animation open and play
    let openVideo = document.getElementById('notYes');
    openVideo.classList.remove('hidden');

    // agree Button enable
    let agreeButton = document.getElementById('agreeButton');
    agreeButton.classList.remove('hidden');
}
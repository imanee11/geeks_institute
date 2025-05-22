let form = document.getElementById('libform')
let story = document.getElementById('story')

//& bonus
let shuffleButton = document.getElementById('shuffle-button')
let stories = []
let index = 0



form.addEventListener('submit', function (event) {
    event.preventDefault();

    // get values
    let noun = document.getElementById('noun').value.trim();
    let adjective = document.getElementById('adjective').value.trim();
    let person = document.getElementById('person').value.trim();
    let verb = document.getElementById('verb').value.trim();
    let place = document.getElementById('place').value.trim();

    // check if all filled
    if (!noun || !adjective || !person || !verb || !place) {
        alert('pls fill all the fields!!');
        return
    }

    // write a story
    // let storyText = `${person} went to the ${place} with a ${adjective} ${noun} There they decided to ${verb} all day long!`
    // story.textContent = storyText

    stories = [
        `${person} went to the ${place} with a ${adjective} ${noun}. They decided to ${verb} all day!`,
        `In ${place}, ${person} found a ${adjective} ${noun} and wanted to ${verb} right away!`,
        `Can you believe ${person} likes to ${verb} with a ${adjective} ${noun} in ${place}?`
    ];

    index = 0;// start from first story
    story.textContent = stories[index]
});

//& bonus
shuffleButton.addEventListener('click', function () {
    if (stories.length === 0) {
        alert('submit the form first');
        return
    }

    // get random story
    index ++
    if (index >= stories.length) {
        index = 0
    }
    
    story.textContent = stories[index]
})
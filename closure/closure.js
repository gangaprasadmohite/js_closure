//1
function nonsense(string) {
    var blab = function() {
        alert(string);
    };
    blab();
}

//2
function nonsense(string) {
    var blab = function() {
        alert(string);
    };
    setTimeout(blab, 2000);
}

//3
function nonsense(string) {
    var blab = function() {
        alert(string);
    };
    return blab;
}

const blabLater = nonsense("what's that?");
const blabAgainLater = nonsense("What was that again?");
blabLater(); // 
blabAgainLater();

//4
function lastNameTrier(firstName) {
    function innerFunction(lastName) {
        console.log(`${firstName} ${lastName}`);
    }
    return innerFunction;
}

var nameFirst = lastNameTrier("Gangaprasad");
var fullName = nameFirst("Mohite");

//5
function storyWriter() {
    let story = "";
    const writerMethod = {
        addWords : (storyLine) => {story += storyLine; console.log(story)},
        erase : () => {story = ""; console.log(story);},
    }
    return writerMethod;
}

var storyOfEthics = storyWriter();
storyOfEthics.addWords("A woman politician was caught on camera stealing cosmetics. ");
storyOfEthics.addWords("The drugstore's security personnel called the police and she was arrested. ");
storyOfEthics.addWords("The charges were dropped when she said she would sue for false arrest. ");
storyOfEthics.addWords("The drugstore did not want negative publicity to incite her supporters. ");
storyOfEthics.addWords("25 years later a girl in law school burst into tears in an Ethics and Law class. ");
storyOfEthics.addWords("The controversial case studied was Media and her mother's ruined career.");

storyOfEthics.erase();
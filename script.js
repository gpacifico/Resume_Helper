$(document).ready(function () {
    startHelp();
});

function getText(textbox) {
    var description = $(textbox).val();
    console.log(description);
    return description;
}

function startHelp() {
    $('#analyze-application-text').click(function () {
        compare('#application-text');
        var orderWords = goBig(matching);
        $("#output").text(orderWords);
        console.log(orderWords);
    })
}

function arrayTheText(jobName) {
    var jobAd = getText(jobName);
    var jobArray = jobAd.split(" ");
    console.log(jobArray);
    return jobArray;
}

function compare(resumeArray) {
    var wordsArray = [];
    wordsArray = arrayTheText(resumeArray);
    matching = {};
    for(var i = 0; i < wordsArray.length; i++ ) {
        if (!matching[wordsArray[i]]) {
            matching[wordsArray[i]] = 1;
        }
        for(var j = i+1; j < wordsArray.length; j++) {
            if (wordsArray[i] === wordsArray[j]) {
                wordsArray.splice(j, 1);
                j--;
                matching[wordsArray[i]]++;
            }
        }
    }
    console.log(matching);
    return matching;
}

function goBig(wordList) {
    var biggest = -1;
    var biggestIndex= 0;
    var sortedWords = [];
    var sortedAmounts = [];
    var together = [];
    do {
        biggest = -1;
        for (var g = 0; g < Object.keys(wordList).length; g++) {
            if (wordList[Object.keys(wordList)[g]] > biggest) {
                biggest = wordList[Object.keys(wordList)[g]];
                biggestIndex = g;
            }
        }
        if (biggest != 0) {
            wordList[Object.keys(wordList)[biggestIndex]] = 0;
            sortedWords.push(Object.keys(wordList)[biggestIndex]);
            sortedAmounts.push(biggest);
            console.log("biggest Value: " + biggest);
            console.log("biggest Key: " + Object.keys(wordList)[biggestIndex]);
            console.log("sortedWords: " + sortedWords);
            console.log("sortedAmounts: " + sortedAmounts);
        }
    } while (biggest != 0);
    console.log("sortedWords2: " + sortedWords);
    for (var r = 0; r < sortedWords.length; r++) {
        together.push(sortedWords[r] + " shows up " + sortedAmounts[r] + " times");
    }
    console.log("together: " + together);
    return together.join("\n");
}
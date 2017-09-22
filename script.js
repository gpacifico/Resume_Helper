$(document).ready(function () {
    startHelp();
    // // Would probably put this in its own function,like function init() {};
    // $('#analyze-application-text').click(function () {
    //
    //     // This function returns, and you didn't capture it, need a var $xx = getText(zzz);
    //     getText('#application-text');
    //     // alert("button");
    //     alert(getText('#application-text'));
    //
    // });
});

function getText(textbox) {
    //probably would just make textbox into $textbox, pass in a jq element
    var description = $(textbox).val();
    console.log(description);
    return description;
}

function startHelp() {
    $('#analyze-application-text').click(function () {
        // getText('#application-text');
        // arrayTheText('#application-text');
        compare('#application-text');
        goBig(matching);
        // alert('button');
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
    var biggest = 1;
    for (var g = 0; g < Object.keys(wordList).length; g++) {
        if (wordList[Object.keys(wordList)[g]] > biggest) {
            biggest = wordList[Object.keys(wordList)[g]];
        }
    }
    // console.log("WL of 0: " + wordList[0]);
    console.log("WL of 0: " + wordList[Object.keys(wordList)[0]]);
    // console.log("WL of 0 version 2: " + Object.keys(wordList)[Object.values(wordList)[g]]);
    console.log("biggest: " + biggest);
    // console.log(wordList);
    // if (wordList[biggest] !== 0) {
    //     wordList[biggest] = 0;
    //     goBig(wordList);
    // }
}


// function goBig(wordList) {
//     var biggest = 1;
//     for (var g = 0; g < Object.values(wordList).length; g++) {
//         if (Object.values(wordList)[g] > biggest) {
//             biggest = Object.values(wordList)[g];
//         }
//     }
//     console.log("WL of 0: " + wordList[0]);
//     console.log("WL of 0 version 2: " + Object.keys(wordList)[Object.values(wordList)[g]]);
//     console.log("biggest: " + biggest);
//     // console.log(wordList);
//     // if (wordList[biggest] !== 0) {
//     //     wordList[biggest] = 0;
//     //     goBig(wordList);
//     // }
// }


// function compare(resumeArray) {
//     arrayTheText(resumeArray);
//     for(var i = 0; i < resumeArray.length; i++ ) {
//         for(var j = 1; j < resumeArray.length; j++) {
//             if (resumeArray[i] === resumeArray[j]) {
//                 console.log(resumeArray[i]);
//                 return resumeArray[i];
//             }
//         }
//     }
// }








// function getDescription() {
//     var $jobAd = $('#application-text');
//     var ad = getText($jobAd);
//     return ad;
// }



// getDescirption($jox) {
//     var description = $textbox.val();
//     return description;
// }
//
//
// function() {
//     $tzzextbox = $('#textbox');
//     var description = getDescription($tzzextbox);
//     var input = getDescription($('#inputbox'));
// }
//
//
//
// var description = getDescription($textbox);
//
// textbox
//
// textbox.value;
//
// $text.va();


// function getDescription() {
//     var description = $('#application-text').val();
//     return description;
// }
//
// function splitDescription(words) {
//     getDescription();
//
// }
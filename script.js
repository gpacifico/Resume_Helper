$(document).ready(function () {
    startHelp();
});

function getText(textbox) {
    var description = $(textbox).val().toLowerCase();
    description = getSanitizeWords(description);
    return description;
}

function getSanitizeWords(words) {
    var sanitizeWords;
    sanitizeWords = words;
    sanitizeWords = getExcludedList(sanitizeWords);
    sanitizeWords = sanitizeWords.replace(/[^a-z0-9 ]/g," ");
    sanitizeWords = sanitizeWords.replace(/( \d+)|(\$\d+)|(#\d+)|(,\d+)|(\.\d+)/g," ");
    sanitizeWords = sanitizeWords.replace(/ +/g," ");
    sanitizeWords = sanitizeWords.replace(/ $/g,"");
    return sanitizeWords;
}

function startHelp() {
    $('#analyze-application-text').click(function () {
        compare('#application-text');
        var orderWords = goBig(matching);
        $("#output").text(orderWords);
    })
}

function arrayTheText(jobName) {
    var jobAd = getText(jobName);
    var jobArray = jobAd.split(" ");
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
        }
    } while (biggest != 0);
    var outputs;
    outputs = showOutput(sortedWords, sortedAmounts);
    return outputs;
}

function showOutput(wordList, sortedAmounts) {
    var lastNumber = sortedAmounts[0] + 1;
    var currentNumber = sortedAmounts[0];
    var output = "";
    for(var w = 0; w < wordList.length; w++) {
        if(lastNumber > currentNumber) {
            lastNumber = currentNumber;
            if(output === "") {
                output += sortedAmounts[w];
            } else {
                output += "\n\n" + sortedAmounts[w];
            }
            if (sortedAmounts[w] === 1) {
                output += " OCCURRENCE:";
            }
            else {
                output += " OCCURRENCES:";
            }
        }
        output += "\n" + wordList[w];
        currentNumber = sortedAmounts[w];
    }
    return output;
}

function getExcludedList(words) {
    var exclusionList = ["a","an","the","aboard","about","above","across","after","against","along","amid","among","anti",
        "around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning",
        "considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into",
        "like","minus","near","of","off","on","onto","opposite","outside","over","past","per","plus","regarding","round","save",
        "since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with",
        "within","without","for","and","nor","but","or","yet","so","both and","either or","neither nor","not only but also",
        "whether or","after","although","as","as soon as","because","before","by the time","even if","even though","every time",
        "if","in case","in the event that","just in case","now that","once","only if","only since","the first time","though",
        "unless","until","when","whenever","whereas","whether or not","after","how","till","'til","although","if","unless",
        "as","inasmuch until","as if","in order","that","when","as long as","lest","whenever","as much as","now that","where",
        "as soon","as provided","wherever","as though","since","while","because so","that","before than","even if that",
        "even though","though", "and up", "you", "i", "work", "want", "need", "are", "opportunity", "employer", "employee",
        "opportunities", "week", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "morning",
        "night", "happy", "hour", "coffee", "benefits", "salary", "time", "must", "be", "attract", "privately", "owned",
        "company", "industry", "job", "type", "expenses", "situation", "continue", "continuing", "association", "requirement",
        "requirements", "department", "statement", "experience", "paid", "previous", "working", "well", "responsibilities",
        "responsibility", "is", "are", "our","applications","action","is","members","we","homeowners","property","irvine",
        "strategy","board","ca","year","california","time","san","has","have","had","best","talent","mind","application","\\d+k",
        "years","reviews","candidates","willing","site","friday","corporate","office","telecommuting","not","available","this",
        "a","player","your","largest","offices","diego","francisco","employees","state","been","associations","grow","to","retain",
        "equip","resources","can","flexibly","applied","any","situation","specific","create","efficiencies","efficiency","every",
        "also","used","focused","intelligently","offer","starting","start","started","starts","depending","career","growth","on",
        "going","training","mentor","mentors","successful","select","education","position","goal","teams","cool","make","life",
        "easier","user","first","foremost","always","looking","line","statement","determine","conception","completion","story",
        "clear","understanding","use","case","effectively","multiple","projects","end","service","descriptions","minimum","high",
        "performance","rendering","knowledge","progress","equal","employer","type","full","salaries","location","required","experience",
        "disability", "sex", "gender", "religion", "veteran", "status", "self", "protected", "by", "law", "can", "do", "will",
        "receive", "color", "regard", "to", "with", "without", "characteristic", "characteristics", "national", "origin", "orientation",
        "regardless", "sexual", "qualified", "qualifications", "qualification", "race", "identity", "identities", "lgbt", "commit",
        "this", "that", "where", "when", "how", "why", "who", "list", "month", "necessary", "ethnicity", "creed", "hard", "easy",
        "comfortable", "applicant", "applicants", "able", "holiday", "holidays", "all", "employment", "their", "they", "group",
        "ask", "asked", "asking", "become", "became", "becomes", "cannot", "clearly", "different", "differently", "done", "everything",
        "everyone", "everywhere", "everybody", "give", "gave", "gets", "given", "gives", "her", "his", "here", "there", "interest",
        "interested", "interesting", "important", "herself", "himself", "themselves", "interests", "itself", "keep", "know",
        "knowing", "knew", "known", "knows", "more", "longer", "longest", "long", "man", "woman", "person", "people", "myself",
        "old", "older", "oldest", "open", "opened", "opens", "opening", "order", "orders", "ordering", "possible", "possibilities",
        "possibility", "perhaps", "put", "puts", "putting", "quite", "room", "rooms", "said", "say", "saying", "should", "could",
        "would", "did", "does", "having", "several", "shall", "show", "shows", "showed", "showing", "some", "someone", "something",
        "somewhere", "still", "such", "sure", "take", "taken", "taking", "takes", "them", "then", "therefore", "think", "thinks",
        "thinking", "thought", "thoughts", "those", "these", "today", "tomorrow", "thus", "too", "took", "wants", "way", "ways",
        "whether", "which", "whose", "works", "yours", "specifics", "free", "compensation", "cover", "letter", "resume", "require",
        "requires", "qualify", "qualifies", "resumes", "apply", "applies", "try", "tries", "trying", "tried", "feel", "feels"];
    var clean = words;
    exclusionList.map(function (item) {
        var re = new RegExp("\\W" + item + "\\W", 'g');
        clean = clean.replace(re, " ");
    });
    return clean;
}
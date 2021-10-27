var numOfMistakes = 1;
var wordToPlay = "";
var wordToPlay1 = "";
var wordToPlay2 = "";
var correctChars = 0;
const wordToPlay3 = ["school", "water", "homework", "Wellcode", "ankle", "wall", "train", "pen", "deer", "excavator", "rabbit"]
function step2() {
    wordToPlay = $('#word').val();
    wordToPlay2 = wordToPlay;
    wordToPlay = wordToPlay.toLowerCase();
    startGame1();
    return false;
}

function step2_1() {
    var aux = Math.floor(Math.random()*((wordToPlay3.length) - 0) + 0);
    wordToPlay = wordToPlay3[aux];
    wordToPlay2 = wordToPlay;
    wordToPlay = wordToPlay.toLowerCase();
    startGame1();
    return false;
}

function startGame1() {
    document.getElementById("startGame").innerHTML=`
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-6">

                    <div style="font-size: 20px;" id="info1">
                        Try to find a letter in the word that you have to quess.
                        <p></p>
                    </div>
                    <div id="VirtualKey">
                        <input id="btnq" type="button" class="btn btn-info" onclick="check(this);" value="q"/>
                        <input id="btnw" type="button" class="btn btn-info" onclick="check(this);" value="w"/>
                        <input id="btne" type="button" class="btn btn-info" onclick="check(this);" value="e"/>
                        <input id="btnr" type="button" class="btn btn-info" onclick="check(this);" value="r"/>
                        <input id="btnt" type="button" class="btn btn-info" onclick="check(this);" value="t"/>
                        <input id="btny" type="button" class="btn btn-info" onclick="check(this);" value="y"/>
                        <input id="btnu" type="button" class="btn btn-info" onclick="check(this);" value="u"/>
                        <input id="btni" type="button" class="btn btn-info" onclick="check(this);" value="i"/>
                        <input id="btno" type="button" class="btn btn-info" onclick="check(this);" value="o"/>
                        <input id="btnp" type="button" class="btn btn-info" onclick="check(this);" value="p"/>
                        <br />
                        <div style="font-size: 3px; color: white;">
                            c    
                        </div>
                        &nbsp  &nbsp;
                        <input id="btna" type="button" class="btn btn-info" onclick="check(this);" value="a"/>
                        <input id="btns" type="button" class="btn btn-info" onclick="check(this);" value="s"/>
                        <input id="btnd" type="button" class="btn btn-info" onclick="check(this);" value="d"/>
                        <input id="btnf" type="button" class="btn btn-info" onclick="check(this);" value="f"/>
                        <input id="btng" type="button" class="btn btn-info" onclick="check(this);" value="g"/>
                        <input id="btnh" type="button" class="btn btn-info" onclick="check(this);" value="h"/>
                        <input id="btnj" type="button" class="btn btn-info" onclick="check(this);" value="j"/>
                        <input id="btnk" type="button" class="btn btn-info" onclick="check(this);" value="k"/>
                        <input id="btnl" type="button" class="btn btn-info" onclick="check(this);" value="l"/>
                        <br />
                        <div style="font-size: 3px; color: white;">
                            c    
                        </div>
                        &nbsp  &nbsp &nbsp  &nbsp;
                        <input id="btnz" type="button" class="btn btn-info" onclick="check(this);" value="z"/>
                        <input id="btnx" type="button" class="btn btn-info" onclick="check(this);" value="x"/>
                        <input id="btnc" type="button" class="btn btn-info" onclick="check(this);" value="c"/>
                        <input id="btnv" type="button" class="btn btn-info" onclick="check(this);" value="v"/>
                        <input id="btnb" type="button" class="btn btn-info" onclick="check(this);" value="b"/>
                        <input id="btnn" type="button" class="btn btn-info" onclick="check(this);" value="n"/>
                        <input id="btnm" type="button" class="btn btn-info" onclick="check(this);" value="m"/>
                    </div>
                    <div style="font-size: 80px;" id="word1">
                    </div>
                </div>
                <div class="col-6">
                    <img src="mistakes0.jpg" alt="Hangman2" id="picture" class="center">
                </div>
            </div>
        </div>
    </div>
    `;
    for (var i = 0; i < wordToPlay.length; ++i) {
        wordToPlay1 += "_ ";
    }
    document.getElementById("word1").innerHTML = wordToPlay1;
}

function nextStep() {
    document.getElementById("picture").src="mistakes" + numOfMistakes + ".jpg";
    if (numOfMistakes < 15) {
        ++numOfMistakes;
    } else {
        document.getElementById("VirtualKey").innerHTML = `
        <div style="font-size: 80px;" id="word2" class="center">
        Game over 
        <br />
            <div class="d-grid gap-2 col-7 ">  
                <button type="submit" class="btn btn-primary" onclick="return reloadPage();" id="replay">Replay</button>
            </div>
        </div>`;
        document.getElementById("info1").innerHTML = `The word you had to guess was "` + wordToPlay2 + `"`;
    }
    return false;
}

function check(e) {
    document.getElementById(e.id).disabled=true;
    if (wordToPlay.search(e.value) >= 0) {
        document.getElementById(e.id).style.backgroundColor="green";
        for (var i = 0; i < wordToPlay.length; ++i) {
            if(wordToPlay.search(e.value) >= 0) {
                wordToPlay1 = wordToPlay1.substr(0,wordToPlay.search(e.value)*2) + wordToPlay2[wordToPlay.search(e.value)] + wordToPlay1.substr(wordToPlay.search(e.value)*2+1);
                wordToPlay = wordToPlay.substr(0,wordToPlay.search(e.value)) + " " + wordToPlay.substr(wordToPlay.search(e.value)+1);
                ++correctChars;
            } 
        }
    } else {
        document.getElementById(e.id).style.backgroundColor="red";
        nextStep();
    }
    document.getElementById("word1").innerHTML = wordToPlay1;
    if (correctChars == wordToPlay.length) {
        document.getElementById("VirtualKey").innerHTML = `
        <div style="font-size: 50px;" id="word2" class="center">
            Congratulations you won!!! 
            <br />
            <p></p>
            <div class="d-grid gap-2 col-7 ">  
                <button type="submit" class="btn btn-primary" onclick="return reloadPage();" id="replay">Replay</button>
            </div>
        </div>`;
        document.getElementById("info1").innerHTML = ``;
    }
}

function reloadPage() {
    location.reload();
    return false;
}
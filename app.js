var photoArray = [];
var Tracker = {
    clownVote: 0,
    dogVote: 0,
    germVote: 0,
    heightsVote: 0,
    kittenVote :  0,
    lightningVote: 0,
    needleVote: 0,
    snakeVote: 0,
    spiderVote: 0
};
var Photo = function(fear,picLink) {
  this.fear = fear;
  this.picLink =  picLink;
  //this.picRating = null; //not used yet, might be replaced
  photoArray.push(this);
}
var getRandomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var clown1 = new Photo('clown','<img src="img/clown-1.jpg" />');
var clown2 = new Photo('clown', '<img src="img/clown-2.jpg" />')
var clown3 = new Photo('clown','<img src="img/clown-3.jpg" />');
var clown4 = new Photo('clown', '<img src="img/clown-4.png" />');

var dog1 = new Photo('dog','<img src="img/dog-1.jpg" />');
var dog2 = new Photo('dog', '<img src="img/dog-2.jpg" />');
var dog3 = new Photo('dog', '<img src="img/dog-3.jpg" />');

var germ1 = new Photo('germ','<img src="img/germ-1.jpg" />');
var germ2 = new Photo('germ','<img src="img/germ-2.jpg" />');
var germ3 = new Photo('germ','<img src="img/germ-3.jpg" />');

var heights1 = new Photo('heights','<img src="img/heights-1.jpg" />');
var heights2 = new Photo('heights','<img src="img/heights-2.jpg" />');
var heights3 = new Photo('heights','<img src="img/heights-3.jpg" />');

var kitten1 = new Photo('kitten','<img src="img/kitten-1.jpg" />');
var kitten2 = new Photo('kitten','<img src="img/kitten-2.jpg" />');

var lightning1 = new Photo('storm','<img src="img/lightning-1.jpg" />');
var lightning2 = new Photo('storm','<img src="img/lightning-2.jpg" />');

var needle1 = new Photo('needle','<img src="img/needles-1.jpg" />');
var needle2 = new Photo('needle','<img src="img/needles-2.jpg" />');
var needle3 = new Photo('needle','<img src="img/needles-3.jpg" />');

var snake1 = new Photo('snake','<img src="img/snake-1.jpg" />');
var snake2 = new Photo('snake','<img src="img/snake-2.jpg" />');
//var snake3 = new Photo ('snake', '<img src="img/snake-3.jpg" />');

var spider1 = new Photo('spider','<img src="img/spider-1.jpg" />');
var spider2 = new Photo('spider','<img src="img/spider-2.jpg" />');
var spider3 = new Photo('spider', '<img src="img/spider-3.jpg" />')

function randomPic() {
   var i1 = getRandomNum(0, photoArray.length -1);
    var i2 = getRandomNum(0, photoArray.length -1);
    console.log('i1 = ' +  i1 +' i2 = ' + i2);
    randPic1 = photoArray[i1];
    randPic2 = photoArray[i2];
    if (randPic1 != null && randPic2 != null){
        while(randPic1.fear === randPic2.fear)
        {
            i1 = getRandomNum(0, photoArray.length -1);
            i2 = getRandomNum(0, photoArray.length -1);
            randPic1 = photoArray[i1];
            randPic2 = photoArray[i2];
            console.log('photos fear are the same get new random');
            console.log('i1 = ' +  i1 +' i2 = ' + i2);
        }
        //console.log('Random pic function')
        var pic1 = document.getElementById('picFrame1');
        var pic2 = document.getElementById('picFrame2');

        pic1.innerHTML = randPic1.picLink;
        pic1.className = randPic1.fear;

        pic2.innerHTML = randPic2.picLink;
        pic2.className = randPic2.fear;

    }
}
var ratePic = function(e,picFrame) {
     e.preventDefault();
    if (picFrame === 'picFrame1') {
            console.log('pic 1 clicked');
            var pic = document.getElementById('picFrame1');
            console.log(pic.className);
            switch (pic.className){
                case 'clown':
                    Tracker.clownVote += 1;
                    break;
                case 'dog':
                    Tracker.dogVote +=1;
                    break;
                case 'germ':
                    Tracker.germVote +=1;
                    break;
                case 'heights':
                    Tracker.heightsVote +=1;
                    break;
                case 'kitten':
                    Tracker.kittenVote +=1;
                    break;
                case 'lightning':
                    Tracker.lightningVote +=1;
                    break;
                case 'needle':
                    Tracker.needleVote +=1;
                    break;
                case 'snake':
                    Tracker.snakeVote +=1;
                    break;
                case 'spider':
                    Tracker.spiderVote +=1;
                    break;

            }
            randomPic();
    }
    else if (picFrame === 'picFrame2'){
        console.log('pic 2 clicked');
        var pic = document.getElementById('picFrame2');
            console.log(pic.className);
            switch (pic.className){
                case 'clown':
                    Tracker.clownVote += 1;
                    break;
                case 'dog':
                    Tracker.dogVote +=1;
                    break;
                case 'germ':
                    Tracker.germVote +=1;
                    break;
                case 'heights':
                    Tracker.heightsVote +=1;
                    break;
                case 'kitten':
                    Tracker.kittenVote +=1;
                    break;
                case 'lightning':
                    Tracker.lightningVote +=1;
                    break;
                case 'needle':
                    Tracker.needleVote +=1;
                    break;
                case 'snake':
                    Tracker.snakeVote +=1;
                    break;
                case 'spider':
                    Tracker.spiderVote +=1;
                    break;

            }
            randomPic();
    }
}

randomPic();

document.getElementById('picFrame1').addEventListener('click', function(){
    ratePic(event,'picFrame1');
});
document.getElementById('picFrame2').addEventListener('click', function(){
    ratePic(event,'picFrame2');
});

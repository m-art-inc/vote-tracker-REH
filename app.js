var photoArray = [];
var Photo = function(fear,picLink) {
  this.fear = fear;
  this.picLink =  picLink;
  this.picRating = null; //set to null for testing
  photoArray.push(this);
}
var getRandomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var spider1 = new Photo('spider','<img src="img/spider-1.jpg" />');
var spider2 = new Photo('spider','<img src="img/spider-2.jpg" />');
//spider
var snake1 = new Photo('snake','<img src="img/snake-1.jpg" />');
var snake2 = new Photo('snake','<img src="img/snake-2.jpg" />');
//snake
var dog1 = new Photo('dog','<img src="img/dog-1.jpg" />');
//dog
//dog
var clown1 = new Photo('clown','<img src="img/clown-1.jpg" />');
var clown3 = new Photo('clown','<img src="img/clown-3.jpg" />');
//clown
var germ1 = new Photo('germ','<img src="img/germ-1.jpg" />');
//germ
//germ
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

document.getElementById('picFrame1').innerHTML = '<img src="img/dog-1.jpg" />';
document.getElementById('picFrame2').innerHTML = '<img src = "img/snake-1.jpg" />';

var ratePic =function(e) {
    e.preventDefault();
    var i1 = getRandomNum(0, photoArray.length - 1);
    var i2 = getRandomNum(0, photoArray.length - 1);
    console.log('i1 = ' +  i1 +' i2 = ' + i2)
    randPic1 = photoArray[i1];
    randPic2 = photoArray[i2];
    if (randPic1 != null && randPic2 != null){
        if (randPic1 === randPic2 || randPic1.fear === randPic2.fear){
            i1 = getRandomNum(0, photoArray.length - 1);
            //i2 = getRandomNum(0, photoArray.length - 1);
            //console.log('i1 = ' +  i1 +' i2 = ' + i2)
            randPic1 = photoArray[i1];
            //randPic2 = photoArray[i2];
        }
        console.log('Button ratePic function')
        document.getElementById('picFrame1').innerHTML = randPic1.picLink;
        document.getElementById('picFrame2').innerHTML = randPic2.picLink;

    }

}
var voteButton = document.getElementById('vote');
voteButton.addEventListener('click', ratePic);


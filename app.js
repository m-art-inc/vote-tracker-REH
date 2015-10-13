var photoArray = [];
var Photo = function(picLink) {
  this.picLink =  picLink;
  this.picRating = null; //set to null for testing
  photoArray.push(this);
}
var getRandomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var spider1 = new Photo('<img src = "img/spider-1.jpg" />');
var spider2 = new Photo('<img src= "img/spider-2.jpg" />');

document.getElementById('picFrame1').innerHTML = '<img src = "img/spider-1.jpg" />';
document.getElementById('picFrame2').innerHTML = '<img src = "img/spider-1.jpg" />';

var ratePic =function(e) {
    e.preventDefault();
    var i1 = getRandomNum(0, photoArray.length - 1);
    var i2 = getRandomNum(0, photoArray.length - 1);
    console.log('i1 = ' +  i1 +' i2 = ' + i2)
    randPic1 = photoArray[i1];
    randPic2 = photoArray[i2];
    if (randPic1 != null && randPic2 != null ){
        document.getElementById('picFrame1').innerHTML = randPic1.picLink;
        document.getElementById('picFrame2').innerHTML = randPic2.picLink;

        console.log('Button ratePic function')

    }

}
var voteButton = document.getElementById('vote');
voteButton.addEventListener('click', ratePic);


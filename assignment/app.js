var mathsNum = +prompt('Enter Your Maths Marks')
document.getElementById('mark1').innerHTML = mathsNum;

var physicsNum = +prompt('Enter Your Physics Marks')
document.getElementById('mark2').innerHTML = physicsNum;

var chemistryNum = +prompt('Enter Your Chemistry Marks')
document.getElementById('mark3').innerHTML = chemistryNum;

var englishNum = +prompt('Enter Your English Marks')
document.getElementById('mark4').innerHTML = englishNum;

var urduNum = +prompt('Enter Your Urdu Marks')
document.getElementById('mark5').innerHTML = urduNum;

var totalNum = mathsNum+physicsNum+chemistryNum+englishNum+urduNum
document.getElementById('totalmark').innerHTML = totalNum;

var percentage = totalNum*100/500
document.getElementById('percentage').innerHTML = percentage+'%';

if(percentage >=90 && percentage < 100){
    document.getElementById('grade').innerText = 'A1+'
}
else if(percentage >=80 && percentage < 90){
    document.getElementById('grade').innerText = 'A+'
}
else if(percentage >=70 && percentage < 80){
    document.getElementById('grade').innerText = 'A'
}
else if(percentage >=60 && percentage < 70){
    document.getElementById('grade').innerText = 'B'
}
else if(percentage >=50 && percentage < 60){
    document.getElementById('grade').innerText = 'C'
}
else if(percentage >=40 && percentage < 50){
    document.getElementById('grade').innerText = 'D'
}
else if(percentage >=0 && percentage < 40){
    document.getElementById('grade').innerText = 'Fail+'
}
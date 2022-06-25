var images = ['images/slide1.jpg','images/slide2.jpg','images/slide3.jpg','images/slide4.jpg','images/slide5.jpg'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;
var botui = new BotUI('help-bot');
botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Hope you remember our secret Questions!!'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'What is your Favorite color?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'pink',
        value: 'correct'
      },
      {
        text: 'blue',
        value: 'wrong'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "correct") {
    message='Correct'; 
  }
  else if (res.value === "wrong") {
    message='Your re Wrong';
    location.reload("./user.html")
    
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Next!',
        
        value: 'cool'
      }
    ]
  });

}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'What is your Favorite Food ?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Pasta',
        value: 'pasta'
      },
      {
        text: 'Noodles',
        value: 'noodles'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "pasta") {
    message = 'Correct';
  }
  else if (res.value === "noodles") {
    message="Youre wrong",
    location.reload("./user.html");
    
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Next!',
        value: 'cool'
      }
    ]
});
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'What is your Favorite drink?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'coffee',
        value: 'coffee'
      },
      {
        text: 'Tea',
        value: 'Tea'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "coffee") {
    message = 'Correct';
  }
  else if (res.value === "Tea") {
    message='Your re Wrong';
    location.reload("./user.html")
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Next!',
        value: 'cool'
      }
    ]
});
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'What is your Favorite Sport?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Volleyball',
        value: 'volleyball'
      },
      {
        text: 'cricket',
        value: 'cricket'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "cricket") {
    message = 'Correct';
  }
  else if (res.value === "volleyball") {
    message='Your re Wrong';
    location.reload("./user.html")
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Next!',
        value: 'cool'
      }
    ]
});
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'what is your favorite fruit?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Mango',
        value: 'mango'
      },
      {
        text: 'Apple',
        value: 'apple'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "mango") {
    message = 'Correct';
  }
  else if (res.value === "apple") {
    message='Your re Wrong';
    location.reload("./user.html")
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function () {
  location.replace("./user.html")
  
});
let img = $('img')

// function fruits(fileName) {
//   if(fileName = 'apple'){
//     img.attr('src', './img/apple.jpg')
//   } else if (fileName = 'bananas'){
//     img.attr('src', './img/bananas.jpg')
//   }
//   }

function fruits(fileName) {
  img.attr('src', `./img/${fileName}.jpg`)
    }
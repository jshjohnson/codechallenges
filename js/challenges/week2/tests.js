var myOriginalAge;

function testChallenge1Task1(myName, myAge, myFriends) {
  myOriginalAge = myAge;
  console.log('My Name is a string? ' + (typeof myName === 'string'));
  console.log('My Age is a number? ' + (typeof myAge === 'number'));
  console.log('I have three friends? ' + (myFriends.length === 3));
  console.log('My friends are strings? ' + (typeof myFriends[0] === 'string'));
}

function testChallenge1Task2(myFriends) {
  console.log('My friends have all left me? ' + (myFriends.length === 0));
}

function testChallenge1Task3(myNewAge) {
  console.log('I am one year older? ' + (myNewAge === myOriginalAge + 1));
}


function testChallenge2Task1(product) {
  if (product.hasOwnProperty('name')) {
    console.log('Product is called Unlimited Infinity? ' + (product.name === 'Unlimited Infinity'));
  } else {
    console.log('Error: No product name!');
  }

  if (product.hasOwnProperty('type')) {
    if (product.type.indexOf('unlimited') > -1) {
      console.log('Product is type unlimited!');
    } else {
      console.log('Error: Product is not type unlimited!');
    }
    if (product.type.indexOf('fibre') > -1) {
      console.log('Product is type fibre!');
    } else {
      console.log('Error: Product is not type fibre!');
    }
  } else {
    console.log('Error: No product type!');
  }

  if (product.hasOwnProperty('price')) {
    console.log('Product price is 30? ' + (product.price === 30));
  } else {
    console.log('Error: No product price!');
  }

  if (product.hasOwnProperty('discount')) {
    console.log('Product discount is 10? ' + (product.discount === 10));
  } else {
    console.log('Error: No product discount!');
  }
}

function testChallenge2Task3(product) {
  if (product.hasOwnProperty('type')) {
    if (product.type.indexOf('best') > -1) {
      console.log('Product is type best!');
    } else {
      console.log('Error: Product is not type best!');
    }
  } else {
    console.log('Error: No product type!');
  }
}

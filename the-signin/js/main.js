// *** DOM REFERENCES ***
let $modal =  document.querySelector('.modal');
let $user =   document.querySelector('#user');
let $pass =   document.querySelector('#pass');
let $signin = document.querySelector('.signin');
let $close =  document.querySelector('.close');
let $submit = document.querySelector('.submit');

// *** UI MODIFICATIONS ***

// display the .modal
$modal.style.display = "block";

// remove the .modal
$modal.style.display = "none";

// add .error to #user
$user.classList.add(`error`);
//modifying the html not the css

// add .error to #pass
$pass.classList.add(`error`);

// remove .error from #user
$user.classList.remove(`error`);

//remove .error form #pass
$user.classList.remove(`error`);

// capture the .submit click
// capture the .signin click

// capture the .close click


// capture the focus of #user



// capture the focus of #pass

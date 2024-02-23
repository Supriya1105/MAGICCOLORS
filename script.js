const Buttons = document.querySelectorAll('.Button');

const Body =  document.querySelector('body');

Buttons.forEach(function (Button) {
    console.log(Button);
    Button.addEventListener('click', function(eve){
        console.log(eve)
        console.log(eve.target)
        //const cse = eve.target.id
       switch (eve.target.id) {
        case 'Pink':
            Body.style.backgroundColor = eve.target.id
        
        break;
        
        case 'green':
            Body.style.backgroundColor = eve.target.id
        break;

        case 'Magenta':
                Body.style.backgroundColor = eve.target.id
        break;

         case 'Fuchsia':
                    
           Body.style.backgroundColor = eve.target.id
        
        break;

         case 'Yellow':
                        Body.style.backgroundColor = eve.target.id
            break;

        case 'Grey':
            Body.style.backgroundColor = eve.target.id
        break;

        case 'Purple':
            Body.style.backgroundColor = eve.target.id
    break;

        case 'Blue':
            Body.style.backgroundColor = eve.target.id
        break;

        case 'Lavender':
            Body.style.backgroundColor = eve.target.id
        break;
       
        default:
            break;
       }
    });
    

});
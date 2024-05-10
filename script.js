


    let user = {
        name:'John',
        age:24,
        email:'155@gmail.com',
        password:'12345678a'
    }

    let sum = 70

    let verification = () =>{
        
        const askName = prompt('What is your name?')
        
        let askEmail = ()=>{
         let ask = prompt('What is your Email?')
        if (ask !== user.email){
            alert('Incorrect! Try again');
                askEmail();
        }else{
            alert('Right!')
        }
        }
    
        let askPassword = ()=>{
           let ask2 = prompt('What is your password?')
        if(ask2 !== user.password){
            alert('Incorrect! Try again');
            askPassword();
        }else{
            alert ('Right!')
        }
        }

        let prize =()=>{
            let ask3 = prompt ('For the prize, what does `32+38` equal?')
            if (ask3 != sum){
                alert('Incorrect! Try again');
                prize()
            }else{
            alert ('Congratulations! You won 70$')

            }
        }

        askEmail()

        askPassword()

        prize()
        //         let askPassword = prompt('Password')
        // switch(askPassword){
        //     case '12345678a':
        //         alert('right');
        //         break;
        //     default:
        //         alert('Not correct!');
        //         break;
        
    }

    verification()

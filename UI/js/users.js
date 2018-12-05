function RegisterUser(){
    var user_name = document.getElementById('user_name').value;
    var user_email = document.getElementById('user_email').value;
    var user_password = document.getElementById('user_password').value;
    const data = {"user_name":user_name, "user_email":user_email, "user_password":user_password};

    fetch('http://127.0.0.1:5000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           
        },
       
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(result => {
            if(result.status === 'success'){
               alert(result.message)
               window.location.href = 'index.html';
            }
            else{
                alert(result.message)
            }
            
        })
        
}

function loginUser(){

    let user_name = document.getElementById('user_name').value;
    let user_password = document.getElementById('user_password').value;
    const data = {"user_name":user_name, "user_password":user_password};

    fetch('http://127.0.0.1:5000/api/v1/auth/login', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(result => {
            if(result.message === 'User logged in'){
                token = result.access_token;
                localStorage.setItem('token', token);

                if(user_name == "dorothy"){
                    window.location.replace('admin.html');
                } else {
                    window.location.href = 'order_delivery.html';
                }
                alert(`Hello ${user_name}`);
            } else {
                alert (`Invalid Username or password`);
                window.location.href = 'index.html';
            }
            
        })
        
}
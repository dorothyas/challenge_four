
function registerUser(){
    let user_name = document.getElementById('user_name').value;
    let user_email = document.getElementById('user_email').value;
    let user_password = document.getElementById('user_password').value;
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
            alert(JSON.stringify(result))
            if(result.message === 'registered'){
            //    alert(result.message)
               window.location.href = 'login.html';
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
            alert(JSON.stringify(result))
            if(result.message === 'User logged in'){
                token = result.access_token;
                localStorage.setItem('token', token);
                alert(`Welcome ${user_name}`);
                
                if(user_name == "dorothy"){
                    window.location.replace('admin.html');
                } else {
                    window.location.href = 'order_delivery.html';
                }

            } else {
                alert (`Invalid Username or password`);
                window.location.href = 'login.html';
            }
            
        })
        
}

// const table = document.getElementById('users_table');
// const url = 'http://127.0.0.1:5000/api/v1/users/parcels';
// token = localStorage.getItem('token');

// if(/user_profile.html/.test(window.location.href)){

//     fetch(url, {
        
//         method: 'GET',
//         headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-type':'application/json',
//         'Authorization': `Bearer ${token}`,
//         'Access-Control-Allow-Origin': '*'
//             }
//         })
//         .then((res) => res.json())

//         .then(function(data){
//                 // alert(JSON.stringify(data))
//         let i = 0;

//         let table = '<table border="2px">'+
//                     '<tr>'+
//                     '<th>order_id</th>'+
//                     '<th>parcel_type</th>'+
//                     '<th>weight</th>'+
//                     '<th>receiver</th>'+
//                     '<th>pick_up</th>'+
//                     '<th>destination</th>'+
//                     '<th>status</th>'+
//                     '<th>present_location</th>'+
//                     '<th>user_id</th>'+
//                     ' </tr>'; 
                    
//         for(i = 0; i < data["Orders"].length; i++){

//             table += 
//             "<tr><td><a href='order_details.html?order_id="+data["Orders"][i]["order_id"]+"'> "+data["Orders"][i]["order_id"]    
//             +"</td><td>"+data["Orders"][i]["parcel_type"]
//             +"</td><td>"+data["Orders"][i]["weight"]
//             +"</td><td>"+data["Orders"][i]["receiver"]
//             +"</td><td>"+data["Orders"][i]["pick_up"]
//             +"</td><td>"+data["Orders"][i]["destination"]
//             "<tr><td><a href='user_update.html?order_id="+data["Orders"][i]["order_id"]+"'> "+data["Orders"][i]["order_id"]    
//             +"</td><td>"+data["Orders"][i]["present_location"]
//             +"</td><td>"+data["Orders"][i]["user_id"]
//             +"</td></tr>";
            
//         }
//         document.getElementById('parcels_table').innerHTML = table;
    
//         });
        
// }

// if(/user_profile.html/.test(window.location.href)){

//     let order_url = window.location.href
//     let url = new URL(order_url)
//     let order_id = url.searchParams.get("order_id")
//       console.log(order_id);
  
//     fetch("http://127.0.0.1:5000/api/v1/parcels/"+order_id,  {

//             method: 'GET',
//             headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type':'application/json',
            
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             'Access-Control-Allow-Origin': '*'
//             }})
//                 .then((res) => res.json())
//                 .then(function(data){
//                     alert(JSON.stringify(data));

//                 let i = 0;

//                 let table = '<table border="2px">'+
//                                 '<tr>'+
//                                 '<th>order_id</th>'+
//                                 '<th>parcel_type</th>'+
//                                 '<th>weight</th>'+
//                                 '<th>receiver</th>'+
//                                 '<th>pick_up</th>'+
//                                 '<th>destination</th>'+
//                                 '<th>status</th>'+
//                                 '<th>present_location</th>'+
//                                 '<th>user_id</th>'+
//                                 ' </tr>';
                     
  
//                             table += 
//                             "<tr><td>"+data["Orders"][0]["order_id"]
//                             +"</td><td>"+data["Orders"][0]["parcel_type"]
//                             +"</td><td>"+data["Orders"][0]["weight"]
//                             +"</td><td>"+data["Orders"][0]["receiver"]
//                             +"</td><td>"+data["Orders"][0]["pick_up"]
//                             +"</td><td>"+data["Orders"][0]["destination"]
//                             +"</td><td> <a href ='#' onclick='updateStatus()' id='stat'>"+data["Orders"][0]["status"]
//                             +"</td><td><a href = '#' onclick= 'updatePresentlocation()' id= 'loc'>"+data["Orders"][0]["present_location"]
//                             +"</td><td>"+data["Orders"][0]["user_id"]
//                             +"</td></tr>";
                        
                   
//                        document.getElementById('parcel_table').innerHTML = table;
        
                      
//                        });
                       
  
//   }
// // if(/user_profile.html/.test(window.location.href)){

//     function updateDestination(){
//         let destination = window.prompt("Update destination")
//         console.log(destination)
        
//         let parcel_url = window.location.href
//         let url = new URL(parcel_url)
//         let order_id = url.searchParams.get("order_id")
//             console.log(order_id);
            
//         const data = {"destination": destination};
        
        
//             fetch('http://127.0.0.1:5000/api/v1/parcels/'+order_id+'/destination', {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             },
//             cache: 'no-cache',
//             body: JSON.stringify(data)
        
//             })
//             .then((res) => res.json())
//             .then(result => {
//                 alert(JSON.stringify(result));
//                 if(result.message === 'destination has been updated'){
//                     document.getElementById('stat').innerHTML = destination
//                     alert(result.message)
        
//                 } else {
//                     alert(result.message)
//                 }
                
//             })
        
        
//             }
      
//     function cancelStatus(){

//         let status = window.prompt("Cancel Order ?")
//         console.log(status)

//         let parcel_url = window.location.href
//         let url = new URL(parcel_url)
//         let order_id = url.searchParams.get("order_id")
//             console.log(order_id);

//         const data = {"status": status};
        
        
//         fetch('http://127.0.0.1:5000/api/v1/parcels/'+order_id+'/cancel', {
//         method: 'PUT',
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//         cache: 'no-cache',
//         body: JSON.stringify(data)
        
//         })
//         .then((res) => res.json())
//         .then(result => {
//             if(result.message === 'Order has been cancelled'){
//                 alert(result.message)   
        
//             } else {
//                 alert(result.message)
//             }
            
//         })
        
        
//         }
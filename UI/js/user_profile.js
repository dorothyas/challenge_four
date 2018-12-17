
// document.getElementById('userOrders').addEventListener('click', userOrders);


function userOrders(){
token = localStorage.getItem('token')
const url = 'http://127.0.0.1:5000/api/v1/users/parcels'

    fetch(url, {
            
        method: 'GET',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => res.json())
        .then(function(data){
            // alert(JSON.stringify(data));   
        let i = 0;
        let table = '<table border="2px">'+
                    '<tr>'+
                    '<th>order_id</th>'+
                    '<th>parcel_type</th>'+
                    '<th>weight</th>'+
                    '<th>receiver</th>'+
                    '<th>pick_up</th>'+
                    '<th>destination</th>'+
                    '<th>status</th>'+
                    '<th>present_location</th>'+
                    '<th>user_id</th>'+
                    ' </tr>';
        for(i = 0; i < data["Orders"].length; i++){

                table += 
                "<tr><td><a href='user_update.html?order_id="+data["Orders"][i]["order_id"]+"'> "+data["Orders"][i]["order_id"]       
                +"</td><td>"+data["Orders"][i]["parcel_type"]
                +"</td><td>"+data["Orders"][i]["weight"]
                +"</td><td>"+data["Orders"][i]["receiver"]
                +"</td><td>"+data["Orders"][i]["pick_up"]
                +"</td><td>"+data["Orders"][i]["destination"] 
                +"</td><td>"+data["Orders"][i]["status"]
                +"</td><td>"+data["Orders"][i]["present_location"]
                +"</td><td>"+data["Orders"][i]["user_id"]
                +"</td></tr>";
            
        }
        document.getElementById('users_table').innerHTML = table;    
});
}


if(/user_update.html/.test(window.location.href)){

    let order_url = window.location.href
    let url = new URL(order_url)
    let order_id = url.searchParams.get("order_id")
      console.log(order_id);
  
    fetch("http://127.0.0.1:5000/api/v1/parcels/"+order_id,  {

            method: 'GET',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
            }})
                .then((res) => res.json())
                .then(function(data){
                    alert(JSON.stringify(data));

                let i = 0;

                let table = '<table border="2px">'+
                                '<tr>'+
                                '<th>order_id</th>'+
                                '<th>parcel_type</th>'+
                                '<th>weight</th>'+
                                '<th>receiver</th>'+
                                '<th>pick_up</th>'+
                                '<th>destination</th>'+
                                '<th>status</th>'+
                                '<th>present_location</th>'+
                                '<th>user_id</th>'+
                                ' </tr>';
                     
  
                            table += 
                            "<tr><td>"+data["Orders"][0]["order_id"]
                            +"</td><td>"+data["Orders"][0]["parcel_type"]
                            +"</td><td>"+data["Orders"][0]["weight"]
                            +"</td><td>"+data["Orders"][0]["receiver"]
                            +"</td><td>"+data["Orders"][0]["pick_up"]
                            +"</td><td><a href = '#' onclick= 'updateDestination()' id= 'loc'>"+data["Orders"][0]["destination"]
                            +"</td><td><a href ='#' onclick='cancelStatus()' id='stat'>"+data["Orders"][0]["status"]
                            +"</td><td>"+data["Orders"][0]["present_location"]
                            +"</td><td>"+data["Orders"][0]["user_id"]
                            +"</td></tr>";
                        
                   
                       document.getElementById('parcels_table').innerHTML = table;
        
                      
                       });
                       
  
  }


function cancelStatus(){
let status = window.prompt("Update Status")
console.log(status)

let parcel_url = window.location.href
let url = new URL(parcel_url)
let order_id = url.searchParams.get("order_id")
    console.log(order_id);
    
const data = {"status": status};

    fetch('http://127.0.0.1:5000/api/v1/parcels/'+order_id+'/status', {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    cache: 'no-cache',
    body: JSON.stringify(data)

    })
    .then((res) => res.json())
    .then(result => {
        alert(JSON.stringify(result));
        if(result.status === 'message'){
            document.getElementById('stat').innerHTML = status
            alert(result.message)

        }
        else{
            alert(result.message)
        }
        
    })

    }
    function updateDestination(){
        let destination = window.prompt("Update Status")
        console.log(destination)
        
        let parcel_url = window.location.href
        let url = new URL(parcel_url)
        let order_id = url.searchParams.get("order_id")
            console.log(order_id);
            
        const data = {"destination": destination};
        
            fetch('http://127.0.0.1:5000/api/v1/parcels/'+order_id+'/destination', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            cache: 'no-cache',
            body: JSON.stringify(data)
        
            })
            .then((res) => res.json())
            .then(result => {
                alert(JSON.stringify(result));
                if(result.status === 'message'){
                    document.getElementById('stat').innerHTML = destination
                    alert(result.message)
        
                }
                else{
                    alert(result.message)
                }
                
            })
        
        
            }
        
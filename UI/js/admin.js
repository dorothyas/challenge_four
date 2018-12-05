
function getOrders(){
    token = localStorage.getItem('token')

    fetch('http://127.0.0.1:5000/api/v1/parcels', {
        
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
                alert(JSON.stringify(data))
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
            "<tr><td>"+data["Orders"][i]["order_id"]
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
    
        document.getElementById('parcels_table').innerHTML = table+"</table>";
    
        });
        
}

function updateStatus(){
    token = localStorage.getItem('token')
    let order_id = document.getElementById('order_id').value;
    console.log(order_id)
     
    let status = document.getElementById('action');
    for (let i = 0; i<status.length; i++){
        status[i].addEventListener('click', function(){order_status = status[i].value;})
    }
    // console.log(order_status)
    data = {
        order_id: order_id,
        order_status: status
    }
    console.log(data)
    fetch('http://127.0.0.1:5000/api/v1/parcels/order_id/status', {
        method: 'PUT',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
})

    .then((res) => res.json())
    .then(response => {
        console.log(response);
        if (response.message === 'status has been updated'){
            alert('status has been updated');
            window.location.replace('admin.html');
        } else {
            alert(response.message);
        }
    })
}
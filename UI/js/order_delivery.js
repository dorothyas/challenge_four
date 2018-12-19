function createOrder(){

    let parcel_type = document.getElementById('parcel_type').value;
    let weight = document.getElementById('weight').value;
    let receiver = document.getElementById('receiver').value;
    let pick_up = document.getElementById('pick_up').value;
    let destination = document.getElementById('destination').value;
    token = localStorage.getItem('token')

    const result = {"parcel_type":parcel_type, "weight":weight, "receiver":receiver, "pick_up":pick_up, "destination":destination};

    fetch('http://127.0.0.1:5000/api/v1/parcels', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
       
        cache: 'no-cache',
        body: JSON.stringify(result)
    })
        .then((res) => res.json())
        .then(result => { 
            alert(JSON.stringify(result))

            if (result.message = 'Order added'){
                window.location.href = 'user_profile.html';
            } else {
                window.location.href = 'order_delivery.html';
            }
            
        })
        
}


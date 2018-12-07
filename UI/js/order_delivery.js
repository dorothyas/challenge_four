function createOrder(){

    let parcel_type = document.getElementById('parcel_type').value;
    let weight = document.getElementById('weight').value;
    let receiver = document.getElementById('receiver').value;
    let pick_up = document.getElementById('pick_up').value;
    let destination = document.getElementById('destination').value;
    token = localStorage.getItem('token')

    const data = {"parcel_type":parcel_type, "weight":weight, "receiver":receiver, "pick_up":pick_up, "destination":destination};

    fetch('https://stargal-dorothy.herokuapp.com/api/v1/parcels', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
       
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(result => { 
            if (result.message === 'Order added'){
                window.location.href = 'index.html';
            } else {
                alert(result.message);
            }
            
        })
        
}
 

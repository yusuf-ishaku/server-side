let submit = document.querySelector(".submitpos")
if ('geolocation' in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        let long = document.querySelector(".long");
        long.innerText = `longitude: ${position.coords.longitude}`;
        let lat = document.querySelector(".lat");
        lat.innerText = `latitude: ${position.coords.latitude}`;
    });

    // let recievedData = [];
    submit.onclick = ()=>{
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position);
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude;
            let long = document.querySelector(".long");
            long.innerText = `longitude: ${position.coords.longitude}`;
            let lat = document.querySelector(".lat");
            lat.innerText = `latitude: ${position.coords.latitude}`;
            
           
            let data = { longitude , latitude };
            let options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json.collectedData)
        });
    
    }
   
} else {
    console.log("geolocation not available")
}

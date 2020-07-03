const countries = document.getElementsByClassName("countries");
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
 
    if (this.readyState == 4 && this.status ==200) {
        let data = JSON.parse(this.response);


       
        for (let i = 0;i< data.length;i++) {
            let button = document.createElement('button');
            button.innerHTML = data[i].name + " ";
            button.className = "btn btn-outline-secondary";
            countries[0].appendChild(button);
            
        }

        
    }

}

xhttp.open("GET", 'https://restcountries.eu/rest/v2/all', true);
xhttp.responseType = "JSON";//
xhttp.send();

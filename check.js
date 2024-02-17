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
  window.location.replace("redirect.html");
}
}
checkifopera();

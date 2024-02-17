function checkifopera()
{
  console.log(platform);
  if(platfrom.name=="Opera")
  {
  document.write("<h1>This website doesn't support Opera/GX</h1>");
setTimeout(function()
{
  window.location.replace("https://youtu.be/0NTl_SXSgd4?si=b3cUAS1yNpS-kUjl&t=10");
}, 10000)
  }
}
checkifopera();

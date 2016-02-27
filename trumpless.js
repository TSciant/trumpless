
var dict =
{
	"dictionary": {
		"lastNames": {
			"name": [
				"Rump",
				"Gump",
				"Dump",
				"Grump",
				"Stump"
			]
		},
		"firstNames": {
			"name": [
				"Donnie",
				"Seniór Donald",
				"Dingle Barry",
				"Grump"
			]
		}
	}
}

if(typeof jQuery == 'undefined' || typeof $ == 'undefined') 
{
	loadjscssfile('https://code.jquery.com/jquery-2.2.1.min.js','js')	
	setTimeout(function() {replaceName(); }, 5000);
}else{
   replaceName()
}

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
        setTimeout(function() {replaceName(); }, 5000);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function getRand(bottom, top) 
{
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;   
}





function replaceName()
{
  
	var min = 0;
	var max = dict.dictionary.lastNames.name.length -1;
	var rnd = getRand(min,max);
    var rndName= dict.dictionary.lastNames.name[rnd];

	
	$("body *").contents().each(
  function() 
  {
      if(this.nodeType==3)
      {
        this.nodeValue = this.nodeValue.replace(/Trump/g, rndName)
      }
  })

}






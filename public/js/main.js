download_video = function(d_tag){
    // bypasses cors
    var filename = d_tag.getAttribute("data-download");
    var url  = d_tag.getAttribute("data-url");
    console.log(filename);
    url = "https://ffk-cors-anywhere.herokuapp.com/"  + url;
    fetch(url)
    .then(res => {return res.blob()})
    .then(blob => {
        blob_url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = blob_url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url)
        })
}

//load_events = function (){
//    var a = document.getElementsByTagName("a");
//    for(var i=0 ; i<a.length; i++){
//        a[i].onclick = download_video(a[i].href);
//    }
//}


get_links = function(){
    var input = document.getElementById("url");
    var table = document.getElementById("links");	
    var yt_url =  input.value;

    // reset values
    table.innerHTML= "<tr><th>Quality</th><th>Download</th></tr>";
    input.value = "";
    var api_url = "https://ffk-ytd.herokuapp.com/api/info?url="  + yt_url;

    fetch(api_url)
    .then(data =>{return data.json()})
    .then(res => {
		var fmts = res.info.formats;
		console.log(fmts);
		for(var i= 0; i< fmts.length; i++){
			if(fmts[i].acodec != "none" && fmts[i].vcodec != "none"){	
		    	table.innerHTML += `<tr> ${fmts[i].format_note} </tr> <tr> <button target="_blank"  data-download="${res.info.title}.mp4" data-url=${fmts[i].url} onclick="download_video(this)">Download</button></tr>`
                console.log(fmts[i])
		    }
		}
        // load a tags
        //load_events();
		console.log(res.info)
	});

    //console.log("Submitted!");
}





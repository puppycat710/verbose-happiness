let videoFrame=document.getElementById("video-frame"),episodeInfo=document.getElementById("episode-info");document.body.addEventListener("click",function(e){var t,o,n;e.target.classList.contains("dublado-link")&&(e.preventDefault(),episodeInfo.textContent="",t=(e=e.target).getAttribute("data-src"),o=e.getAttribute("data-season"),n=e.getAttribute("data-episode"),e=e.getAttribute("data-title"),t?(videoFrame.src=t,episodeInfo.textContent=o+` - ${n}: `+e,document.title=e):console.error("Video source not found."))});
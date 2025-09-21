

function iconChange() {
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_00_delay-0.12s.png"; }, 0);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_01_delay-0.12s.png"; }, 120);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_02_delay-0.12s.png"; }, 240);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_03_delay-0.12s.png"; }, 360);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_04_delay-0.12s.png"; }, 480);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_05_delay-0.12s.png"; }, 600);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_06_delay-0.12s.png"; }, 720);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_07_delay-0.12s.png"; }, 840);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_08_delay-0.12s.png"; }, 960);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_09_delay-0.12s.png"; }, 1080);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_10_delay-0.12s.png"; }, 1200);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_11_delay-0.12s.png"; }, 1320);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_12_delay-0.12s.png"; }, 1440);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_13_delay-0.12s.png"; }, 1560);
    setTimeout(() => { document.getElementById("icon").href = "stuff/iconframes/frame_14_delay-0.12s.png"; }, 1680);
  }
  
  window.onload = function() {
    setInterval(iconChange, 2); 
  };

document.getElementById("stickman").onclick = function () {

    console.log("look at him go")
}
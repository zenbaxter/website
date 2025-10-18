




document.head = document.head || document.getElementsByTagName('head')[0];
function changeFavicon(src) {
    var link = document.createElement('link'), oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
    }
function animate(){
    if ( typeof animate.i == 'undefined' ) {
        animate.i = 0;
    }
    switch(animate.i) {
        case 0:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJUExURf8A/wAAAP8A/8uAdNsAAAABdFJOUwBA5thmAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+kJFRUxHSj+L8YAAAArSURBVAjXY2BAA6wOYEpAAAsFlWNkQKIYQ0MxBdEoFgdkCqvRUCpAhIEBAMN3Awj/rN5bAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
        case 1:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAM0lEQVQI12NgQAOsDiCSMWwpmIqMxEJB5bJCQRTTtChkwbBQLFTkVDCVCqVScVOhmQwMAL/CDt4RhiwjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
        case 2:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAOklEQVQI12NgQAOsDiCSMXQliGYMC8NCRULk0qY1gKipM8G8qUshSkKxUJFTkamwVGQKKpgKVQI0BQAgTBS5crfAXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMFQML7AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDAlUZcMAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA5LTIxVDIxOjQ5OjI5KzAwOjAwYsOTFAAAAABJRU5ErkJggg==");
            break;
        case 3:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAANUlEQVQI12NgQAOsDiCSMTTUAUxlBYCpqRMwqSiIXOqyBSBqaiZUJRYqDJVKxUJFQqgooCkAqycWMu8wKAkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDBUDC+wAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwJVGXDAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wOS0yMVQyMTo0OToyOSswMDowMGLDkxQAAAAASUVORK5CYII=");
            break;
        case 4:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAPUlEQVQI12NgQAOsDiCSMTTUAUIFgKmVYCosDAsVCZFLW7YARE2dCdEwFZkKg1JLIVQkRA6qEiqYCqGAggBCjxXFhSAsagAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMFQML7AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDAlUZcMAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA5LTIxVDIxOjQ5OjI5KzAwOjAwYsOTFAAAAABJRU5ErkJggg==");
            break;
        case 5:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAP0lEQVQI12NgQAOsDiCSMTTUAUIFgKioqWAqNRULBZWLigJTaUsngCmIvqkQuTAotRRCRYKp0GnIVFjYBJhKADHEFZ4/o7LeAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
        case 6:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAARElEQVQI12NgQAOsDiCSMTTUAUIFgMRWgim2MCwUVI41NRJMpS0FUzNDkSi2SKiGqSCKMywVLBcKURk6E0yFQbSDlAAAEbIU/SJqRXoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDBUDC+wAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwJVGXDAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wOS0yMVQyMTo0OToyOSswMDowMGLDkxQAAAAASUVORK5CYII=");
            break;
        case 7:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAP0lEQVQI12NgQAOsDiCSMTTUAUIFgMQgFNtSMMUZiYViW7oUrDItEkzNDEWi2KBK0iCCmVPB1FQUCioXBuQBABivFYD9U5P0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
        case 8:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAQUlEQVQI12NgQAOsDiCSMTTUAUIFgMRQKLGlYEoyEgsltnQpiBLNAvNEISrFIHKaaRDeyqlgDaHIlGYYREMYkAcAMOMWCPR7d3EAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDBUDC+wAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwJVGXDAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wOS0yMVQyMTo0OToyOSswMDowMGLDkxQAAAAASUVORK5CYII=");
            break;
        case 9:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAQ0lEQVQI12NgQAOsDiCSMTTUAUIFgMRWgim2MDAlhkKJQuREUyFU2lSIYCaIkoqECEKpNAg1DaI9dCoSJQU1LAzIAwAxahWboS79cAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMFQML7AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDAlUZcMAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA5LTIxVDIxOjQ5OjI5KzAwOjAwYsOTFAAAAABJRU5ErkJggg==");
            break;
        case 10:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAPklEQVQI12NgQAOsDmAyaiqIZk1NDcCgRKOmgqnIUDC1EkyJRYEpyUioHISCCMJUpqFQU6ciUWLTIIJhQB4Aa/MWhkfH4m0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDBUDC+wAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwJVGXDAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wOS0yMVQyMTo0OToyOSswMDowMGLDkxQAAAAASUVORK5CYII=");
            break;
        case 11:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAP0lEQVQI12NgQAOsDmAyNNQBTGUFgKmpExCUKIQSWwqWE42aGgARhPBCwdQyCBWJQqWhUFOnIlPTwIJi04A8AMkTF8dAWvHJAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
        case 12:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAO0lEQVQI12NgQAOsDmAyNNQBQgUgU1ETgJRoZmoCiJoGoUKXgqmVs8ByYWCVMCoShUpDoaZhocRmASkAaqQWTK4OThoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDktMjFUMjE6NDg6MzErMDA6MDBUDC+wAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwJVGXDAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wOS0yMVQyMTo0OToyOSswMDowMGLDkxQAAAAASUVORK5CYII=");
            break;
        case 13:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAPElEQVQI12NgQAOsDmAyNNQBQgWAqSwINXUCkBKFUpkQatqqAIggmFoF1iAaBqEiUag0FGrqVExKDEQBAMARGATCHOpaAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
        case 14:
            changeFavicon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVAgMAAAA/TvYGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURf8A/wAAAAAAAP8A/3EtSocAAAACdFJOUwAAdpPNOAAAAAFiS0dEAIgFHUgAAAAHdElNRQfpCRUVMR0o/i/GAAAAOUlEQVQI12NgQAOsDmAyNBREs4YtDQBRkZFIlCiUgsiJZoWCqWlTIYJTkQUjUag0FGrqVExKDEQBAFcHFtUFx+OZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIxVDIxOjQ4OjMxKzAwOjAwVAwvsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMVQyMTo0ODozMSswMDowMCVRlwwAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjFUMjE6NDk6MjkrMDA6MDBiw5MUAAAAAElFTkSuQmCC");
            break;
    }
    animate.i = (animate.i + 1) % 15;

}
setInterval(animate,60);

const main = document.getElementById('main-content');


(function setupFirstSlide() {
  const existingImg = document.getElementById('stickman');
  let startCount = 1;

  const wrapper = document.createElement('div');
  wrapper.style.height = '100vh';
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.justifyContent = 'center';
  wrapper.style.alignItems = 'center';

  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.flexWrap = 'wrap';
  row.style.justifyContent = 'center';
  row.style.alignItems = 'center';

  if (existingImg) {
    const existingP = existingImg.nextElementSibling?.tagName === 'P'
      ? existingImg.nextElementSibling
      : Object.assign(document.createElement('p'), { textContent: 'look at him go' });

    existingImg.className = 'stickman';
    existingImg.style.margin = '5px';
    row.appendChild(existingImg);

    existingP.textContent = 'look at him go';
    existingP.style.marginTop = '15px';
    existingP.style.textAlign = 'center';

    wrapper.appendChild(row);
    wrapper.appendChild(existingP);


    main.innerHTML = '';
    main.appendChild(wrapper);

    startCount = 2; // next slide will have 2
  } else {
    // no static man, create the first slide programmatically
    const img = document.createElement('img');
    img.src = 'stuff/dancing.gif';
    img.className = 'stickman';
    img.style.margin = '5px';
    row.appendChild(img);

    const p = document.createElement('p');
    p.textContent = 'look at him go';
    p.style.marginTop = '15px';
    p.style.textAlign = 'center';

    wrapper.appendChild(row);
    wrapper.appendChild(p);
    main.appendChild(wrapper);

    startCount = 2;
  }

  window.stickmanCount = startCount;
})();

// Infinite slides
function addContent(count = 1) {
  for (let i = 0; i < count; i++) {
    const wrapper = document.createElement('div');
    wrapper.style.height = '100vh';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';
    row.style.justifyContent = 'center';
    row.style.alignItems = 'center';

    for (let j = 0; j < window.stickmanCount; j++) {
      const img = document.createElement('img');
      img.src = 'stuff/dancing.gif';
      img.className = 'stickman';
      img.style.margin = '5px';
      row.appendChild(img);
    }

    const p = document.createElement('p');
    p.textContent = `look at ${window.stickmanCount} of them go`;
    p.style.marginTop = '15px';
    p.style.textAlign = 'center';

    wrapper.appendChild(row);
    wrapper.appendChild(p);
    main.appendChild(wrapper);

    window.stickmanCount++;
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    addContent(1);
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('stickman')) console.log('look at him go');
});

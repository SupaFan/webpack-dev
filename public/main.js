import './base.css';

;(function(win, doc) {
  var docEl = doc.documentElement;
  var docWidth;
  function showPage() {
    document.getElementsByClassName('wrapper')[0].style.display = "block"
  }
  function setRemUnit() {
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = !!isIphone || !!isAndroid || !!ipad
    if (isMobile) {
      docWidth = docEl.clientWidth ;
    } else {
      docWidth = docEl.clientWidth > 640 ? 640:docEl.clientWidth ;
    }
    var rem = docWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function() {
    setRemUnit();
    showPage();
  }, false);
  win.addEventListener('pageshow', function(e) {
    showPage();
    if (e.persisted) {
      setRemUnit();
    }
  }, false);
  setRemUnit();
  if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
    var testEl = doc.createElement('div');
    var fakeBody = doc.createElement('body');
    testEl.style.border = '0.5px solid transparent';
    fakeBody.appendChild(testEl);
    docEl.appendChild(fakeBody);
    if (testEl.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
})(window, document)

// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function() {
    // code here...

    result.innerHTML = "width x hieght = " + window.innerWidth + " x " + window.innerHeight;
});

let myWindow;

// open
btnWindows[1].addEventListener("click", function() {
    let width = window.prompt("Nhập chiều ngang của cửa sổ.");
    let height = window.prompt("Nhập chiều cao của cửa sổ.");
    myWindow = window.open(
        "",
        "New Window",
        "width=" + width + ",height=" + height
    );
    myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function() {
    // code here...
    myWindow.close();
    result.innerHTML = "Đã đóng";
});

// move to
btnWindows[3].addEventListener("click", function() {
    // code here...
    myWindow.moveTo(650, 50);
});

// resize to
btnWindows[4].addEventListener("click", function() {
    // code here...
    myWindow.resizeTo(400, 400);
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

// width x height
btnScreens[0].addEventListener("click", function() {
    // code here...
    result.innerHTML = screen.width + " x " + screen.height;

});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function() {
    // code here...
    result.innerHTML = screen.availWidth + " x " + screen.availHeight;
});

// colorDepth
btnScreens[2].addEventListener("click", function() {
    // code here...
    result.innerHTML = screen.colorDepth;
});

// Thử nghiệm các hàm xử lý location
// ========================================================================

// href
btnLocations[0].addEventListener("click", function() {
    // code here...
    result.innerHTML = location.href;
});

// hostname
btnLocations[1].addEventListener("click", function() {
    // code here...
    result.innerHTML = location.hostname;
});

// pathname
btnLocations[2].addEventListener("click", function() {
    // code here...
    result.innerHTML = location.pathname;
});

// protocal
btnLocations[3].addEventListener("click", function() {
    // code here...
    result.innerHTML = location.protocol;
});

// port
btnLocations[4].addEventListener("click", function() {
    // code here...
    result.innerHTML = location.port;
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

// back
btnHistories[0].addEventListener("click", function() {
    // code here...
    result.innerHTML = history.back();
});

// forward
btnHistories[1].addEventListener("click", function() {
    // code here...
    result.innerHTML = history.forward();
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function() {
    // code here...
    result.innerHTML = navigator.language;
});

// onLine
btnNavigators[1].addEventListener("click", function() {
    // code here...
    result.innerHTML = navigator.onLine;
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function() {
    // code here...
    result.innerHTML = navigator.cookieEnabled;
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

let timeoutId;
btnTimings[0].addEventListener("click", function() {
    // code here...
    let soGiayCho = Number(prompt("Nhập thời gian cần chờ: "));
    timeoutId = setTimeout(function() {
        result.innerHTML = "đã hết thời gian chờ!";
    }, soGiayCho * 1000);

});
btnTimings[1].addEventListener("click", function() {
    // code here...
    clearTimeout(timeoutId);
    result.innerHTML = "đã xóa timeOut";
});

let intervalId;
btnTimings[2].addEventListener("click", function() {
    // code here...
    fu
    // intervalId = setInterval(function, milliseconds)

});
btnTimings[3].addEventListener("click", function() {
    // code here...
});
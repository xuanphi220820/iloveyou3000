$(document).ready(function() {
    $("#header-plugin").load("https://vivinantony.github.io/header-plugin/", function() {
        $("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")
    });

    var love = setInterval(function() {
        var r_num = Math.floor(Math.random() * 4000) + 10;
        var r_size = Math.floor(Math.random() * 80) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 25) + 100;
        var r_time = Math.floor(Math.random() * 3) + 5;

        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        $('.heart').each(function() {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        });
    }, 500);

    //Chỉnh sửa phản hồi
    var messForYes = "Anh cũng thương em";
    var messForNo = "Câu trả lời không được chấp nhận";

    $("#sayYes").click(function() {
        $('.popup').toggleClass('active');
        $('.popup--content').prepend(`<h2>${messForYes}</h2><svg class="heart-symbol" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" /> 
            </svg>`);
    });

    $("#sayNo").click(function() {
        $('.popup').toggleClass('active');
        $('.popup--content')
            .prepend(
                `<h2>${messForNo}</h2>
                <svg class="angry-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zM136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9c2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9c-2.1 6.9-8.4 11.4-15.3 11.4c-.5 0-1.1-.2-1.7-.2c.7 2.7 1.7 5.3 1.7 8.2c0 17.7-14.3 32-32 32S136 257.7 136 240zm168 154.2c-27.8-33.4-84.2-33.4-112.1 0c-13.5 16.3-38.2-4.2-24.6-20.5c20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5zm76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2c-.6.1-1.1.2-1.7.2c-6.9 0-13.2-4.5-15.3-11.4c-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7c2.5 8.5-2.3 17.4-10.8 19.9z" fill="#ffcc4d"/></svg>`
            );
    });

    $(".popup--overlay").click(function() {
        $('.popup').toggleClass('active');
        $('.popup--content').children().remove();
    });

})
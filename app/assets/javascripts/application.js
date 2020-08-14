// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require bootstrap-sprockets
//= require froala_editor.min.js
//= require languages/ja.js
//= require plugins/align.min.js
//= require plugins/char_counter.min.js
//= require plugins/code_beautifier.min.js
//= require plugins/code_view.min.js
//= require plugins/colors.min.js
//= require plugins/emoticons.min.js
//= require plugins/entities.min.js
//= require plugins/file.min.js
//= require plugins/font_family.min.js
//= require plugins/font_size.min.js
//= require plugins/fullscreen.min.js
//= require plugins/image.min.js
//= require plugins/image_manager.min.js
//= require plugins/inline_style.min.js
//= require plugins/line_breaker.min.js
//= require plugins/link.min.js
//= require plugins/lists.min.js
//= require plugins/paragraph_format.min.js
//= require plugins/paragraph_style.min.js
//= require plugins/quick_insert.min.js
//= require plugins/quote.min.js
//= require plugins/save.min.js
//= require plugins/table.min.js
//= require plugins/url.min.js
//= require plugins/video.min.js
//= require_tree .

$(function () {
  $(".slide").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  $("#nav-toggle").on("click", function () {
    $("body").toggleClass("open");
  });

  // フェードイン
  // リストを非表示
  $(".fadein").hide();
  // 繰り返し処理
  $(".fadein").each(function (i) {
    // 遅延させてフェードイン
    $(this)
      .delay(800 * i)
      .fadeIn(1000);
  });

  // スクロールでトップに戻る
  // #back-to-topを消す
  $("#back-to-top").hide();

  // スクロールが十分された時に#back-to-topを表示。スクロールされたら非表示
  $(window).scroll(function () {
    // this(window要素)がどれだけスクロールしたかをscrollTop()を使って値を取る
    $("#pos").text($(this).scrollTop());
    if ($(this).scrollTop() > 60) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  //#back-to-topがクリックされたら上に戻る
  // animateメソッドを使用
  $("#back-to-top a").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  //ローディング画面
  window.onload = function () {
    const load = document.getElementById("loading");
    load.classList.add("loaded");
  };
});

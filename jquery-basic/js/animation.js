// $(function () {
//   id属性がfadeOutの要素がクリックされたら
//   $('#fadeOut').on('click', function () {
//     // $('.box').fadeOut(3000, function () {
//     //   alert('fadeOut完了');
//     // });

//     // フェードアウトする
//     // $('.box').fadeOut();

//   });
//   // id属性がfadeInの要素がクリックされたら
//   $('#fadeIn').on('click', function () {
//     // $('.box').fadeIn();
//   });

//   // id属性がfadeToggleの要素がクリックされたら
//   // $('#fadeToggle').on('click', function () {
//   //   // フェードイン or フェードアウトする
//   //   $('.box').fadeToggle();
//   // });

//   $('#slideUp').on('click', function () {
//     $('.box').slideUp();
//   });
//   $('#slideDown').on('click', function () {
//     $('.box').slideDown();
//   });
//   $('#slideToggle').on('click', function () {
//     $('.box').slideToggle();
//   });
// });

// $(セレクタ).fadeOut(スピード, コールバック関数);
// - スピード：どれくらいの時間をかけてアニメーション（ここではフェードアウト）を行うか（ミリ秒指定。ミリ秒＝1000分の1秒＝0.001秒）
// - コールバック関数：引数として渡される関数のこと（ここではフェードアウトの完了後に実行する関数のこと）

// id属性がfadeOutの要素がクリックされたら
$(function () {
  $('#fadeOut').on('click', function () {
    // 不透明度を0にする（フェードアウトする）
    $('.box').css('opacity', 0);
  });

  $('#fadeIn').on('click', function () {
    // 不透明度を1にする（フェードインする）
    $('.box').css('opacity', 1);
  });

  $('#slideUp').on('click', function () {
    // 高さを0にする（スライドアップする）
    $('.box').css('height', 0);
  });

  $('#slideDown').on('click', function () {
    // 高さを200にする（スライドダウンする）
    $('.box').css('height', 200);
  });
});

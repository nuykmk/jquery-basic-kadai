//on()メソッドの書き方
// $(要素).on(イベント, () => {
//   // 処理
// });

// $(function () {
//   // ボタンがクリックされた場合
//   $('button').on('click', function () {
//     console.log('ボタンがクリックされました');
//   });
// });

// $(要素).on({
//   イベント1: () => {
//     /* イベント1が発生したときの処理 */
//   },
//   イベント2: () => {
//     /* イベント2が発生したときの処理 */
//   },
// });
// $(function () {
//   $('div').on({
//     click: () => {
//       // 背景を赤
//       $('div').css('background-color', 'red');
//       // テキストを「click」
//       $('div').text('click');
//     },
//     dblclick: () => {
//       // 背景を緑
//       $('div').css('background-color', 'green');
//       // テキストを「dblclick」
//       $('div').text('dblclick');
//     },
//     mouseenter: () => {
//       // 背景を青
//       $('div').css('background-color', 'blue');
//       // テキストを「mouseenter」
//       $('div').text('mouseenter');
//     },
//     mouseout: () => {
//       // 背景をグレー
//       $('div').css('background-color', 'gray');
//       // テキストを「mouseout」
//       $('div').text('mouseout');
//     },
//   });
// });

// typeプロパティ;
$(function () {
  $(document).on('click keydown', (e) => {
    // クリックされた場合
    if (e.type === 'click') {
      $('div').text('クリックされました！');
    }
    // キーが押された場合
    if (e.type === 'keydown') {
      $('div').text('キーが押されました！');
    }
  });
});

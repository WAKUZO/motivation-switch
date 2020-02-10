let persons = ['本田圭佑','イチロー','マイケル・ジョーダン','マコなり社長','稲盛和夫','スティーブ・ジョブズ','堀江貴文','GACKT','ボブ・マーリー','島田紳助','武田信玄','坂本龍馬','織田信長','トーマス・エジソン','ピーター・ドラッガー','ダーウィン','錦織圭','孫正義','美輪明宏','為末大']

$(function(){
  
  $('#button').on('click',function(){
    
    $('.main__center__image').animate( { width: 'show' },4000 );
    
    
    $('.footer__message').css({
          
          opacity:"0.0"
      }).animate({
          
          opacity:"1.0"
      },9000);
    
    $('.main__center').css({
      
      opacity:"0.0"
      }).animate({
          
          opacity:"1.0"
      },10000);

    $('.main__center__left__name').animate({
      opacity: 100
      }, 90000);

    $('.main__center__left__work').animate({
        opacity: 100
        }, 90000);
    

    // BGM
    $('#audio').get(0).play();


    // ボタン
    if ($(this).text() === "RELOAD") {
      $(this).text("START");
    } else {
      $("#button").text("START");
      $(this).text("RELOAD");
    }

  });  


  // アコーディオン
  $('.js-menu__item__link').each(function(){
    $(this).on('click',function(){
        $("+.submenu",this).slideToggle(200);
        return false;
    });
  });

  
  // 検索
  let list=$("#list");

  function appendlist(word){
    let item=$('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result="^"+element;
    return result;
  }
  
  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(persons,function(i, person){
      if(person.match(reg)){
        appendlist(person);
      }
    });
      if($(".list").length===0){
        appendlist("いません");
      }
    });



    //いいね
  $('.LikesIcon').on('click', function() {
    let $btn = $(this);
    // Likeボタンがonクラス持っていたら
    if ($btn.hasClass('on')) {

      $btn.removeClass('on');

      // 白抜きアイコンに戻す
      $btn.children("i").attr('class', 'far.fa-star.LikesIcon-fa-star');

    } else {

      $btn.addClass('on');

      // ポイントは2つ！！
      // ①アイコンを変更する
      // far fa-heart（白抜きアイコン）
      // ⇒ fas fa-heart（背景色つきアイコン）
      // ②アニメーション+アイコン色変更用のheartクラスを付与する

      $btn.children("i").attr('class', 'fas fa-star LikesIcon-fa-star star');

    }
  });
  
});











$(document).ready(function(){

  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    // let sum = subject_points[0];
    // sum = sum + subject_points[1];
    // sum = sum + subject_points[2];
    // sum = sum + subject_points[3];
    // sum = sum + subject_points[4];


    // 追加課題文
    let sum = subject_points.reduce(function(a,b){
      return a + b;
    });
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let avarage = sum / subject_points.length;
    $("#avarage_indicate").text(avarage);

  };


  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
      let avarage = $("#avarage_indicate").text();
      // console.log(avarage);

      if(avarage >= 80){
        return "A"
      }else if(avarage >= 60 && avarage < 80){
        return "B"
      }else if(avarage >= 40 && avarage < 60){
        return "C"
      }else{
        return "D"
      }

  };



  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let subject_points = [$('#national_language').val(),
                          $('#english').val(),
                          $('#mathematics').val(),
                          $('#science').val(),
                          $('#society').val()
                          ];
    let judge = "合格";
    let number = subject_points.length;
    // console.log(number);教科数取得OK


    for(let i = 0;i < number.length;i++){
      if(subject_points[i] < 60){
        return "不合格";
        break;
      }
    }
    return judge;
  };

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    let i = get_achievement();
    let n = get_pass_or_failure();
    console.log(i);
    console.log(n)


    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#alert-indicate').remove();//追加課題２：考え方として1回目は値がないのでスルー2回目に押された時に削除されればいい。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${i}です。${n}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  //get_achievementの要素を表示するセレクタ（この場合は#evaluation）を持ってきてget_achivementをテキストで取得する
  $('#btn-evaluation').click(function() {
    $('#evaluation').text(get_achievement());
  });

  $('#btn-judge').click(function() {
   $('#judge').text(get_pass_or_failure());
 });

 $('#btn-declaration').click(function() {
   judgement();
 });
});

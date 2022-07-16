document.getElementById('btntinh4').onclick = function () {
     //input
     var canh1 = Number(document.getElementById('canh1').value);
     var canh2 = Number(document.getElementById('canh2').value);
     var canh3 = Number(document.getElementById('canh3').value);

     //output
     var ketQua = '';
     
//Xu li
     var a = Math.pow(canh1, 2);
    var b = Math.pow(canh2, 2);
    var c = Math.pow(canh3, 2);
    var d = Number((a + b) - c);
    var e = Number((c + b) - a);
    var f = Number(( a + c) - b);

    var saiLam = document.getElementById('txtResult4');
    if(canh1 ===0 || canh2 ===0 || canh3 ===0){
        return saiLam.innerHTML = '<div class="text-danger">Bạn cần nhập đủ dữ liệu</div>';
    }
    if (canh1 === canh2 && canh3 === canh1) {
        ketQua = 'Tam giác đều';
    }else if (d === 0 || e === 0 || f === 0) {
        ketQua = 'Tam giác vuông';

    }else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
        ketQua = 'Tam giác cân';
    }else{
        ketQua = 'Tam giác thường';

    }
    document.getElementById('txtResult4').innerHTML = ketQua;
}
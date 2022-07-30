document.getElementById('btntinh').onclick = function () {
    //input
    var soThu1 = Number(document.getElementById('sothu1').value);
    var soThu2 = Number(document.getElementById('sothu2').value);
    var soThu3 = Number(document.getElementById('sothu3').value);

    var ketQua = '';

    if (soThu1 > soThu2 && soThu1 > soThu3) {
        ketQua = soThu3 + '<' + soThu2 + '<' + soThu1;
    }else if (soThu1 > soThu2 && soThu3 > soThu2) {
        ketQua = soThu2 + '<' + soThu3 + '<' + soThu1;
    }else if (soThu1 > soThu2 && soThu3 > soThu1) {
        ketQua = soThu2 + '<' + soThu1 + '<' + soThu3;
    }else if (soThu2 > soThu1 && soThu2 > soThu3) {
        ketQua = soThu1 + '<' + soThu3 + '<' + soThu2;
    }else if (soThu2 > soThu3 && soThu3 > soThu1) {
        ketQua = soThu1 + '<' + soThu3 + '<' + soThu2;
    }else {
        ketQua = soThu1 + '<' + soThu2 + '<' + soThu3;
    }

    document.getElementById('txtResult').innerHTML = ketQua;
}
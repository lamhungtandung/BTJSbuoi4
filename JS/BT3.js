document.getElementById('out').onclick = function() {
    //input
    var number1 = Number(document.getElementById('isso1').value);
    var number2 = Number(document.getElementById('isso2').value);
    var number3 = Number(document.getElementById('isso3').value);


    //output
    var ketQua = '';

   //xu li
    var ketQua1 = '';
    var ketQua2 = '';

    var i = 0;
    var u = 0;
    if (number1 % 2 === 0) {
        i++;
    } else {
        u++;
    }
    if (number2 % 2 === 0) {
        i++;
    } else {
        u++;
    }
    if (number3 % 2 === 0) {
        i++;
    } else {
        u++;
    }
    if (u === 1) {
        ketQua1 = 'Có 1 số lẻ';
    } else if (u === 2) {
        ketQua1 = 'Có 2 số lẻ'
    } else if (u === 3) {
        ketQua1 = 'Có 3 số lẻ'
    } else if (u === 0) {
        ketQua1 = 'Có 0 số lẻ'
    }


    if (i === 1) {
        ketQua2 = 'Có 1 số chẵn';
    } else if (i === 2) {
        ketQua2 = 'Có 2 số chẵn';
    } else if (i === 3) {
        ketQua2 = 'Có 3 số chẵn';
    } else if (i === 0) {
        ketQua2 = 'Có 0 số chẵn';
    }
    ketQua = ketQua1 + ' , ' + ketQua2;
    document.getElementById('txtResult3').innerHTML = ketQua;
};
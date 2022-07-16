document.getElementById('btntinh2').onclick = function() {
    var thanhVien = Number(document.getElementById('DD').value);
    var ketQua = '';

    if (thanhVien === 1) {
        ketQua = '<div class="text-success">Xin chào :Ba</div>';
    } else if (thanhVien === 2) {
        ketQua = '<div class="text-success">Xin chào :Mẹ </div>';
    } else if (thanhVien === 3) {
        ketQua = '<div class="text-success">Xin chào :Anh</div>';
    } else if (thanhVien === 4) {
        ketQua = '<div class="text-success">Xin chào :Em</div>';
    } else if (thanhVien === 0) {
        ketQua = '<div class="text-danger">Chua chon kia!</div>';
    }

    document.getElementById('txtResult2').innerHTML = ketQua;
}
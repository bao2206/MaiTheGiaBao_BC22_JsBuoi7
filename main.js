//Bài 1

document.getElementById("btnTinh").onclick = function () {
  var s = 0;
  for (var i = 1; s < 10000; i++) {
    s += i;
  }

  document.getElementById("footerTinh").innerHTML =
    "Só nguyên dương nhỏ nhất: " + (i - 1);
};

//Bài 2

function tinhTongSoMu(x, n) {
  var sum = 0;
  var luyThua = 1;
  for (var i = 1; i <= n; i++) {
    luyThua *= x;
    sum += luyThua;
  }
  return sum;
}

document.getElementById("btnTinhLuyThua").onclick = function () {
  var so = document.getElementById("txtSo").value * 1;
  var mu = document.getElementById("txtSoMu").value * 1;

  var tongSoMu = tinhTongSoMu(so, mu);
  // console.log(tongSoMu);
  document.getElementById("footerTinhLuyThua").innerHTML =
    "Lũy thừa: " + tongSoMu;
};

//Bài 3
function tinhGiaiThua(x) {
 var facatorial = 1;
  for (var i = 1; i <= x; i++) {
    facatorial *= i;
  }

  return facatorial;
}

document.getElementById("btnTinhGiaiThua").onclick = function () {
  var x = document.getElementById("txtGiaiThua").value * 1;
  var giaiThua = tinhGiaiThua(x);

  document.getElementById("footerTinhGiaiThua").innerHTML = giaiThua;
};


// Bài 4


function div_crea() {

    var kq ='';
    for(var i = 1; i < 11; i++ )
    {
        if(i % 2 == 0)
            kq += "<div class ='bg-danger'> Div chẵn " + i + "</div>"; 
        else 
        kq += "<div class ='bg-primary'> Div lẻ " + i + "</div>"; 
    }   

    document.getElementById("inChanLe").innerHTML = kq;
}

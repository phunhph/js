// gọi api lấy dữ liệu.
fetch("http://localhost:8080/staffs")
  //lấy json.parse  ---> javascript types
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    // chuyển đổi dữ liệu thành mảng và lấy phần tử
    var name = posts.map(function (posts) {
      return `${posts.name}`;
    });
    //đưa tên của tường đối tượng ra ngoài
    var i = 0;
    name.forEach((element) => {
      document.getElementById("name" + (i + 1)).innerHTML = name[i];
      i++;
    });
    // đổi toàn bộ dữ liệu cho sự kiên click để hiển thị thông tin
    var name1 = posts.map(function (posts) {
      return `Họ và tên: 
      ${posts.name}
      `;
    });
    var doB = posts.map(function (posts) {
      return `Ngày sinh: 
      ${posts.doB}
      `;
    });
    var vao = posts.map(function (posts) {
      return `Ngày vào công ty: 
      ${posts.startDate}
      `;
    });
    var pb = posts.map(function (posts) {
      return `Phòng ban: 
      ${posts.departmentId}
      `;
    });
    var nghi = posts.map(function (posts) {
      return `Số ngày nghỉ còn lại: 
      ${posts.annualLeave}
      `;
    });
    var them = posts.map(function (posts) {
      return `Số ngày đã làm thêm: 
      ${posts.overTime}
      `;
    });
    //đưa dữ liệu ra màn hình cho từng nhân viên khi click vào nhân viên đó
    // với số lượng cố định không thay đổi
    var click;
    click = document.getElementById("member1");
    click.onclick = conten;
    function conten() {
      document.getElementById("name").innerHTML = name1[0];
      document.getElementById("doB").innerHTML = doB[0];
      document.getElementById("vao").innerHTML = vao[0];
      document.getElementById("pb").innerHTML = pb[0];
      document.getElementById("nghi").innerHTML = nghi[0];
      document.getElementById("them").innerHTML = them[0];
    }
    click = document.getElementById("member2");
    click.onclick = conten1;
    function conten1() {
      document.getElementById("name").innerHTML = name1[1];
      document.getElementById("doB").innerHTML = doB[1];
      document.getElementById("vao").innerHTML = vao[1];
      document.getElementById("pb").innerHTML = pb[1];
      document.getElementById("nghi").innerHTML = nghi[1];
      document.getElementById("them").innerHTML = them[1];
    }
    click = document.getElementById("member3");
    click.onclick = conten2;
    function conten2() {
      document.getElementById("name").innerHTML = name1[2];
      document.getElementById("doB").innerHTML = doB[2];
      document.getElementById("vao").innerHTML = vao[2];
      document.getElementById("pb").innerHTML = pb[2];
      document.getElementById("nghi").innerHTML = nghi[2];
      document.getElementById("them").innerHTML = them[2];
    }
    click = document.getElementById("member4");
    click.onclick = conten3;
    function conten3() {
      document.getElementById("name").innerHTML = name1[3];
      document.getElementById("doB").innerHTML = doB[3];
      document.getElementById("vao").innerHTML = vao[3];
      document.getElementById("pb").innerHTML = pb[3];
      document.getElementById("nghi").innerHTML = nghi[3];
      document.getElementById("them").innerHTML = them[3];
    }
    click = document.getElementById("member5");
    click.onclick = conten4;
    function conten4() {
      document.getElementById("name").innerHTML = name1[4];
      document.getElementById("doB").innerHTML = doB[4];
      document.getElementById("vao").innerHTML = vao[4];
      document.getElementById("pb").innerHTML = pb[4];
      document.getElementById("nghi").innerHTML = nghi[4];
      document.getElementById("them").innerHTML = them[4];
    }
    click = document.getElementById("member6");
    click.onclick = conten5;
    function conten5() {
      document.getElementById("name").innerHTML = name1[5];
      document.getElementById("doB").innerHTML = doB[5];
      document.getElementById("vao").innerHTML = vao[5];
      document.getElementById("pb").innerHTML = pb[5];
      document.getElementById("nghi").innerHTML = nghi[5];
      document.getElementById("them").innerHTML = them[5];
    }
    click = document.getElementById("member7");
    click.onclick = conten6;
    function conten6() {
      document.getElementById("name").innerHTML = name1[6];
      document.getElementById("doB").innerHTML = doB[6];
      document.getElementById("vao").innerHTML = vao[6];
      document.getElementById("pb").innerHTML = pb[6];
      document.getElementById("nghi").innerHTML = nghi[6];
      document.getElementById("them").innerHTML = them[6];
    }
    click = document.getElementById("member8");
    click.onclick = conten7;
    function conten7() {
      document.getElementById("name").innerHTML = name1[7];
      document.getElementById("doB").innerHTML = doB[7];
      document.getElementById("vao").innerHTML = vao[7];
      document.getElementById("pb").innerHTML = pb[7];
      document.getElementById("nghi").innerHTML = nghi[7];
      document.getElementById("them").innerHTML = them[7];
    }
    click = document.getElementById("member9");
    click.onclick = conten8;
    function conten8() {
      document.getElementById("name").innerHTML = name1[8];
      document.getElementById("doB").innerHTML = doB[8];
      document.getElementById("vao").innerHTML = vao[8];
      document.getElementById("pb").innerHTML = pb[8];
      document.getElementById("nghi").innerHTML = nghi[8];
      document.getElementById("them").innerHTML = them[8];
    }
    click = document.getElementById("member10");
    click.onclick = conten9;
    function conten9() {
      document.getElementById("name").innerHTML = name1[9];
      document.getElementById("doB").innerHTML = doB[9];
      document.getElementById("vao").innerHTML = vao[9];
      document.getElementById("pb").innerHTML = pb[9];
      document.getElementById("nghi").innerHTML = nghi[9];
      document.getElementById("them").innerHTML = them[9];
    }
    click = document.getElementById("member11");
    click.onclick = conten10;
    function conten10() {
      document.getElementById("name").innerHTML = name1[10];
      document.getElementById("doB").innerHTML = doB[10];
      document.getElementById("vao").innerHTML = vao[10];
      document.getElementById("pb").innerHTML = pb[10];
      document.getElementById("nghi").innerHTML = nghi[10];
      document.getElementById("them").innerHTML = them[10];
    }
    click = document.getElementById("member12");
    click.onclick = conten11;
    function conten11() {
      document.getElementById("name").innerHTML = name1[11];
      document.getElementById("doB").innerHTML = doB[11];
      document.getElementById("vao").innerHTML = vao[11];
      document.getElementById("pb").innerHTML = pb[11];
      document.getElementById("nghi").innerHTML = nghi[11];
      document.getElementById("them").innerHTML = them[11];
    }
    click = document.getElementById("member13");
    click.onclick = conten12;
    function conten12() {
      document.getElementById("name").innerHTML = name1[12];
      document.getElementById("doB").innerHTML = doB[12];
      document.getElementById("vao").innerHTML = vao[12];
      document.getElementById("pb").innerHTML = pb[12];
      document.getElementById("nghi").innerHTML = nghi[12];
      document.getElementById("them").innerHTML = them[12];
    }
    click = document.getElementById("member14");
    click.onclick = conten13;
    function conten13() {
      document.getElementById("name").innerHTML = name1[13];
      document.getElementById("doB").innerHTML = doB[13];
      document.getElementById("vao").innerHTML = vao[13];
      document.getElementById("pb").innerHTML = pb[13];
      document.getElementById("nghi").innerHTML = nghi[13];
      document.getElementById("them").innerHTML = them[13];
    }
    click = document.getElementById("member15");
    click.onclick = conten14;
    function conten14() {
      document.getElementById("name").innerHTML = name1[14];
      document.getElementById("doB").innerHTML = doB[14];
      document.getElementById("vao").innerHTML = vao[14];
      document.getElementById("pb").innerHTML = pb[14];
      document.getElementById("nghi").innerHTML = nghi[14];
      document.getElementById("them").innerHTML = them[14];
    }
    click = document.getElementById("member16");
    click.onclick = conten15;
    function conten15() {
      document.getElementById("name").innerHTML = name1[15];
      document.getElementById("doB").innerHTML = doB[15];
      document.getElementById("vao").innerHTML = vao[15];
      document.getElementById("pb").innerHTML = pb[15];
      document.getElementById("nghi").innerHTML = nghi[15];
      document.getElementById("them").innerHTML = them[15];
    }
    //theo số lượng có thế thay đổi
  })
  //báo lỗi api
  .catch((error) => {
    alert(error);
  });

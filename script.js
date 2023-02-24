//sử dụng fetch để lấy dữ liều từ BE qua api
fetch("http://localhost:8080/staffs")
  .then(function (response) {
    return response.json();
  })
  //chuyển đổi dữ liệu sang kiểu mảng và đưa các thông tin ban đầu ra ngoài màn hình
  .then(function (post) {
    post.forEach((element) => {
      let data = document.createElement("div");
      let name = document.createElement("p");
      let img = document.createElement("img");
      img.innerHTML = element.image;
      name.innerHTML = element.name;
      //đưa ra màn hình
      document.getElementById("main").append(data);
      //do ảnh lỗi nên không hiển thị
      //không biết cách đẩy trực tiếp link ảnh vào thẻ img
      //không muốn sửa BE
      data.append(img);
      //hiển thị tên từng nhân viên
      data.append(name);
      //khởi tạo sự kiện onclick
      data.onclick = Show;
      //lấy id đối tượng sảy ra sự kiện onclick
      data.id = element.id;
    });
    function Show(event) {
      //sử dụng forEach để lấy đối tựng id đi xét nếu trùng với id của sự kiện onclick thì hiểu thị ra màn hình
      post.forEach((element) => {
        if (element.id == event.target.id) {
          document.getElementById("name").innerHTML = element.name;
          document.getElementById("doB").innerHTML = element.doB;
          document.getElementById("vao").innerHTML = element.startDate;
          document.getElementById("pb").innerHTML = element.departmentId;
          document.getElementById("nghi").innerHTML = element.annualLeave;
          document.getElementById("them").innerHTML = element.overTime;
        }
      });
    }
  })
  // hiển thị khi API sặp phải sự cố
  .catch((error) => {
    alert(error);
  });
alert("do ảnh không có nên click phẩn trên của tên để hiện thị thông tin");
alert(
  "vì sự kiện onclick được khởi tạo vào thẻ div chứ không khởi tạo vào thẻ p hiển thị tên nhân viên"
);

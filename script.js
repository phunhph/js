// gọi api lấy dữ liệu.
fetch("http://localhost:8080/staffs")
  //lấy json.parse  ---> javascript types
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    // chuyển đổi dữ liệu thành mảng và lấy phần tử
    posts.forEach((element) => {
      let a = document.createElement("div");
      a.innerHTML = element.name;
      a.id = element.id;
      a.onclick = ShowStaff;
      document.getElementById("main").append(a);
    });
    function ShowStaff(event) {
      posts.forEach((element) => {
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
  //báo lỗi api
  .catch((error) => {
    alert(error);
  });

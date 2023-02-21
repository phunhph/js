// gọi api lấy dữ liệu.
fetch("http://localhost:8080/staffs")
  //lấy json.parse  ---> javascript types
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    var hamls = posts.map(function (posts) {
      return `
      ${posts.name}
      ${posts.doB}
      ${posts.salaryScale}
      ${posts.startDate}
      ${posts.departmentId}
      ${posts.annualLeave}
      ${posts.overTime}
      ${posts.image}`;
    });
    console.log(posts[0]);
    var a = document.getElementById("p");
    a.innerHTML = hamls[0];
  })
  //báo lỗi api
  .catch((error) => {
    alert(error);
  });

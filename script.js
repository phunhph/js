// //khởi tạo sự kiện click theo js
// const cl1 = document.querySelector("#add");
// cl1.onclick = function () {
//   console.log("asas");
// };
// cl1.addEventListener("click", add);
// // gỡ sự kiện onclick
// cl1.removeEventListener("click", add);
// // khởi tạo sự kiên click theo jquery
// const button = $("#add");
// button.on("click", function () {
//   console.log("abc");
// });
// // gỡ sự kiên onclick jquery
// button.off("click", function () {
//   console.log("abc");
// });
// khởi tạo sự kiện onclick và nhần dữ liệu từ màn hình
const clickAdd = $("#add");
clickAdd.on("click", Add);
function Add() {
  //khởi tạo bảng
  let tr1 = $("<tr>");
  $("tbody").append(tr1);
  let tdName = $("<td>");
  $(tr1).append(tdName);
  let tdDate = $("<td>");
  $(tr1).append(tdDate);
  let tdToan = $("<td>");
  $(tr1).append(tdToan);
  let tdLy = $("<td>");
  $(tr1).append(tdLy);
  let tdHoa = $("<td>");
  $(tr1).append(tdHoa);
  let tdTB = $("<td>");
  $(tr1).append(tdTB);
  let tdHL = $("<td>");
  $(tr1).append(tdHL);
  // lấy dữ liệu từ màn hình được nhập theo yêu cầu
  let name = $("#name");
  let ngaySinh = $("#date");
  let toan = $("#toan");
  let ly = $("#ly");
  let hoa = $("#hoa");
  var TtInput = {
    name: name[0].value,
    ngaySinh: ngaySinh[0].value,
    toan: toan[0].value,
    ly: ly[0].value,
    hoa: hoa[0].value,
    DIemTrungBinh: function () {
      let AVG = (toan[0].value - -ly[0].value - -hoa[0].value) / 3;
      return AVG;
    },
    HocLuc: function () {
      if (this.DIemTrungBinh() >= 9) {
        return "Xuất sắc";
      } else if (this.DIemTrungBinh >= 8) {
        return "Giỏi";
      } else if (this.DIemTrungBinh >= 6.5) {
        return "Khá";
      } else if (this.DIemTrungBinh >= 5) {
        return "Trung bình";
      } else {
        return "Yếu";
      }
    },
  };
  var data = new Array(TtInput);
  data.forEach((element) => {
    tdName.text(element.name);
    tdDate.text(element.ngaySinh);
    tdToan.text(element.toan);
    tdLy.text(element.ly);
    tdHoa.text(element.hoa);
    tdTB.text(element.DIemTrungBinh());
    tdHL.text(element.HocLuc());
  });
}

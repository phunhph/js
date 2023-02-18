//khởi tạo hàm chữa dữ liệu chuyền vào
//tạo sự kiện onclick nhận dữ liệu đầu vào
var clickA = document.getElementById("add");
clickA.onclick = AddDate;
var index = 1;
function AddDate() {
  let tbody = document.getElementById("tbody");
  console.log(tbody);
  //tạo một hàng trong bảng
  let tr1 = document.createElement("tr");
  let tdHoTen = document.createElement("td");
  let tdNgaysinh = document.createElement("td");
  let tdDiemToan = document.createElement("td");
  let tdDiemLY = document.createElement("td");
  let tdDiemHoa = document.createElement("td");
  var tdDiemTB = document.createElement("td");
  var tdHocLuc = document.createElement("td");
  // thêm ô vào hàng đã được tạo
  tbody.append(tr1);
  tr1.append(tdHoTen);
  tr1.append(tdNgaysinh);
  tr1.append(tdDiemToan);
  tr1.append(tdDiemLY);
  tr1.append(tdDiemHoa);
  tr1.append(tdDiemTB);
  tr1.append(tdHocLuc);
  //lấy dữ liệu và đưa dữ liệu vào bang
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let toan = document.getElementById("toan").value;
  let ly = document.getElementById("ly").value;
  let hoa = document.getElementById("hoa").value;
  //Khởi tạo class với các thuộc tính và phương thức cần thiết
  //sự dụng oop khởi tạo đối tượng mang thông tin được nhập từ bàn phím
  let dL = {
    name: name,
    date: date,
    toan: toan,
    ly: ly,
    hoa: hoa,
    DIemTrungBinh: function () {
      let AVG = (toan - -ly - -hoa) / 3;
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
  var data = new Array(dL);
  data.forEach((element) => {
    tdHoTen.innerHTML = element.name;
    tdNgaysinh.innerHTML = element.date;
    tdDiemToan.innerHTML = element.toan;
    tdDiemLY.innerHTML = element.ly;
    tdDiemHoa.innerHTML = element.hoa;
    tdDiemTB.innerHTML = element.DIemTrungBinh();
    tdHocLuc.innerHTML = element.HocLuc();
  });
}

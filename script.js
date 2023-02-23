//khởi tạo sự kiện onclick nhập dữ liệu vào bảng
var ClickA = document.getElementById("add");
ClickA.onclick = Addrow;
var index = 1;
var list = [];
function Addrow() {
  //khởi tạo hàng nhập dữ liệu
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  //khởi tạo cách ô trong hàng để nhẫn dữ kiệu
  let tdHoTen = document.createElement("td");
  let tdNgaySinh = document.createElement("td");
  let tdToan = document.createElement("td");
  let tdLy = document.createElement("td");
  let tdHoa = document.createElement("td");
  var tdDtb = document.createElement("td");
  var tdHL = document.createElement("td");
  // thêm ô vào hàng đã được tạo
  tbody.append(tr);
  tr.append(tdHoTen);
  tr.append(tdNgaySinh);
  tr.append(tdToan);
  tr.append(tdLy);
  tr.append(tdHoa);
  tr.append(tdDtb);
  tr.append(tdHL);
  //tạo id cho từng hàng và ô
  tr.id = index;
  tdToan.id = "Dtoan" + index;
  tdLy.id = "Dly" + index;
  tdHoa.id = "Dhoa" + index;
  tdDtb.id = "Dtb" + index;
  tdHL.id = "HL" + index;
  index++;
  //lấy dữ liệu, lưu dữ liệu , hiển thị dữ liệu toán lý hoá vào bảng
  let name = document.getElementById("name").value;
  tdHoTen.innerHTML = name;
  let ngaySinh = document.getElementById("date").value;
  tdNgaySinh.innerHTML = ngaySinh;
  let toan = document.getElementById("toan").value;
  tdToan.innerHTML = toan;
  let ly = document.getElementById("ly").value;
  tdLy.innerHTML = ly;
  let hoa = document.getElementById("hoa").value;
  tdHoa.innerHTML = hoa;
  //mảng lưu giá trị khi nhập
  var date = {
    toan,
    ly,
    hoa,
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
  //mảng lưu toàn bộ dữ liệu đã nhập
  list[index] = date;
}
//khởi tạo sự kiện xác nhận điểm tb
var ClickTB = document.getElementById("avg");
ClickTB.onclick = DIemTrungBinh;
var i = 1;
function DIemTrungBinh() {
  list.forEach((element) => {
    document.getElementById("Dtb" + i).innerHTML = element.DIemTrungBinh();
    i++;
  });
}
//khởi tạo sự kiên xác nhận học lực
var ClickHL = document.getElementById("confirm");
ClickHL.onclick = HocLuc;
var h = 1;
function HocLuc() {
  list.forEach((element) => {
    document.getElementById("HL" + h).innerHTML = element.HocLuc();
    h++;
  });
}

//data
var nhanVien1 = new NhanVien(
  "ngo tien dat",
  "ngotiendat",
  "20/05/1997",
  "123456",
  "ngotiendat345@gmail.com",
  "nhanVien",
  "3500000",
  "190",
  "123abc"
);
var nhanVien2 = new NhanVien(
  "ngo bao dai",
  "ngobaodai",
  "20/05/1998",
  "123456",
  "ngobaodat345@gmail.com",
  "nhanVien",
  "3500000",
  "208",
  "124abc"
);

var themNhanVienBTN = document.getElementById("btnThemNV");
//var resetBTn = document.getElementById("resetBTn");
var tbodyNhanVien = document.getElementById("tableDanhSach");
var btnSearch = document.getElementById("btnTimNV");
var btnCapNhat = document.getElementById("btnCapNhat");
var btnDong = document.getElementById("btnDong");
var btnThem = document.getElementById("btnThem");

//var tbodyNhanVien = document.getElementById("tbodyNhanVien");
var body = document.querySelector("body");
var myModal = document.getElementById("myModal");
var tknv = document.getElementById("tknv");
var txtTenNV = document.getElementById("name");
var txtEmail = document.getElementById("email");
var txtPass = document.getElementById("password");
var txtNgaySinh = document.getElementById("datepicker");
var luongCoBan = document.getElementById("luongCB");
var chucVu = document.getElementById("chucvu");
var gioLam = document.getElementById("gioLam");

var SapXepGiam = document.getElementById('SapXepGiam');
var SapXepTang = document.getElementById('SapXepTang');

themNhanVienBTN.addEventListener("click", themNhanVienFunction);
//resetBTn.addEventListener("click", resetFunction);
btnSearch.addEventListener("click", timKiemFunction);
tbodyNhanVien.addEventListener("click", handleTableBody);
btnCapNhat.addEventListener("click", handleCapNhat);
btnDong.addEventListener("click", handleCloseModal);
SapXepGiam.addEventListener('click',sapXepDanhSachGiam);
SapXepTang.addEventListener('click',sapXepDanhSachTang);

var validator = new Validator();
var danhSachNhanVien = new DanhSachNV();
danhSachNhanVien.themNhanVien(nhanVien1);
danhSachNhanVien.themNhanVien(nhanVien2);
hienThiDanhSachNV(danhSachNhanVien.dsnv);
function sapXepDanhSachTang(){
  SapXepGiam.style.display="block";
  SapXepTang.style.display="none";
  var clone = danhSachNhanVien.dsnv.slice().sort();
  hienThiDanhSachNV(clone);
}
function sapXepDanhSachGiam(){
  SapXepTang.style.display="block";
  SapXepGiam.style.display="none";
  var clone = danhSachNhanVien.dsnv.slice().sort().reverse();
  hienThiDanhSachNV(clone);
}
function handleCapNhat(e) {
  //var maNV = e.target;
  var maNV = e.target.dataset.manv;
  console.log(maNV);
  //console.log(e.target);
  var nhanVienTarget = new NhanVien(
    txtTenNV.value,
    tknv.value,
    txtNgaySinh.value,
    txtPass.value,
    txtEmail.value,
    chucVu.value,
    luongCoBan.value,
    gioLam.value,
    maNV
  );
  danhSachNhanVien.chinhSuaNhanVien(nhanVienTarget);
  hienThiDanhSachNV(danhSachNhanVien.dsnv);
  resetFunction();
}
function handleCloseModal() {
  // body.classList.remove("modal-open");
  // myModal.classList.remove("show");
  // myModal.style.display = "none";
  $('#myModal').removeClass('show');
  resetFunction();
}
function handleTableBody(e) {
  const manv = e.target.dataset.manv;
  const action = e.target.dataset.action;
  console.log(manv, action);
  if (action === "delete") {
    danhSachNhanVien.xoaNhanVien(manv);
  }
  if (action === "update") {
    btnCapNhat.style.display = "inline-block";

    var nhanVien = danhSachNhanVien.timKiemNhanVienTheoMaNV(manv);
    tknv.value = nhanVien.taiKhoan;
    txtTenNV.value = nhanVien.teNV;
    txtEmail.value = nhanVien.email;
    txtPass.value = nhanVien.matKhau;
    //loaiNV.value = "";
    txtNgaySinh.value = nhanVien.ngaySinh;
    chucVu.value =nhanVien.chucVu;
    luongCoBan.value = nhanVien.luongCoBan;
    gioLam.value = nhanVien.gioLam;

    
    btnCapNhat.setAttribute("data-manv", manv);
    // body.classList.add("modal-open");
    // myModal.classList.add("show");
    // myModal.style.display = "block";
    $("#myModal").modal("show");
    themNhanVienBTN.style.display='none';
    tknv.setAttribute("disabled", true);
  }
  hienThiDanhSachNV(danhSachNhanVien.dsnv);
}
function convertChucVu(chucVu){
  if(chucVu==="sep"){
    return 'Sếp';
  }
  if(chucVu==='truongPhong'){
    return 'Trưởng Phòng';
  }
  if(chucVu==='nhanVien'){
    return 'Nhân Viên';
  }
  return 0;
}
function timKiemFunction() {
  var value = document.getElementById("searchName").value;
  var result = danhSachNhanVien.timKiemNhanVien(value);
  hienThiDanhSachNV(result);
}
function themNhanVienFunction(e) {
  var newNhanVien = new NhanVien(
    txtTenNV.value,
    tknv.value,
    txtNgaySinh.value,
    txtPass.value,
    txtEmail.value,
    chucVu.value,
    luongCoBan.value,
    gioLam.value
  );
  //console.log(gioLam.value);
  if (
    handleValidation(
      txtTenNV.value,
      tknv.value,
      txtPass.value,
      luongCoBan.value,
      txtEmail.value,
      txtNgaySinh.value,
      gioLam.value,
      chucVu.value,
    )
  ){
    danhSachNhanVien.themNhanVien(newNhanVien);
  }
    //console.log(validator.errors);
    hienThiDanhSachNV(danhSachNhanVien.dsnv);
    resetFunction();
}
function handleValidation(
  txtTenNV,
  tknv,
  txtPass,
  luongCoBan,
  txtEmail,
  txtNgaySinh,
  gioLam,
  chucVu
) {
  let isValid = true;
  let errors = validator.errors;
  isValid &=
    validator.required("txtTenNV", txtTenNV) &&
    validator.hoTenTest("txtTenNV", txtTenNV);
  isValid &=
    validator.required("tknv", tknv) && validator.validValueTest("tknv", tknv);
  isValid &=
    validator.required("txtPass", txtPass) &&
    validator.validValueTest("txtPass", txtPass);
  isValid &=
    validator.required("luongCoBan", luongCoBan) &&
    validator.luongCoBanTest("luongCoBan", luongCoBan);

  isValid &=
    validator.required("txtEmail", txtEmail) &&
    validator.email("txtEmail", txtEmail);
  isValid &=
    validator.required("txtNgaySinh", txtNgaySinh) &&
    validator.ngayLamTest("txtNgaySinh", txtNgaySinh);
  isValid &=
    validator.required("gioLam", gioLam) &&
    validator.gioLamTest("gioLam", gioLam);
  if(!chucVu){
    isValid=false;
  }

  if(!isValid){
    let list=document.querySelectorAll('.sp-thongbao');
    list.forEach(item => {
      item.style.display='inline-block';
    });
  }
  else{
    let list=document.querySelectorAll('.sp-thongbao');
    list.forEach(item => {
      item.style.display='none';
    });
  }
  document.getElementById("tbTKNV").innerHTML = errors["tknv"];
  document.getElementById("tbTen").innerHTML = errors["txtTenNV"];
  document.getElementById("tbEmail").innerHTML = errors["txtEmail"];
  document.getElementById("tbGiolam").innerHTML = errors["gioLam"];
  document.getElementById("tbMatKhau").innerHTML = errors["txtPass"];
  document.getElementById("tbNgay").innerHTML = errors["txtNgaySinh"];
  document.getElementById("tbLuongCB").innerHTML = errors["luongCoBan"];
  document.getElementById('tbChucVu').innerHTML = "Không được để trống";
  return isValid;
}
function resetFunction() {
  tknv.value = "";
  txtTenNV.value = "";
  txtEmail.value = "";
  txtPass.value = "";
  //loaiNV.value = "";
  txtNgaySinh.value = "";
  chucVu.value = "";
  luongCoBan.value = "";
  gioLam.value = "";
}

function hienThiDanhSachNV(dsnv) {
  var html = "";
  console.log(dsnv);
  for (var i = 0; i < dsnv.length; i++) {
    var nhanVien = dsnv[i];
    var xepLoai = danhSachNhanVien.xepLoaiNhanVien(nhanVien.maNV);
    html += `
        <tr>
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.teNV}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngaySinh}</td>
            <td>${convertChucVu(nhanVien.chucVu)}</td>
            <td>${nhanVien.tinhLuong()}</td>
            <td>${xepLoai}</td>
            <td>
                <button class="btn btn-danger" data-manv="${
                  nhanVien.maNV
                }" data-action="delete">Xóa</button>
                <button class="btn btn-success" data-manv="${
                  nhanVien.maNV
                }" data-action="update">Sửa</button>
            </td>
        </tr>`;
  }
  tbodyNhanVien.innerHTML = html;
}
btnThem.addEventListener("click", function () {
  themNhanVienBTN.style.display='block';
  tknv.removeAttribute("disabled");
  btnCapNhat.style.display = "none";
});

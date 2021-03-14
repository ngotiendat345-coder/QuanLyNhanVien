function NhanVien(_tenNV,_taiKhoan,_ngaySinh,_matKhau,_email,_chucVu,_luongCoBan,_gioLam,_maNV){
    this.teNV = _tenNV;
    this.taiKhoan = _taiKhoan;
    this.ngaySinh = _ngaySinh;
    this.matKhau = _matKhau;
    this.email = _email;
    this.chucVu = _chucVu;
    this.luongCoBan = _luongCoBan;
    this.gioLam = _gioLam
    this.maNV = _maNV ? _maNV : new Date().getTime().toString();
    console.log(this.maNV);
    this.tinhLuong = function(){
        let tongLuong =Number(this.luongCoBan);
        if(this.gioLam >192){
            let gioTangCa = this.gioLam-192;
            tongLuong += gioTangCa *30000;
        }
        return tongLuong;
    }
}
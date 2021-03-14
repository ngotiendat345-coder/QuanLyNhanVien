function DanhSachNV(){
    this.dsnv=[];
    this.themNhanVien= function(nhanVien){
        this.dsnv.push(nhanVien)
    }
    
}

DanhSachNV.prototype.timKiemNhanVien=function(search){
    var result = [];
    for(var i=0;i<this.dsnv.length;i++){
        if(this.dsnv[i].teNV.indexOf(search)!==-1){
            result.push(this.dsnv[i]);
        }
    }
    return result;
}
DanhSachNV.prototype.chinhSuaNhanVien = function(nhanVien){
    
    for(var i=0;i<this.dsnv.length;i++){
        if(this.dsnv[i].maNV === nhanVien.maNV){
            this.dsnv[i]=nhanVien;
            console.log('test')
            break;
        }
    }
    console.log(nhanVien);
    console.log(this.dsnv);
}
DanhSachNV.prototype.timKiemNhanVienTheoMaNV=function(maNV){
    var target=null;
    for(var i=0;i<this.dsnv.length;i++){
        if(this.dsnv[i].maNV===maNV){
            target=this.dsnv[i];
        }
    }
    return target;
}
DanhSachNV.prototype.xoaNhanVien=function(maNv){
    var index=-1;
    for(var i=0;i<this.dsnv.length;i++){
        if(this.dsnv[i].maNV === maNv){
            index=i;
            break;
        }
    }
    console.log(maNv);
    if(index!==-1){
        this.dsnv.splice(index,1)
    }
}
DanhSachNV.prototype.xepLoaiNhanVien= function(maNhanVien){
    var target = this.timKiemNhanVienTheoMaNV(maNhanVien);
    //console.log()
    if(target){
        var gioLam = parseInt(target.gioLam);
        if(gioLam>=240){
            return 'Xuất sắc';
        }
        else if(gioLam>=208){
            return "Tốt"; 
        }
        else if(gioLam>=192){
            return 'Bình thường';
        }
        else{
            return 'Kém';
        }
    }
}
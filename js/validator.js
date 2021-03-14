function Validator(){
    this.errors = {

    };
    this.required= function(name,value){
        this.errors[name]='';
        if(!value){
            this.errors[name]=name + 'không được để trống';
            console.log(this.errors);
            return false;
        }
        
        return true;
    }
    this.email = function(name,value){
        this.errors[name]='';
        var test = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
        if(!test){
            this.errors[name] = name + 'Sai định dạng';
        }
        
        return test;
    }
    this.hoTenTest =function (name,value){
        this.errors[name]='';
        var test = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u.test(value);
        if(!test){
            this.errors[name] = name +'sai định dạng';
        }
        return test;
    }
    this.validValueTest = function(name,value){
        this.errors[name]='';
        var test =/[a-z0-9]{6,15}/gm.test(value);
        if(!test){
            this.errors[name]= name +'định dạng không có ký tự đặc biệt độ dài 6-15';
        }
        
        return test;
    }
    this.ngayLamTest = function(name,value){
        this.errors[name]='';
        var test = /\b(0?[1-9]|[12]\d|3[01])[\/\-.](0?[1-9]|[12]\d|3[01])[\/\-.](\d{2}|\d{4})\b/.test(value);
        if(!test){
            this.errors[name]=name+'sai định dạng';
        }
        return test;
    }
    this.gioLamTest = function(name,value){
        this.errors[name]='';
        var test =/\b0?[123][0-9]{1,2}\b/u.test(value.toString());
        if(!test){
            this.errors[name]=name+' sai định dạng';
        }
        return test;
    }
    this.luongCoBanTest = function(name,value){
        this.errors[name]='';
        var test =/\b[1-9][0-9]{6,10}\b/gm.test(value);
        if(!test){
            this.errors[name]=name+' lương cơ bản không thấp hơn 1 triệu'
        }
        return test;
    }
    this.maNhanVienTest = function (name,value){
        this.errors[name]='';
        var test =/[a-z0-9]{6}/gm.test(value);
        if(!test){
            this.errors[name]=name+' sai định dạng(maNV độ dài 6 ký tự)';
        }
        return test;
    }

}
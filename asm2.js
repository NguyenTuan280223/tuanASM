let giohang = [];
let thanhtoan = [];

const logingetgo = () => {
    const kq = document.getElementById("boxlogin").children;
    const user = kq[1].value;
    const num = kq[2].value;
    const where = kq[3].value;
    const pass = kq[4].value;
    const pas = kq[5].value;

    const item = [user, num, where, pass, pas];
    thanhtoan.push(item);
    console.log(item);
    sessionStorage.setItem("thanhtoan", JSON.stringify(thanhtoan));
    window.location.assign("dangnhap.html");
};

const logigetgo = () => {
    const tht = JSON.parse(sessionStorage.getItem("thanhtoan"));
    const kq = document.getElementById("boxlogin").children;
    const num = kq[1].value;
    const pass = kq[2].value;

    for (const item of tht) {
        if (num === item[1] && pass === item[4]) {
            window.location.href = "index.html";
        } else {
            alert("Tài khoản hoặc mật khẩu không chính xác");
        }
    }
};

const dangkydi = () => {
    window.location.href = "dk.html";
};

const themvaogiohang = (x) => {
    const boxsp = x.parentElement.children;
    const hinh = boxsp[0].children[0].src;
    const gia = boxsp[1].children[0].innerText;
    const tensp = boxsp[2].innerText;
    const soluong = 1;

    if (checkspgiohang(tensp) >= 0) {
        capnhatslsp(checkspgiohang(tensp));
    } else {
        const sp = [hinh, gia, tensp, soluong];
        giohang.push(sp);
    }

    document.getElementById("countsp").innerHTML = giohang.length;
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
};

const capnhatslsp = (vitri) => {
    for (let i = 0; i < giohang.length; i++) {
        if (i === vitri) {
            giohang[i][3] += 1;
            break;
        }
    }
};

const checkspgiohang = (x) => {
    let vitri = -1;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][2] === x) {
            vitri = i;
            break;
        }
    }
    return vitri;
};

const loaddata = () => {
    const gh = JSON.parse(sessionStorage.getItem("giohang"));
    document.getElementById("countsp").innerHTML = gh.length;
};

const showmycart = () => {
    const gh = JSON.parse(sessionStorage.getItem("giohang"));
    let kq = "";
    let tong = 0;

    for (let i = 0; i < gh.length; i++) {
        const tt = parseFloat(gh[i][2]) * parseInt(gh[i][3]);
        tong += tt;
        kq += `<tr>
            <th>${i + 1}</th>
            <th><img src="${gh[i][0]}" alt=""></th>
            <th>${gh[i][1]}</th>
            <th>$${gh[i][2]}</th>
            <th>${gh[i][3]}</th>
            <th>$${tt.toFixed(3)}</th>
        </tr>`;
    }

    kq += `<tr>
        <th colspan="4">Tổng đơn hàng</th>
        <th colspan="2">$${tong.toFixed(3)}</th>
    </tr>
    <tr>
        <th colspan="6">
            <button style="width:50%;text-transform: uppercase;background-color: rgb(242, 58, 58);font-weight:bold; padding: 5px;">
                <a href="checkout.html" style="color: #fff;">
                    Thanh toán
                </a>
            </button>
        </th>
    </tr>`;

    document.getElementById("showcart").innerHTML = kq;
    document.getElementById("countsp").innerHTML = gh.length;
};

// not 6
function showtt() {
    var gh = JSON.parse(sessionStorage.getItem("giohang"));
    var tht = JSON.parse(sessionStorage.getItem("thanhtoan"));
    var kq1 = "";

    for (let i = 0; i < tht.length; i++) {
        kq1 += `<div>
            <label>Họ và tên</label>
            <input style="color: #000;" type="text" placeholder="Doe" value="` + tht[i][0] + `">
        </div>            
        <div>
            <label>Mobile No</label>
            <input style="color: #000;" type="text" placeholder="+123 456 789" value="` + tht[i][1] + `">
        </div>
        <div>
            <label>Address Line 1</label>
            <input style="color: #000;" type="text" placeholder="123 Street" value="` + tht[i][2] + `">
        </div>
        <div>
            <label>E-mail</label>
            <input style="color: #000;" type="text" placeholder="example@email.com" value="` + tht[i][3] + `">
        </div>`;
    }

    var kq = "";
    var tong = 0;

    for (let i = 0; i < gh.length; i++) {
        var tt = parseFloat(gh[i][2]) * parseInt(gh[i][3]); // Calculate total for each item
        tong += tt;
        kq += `<tr>
        <th>` + (i + 1) + `</th>
        <th><img src="` + gh[i][0] + `" alt=""></th>
        <th>` + gh[i][1] + `</th>
        <th>$` + gh[i][2] + `</th>
        <th>` + gh[i][3] + `</th>
        <th>$` + tt.toFixed(3) + `</th>
    </tr>`;
    }

    document.getElementById("showcart").innerHTML = kq;
    document.getElementById("hoahoe").innerHTML = kq1;

    // Display the total amount in the second section
}

function butt() {
    window.location.href="donhang.html";
}
function showttnn() {
    var hd= "HD"+Math.round(Math.random()*10000);
    
    var gh = JSON.parse(sessionStorage.getItem("giohang"));
    var tht= JSON.parse(sessionStorage.getItem("thanhtoan"));
    var kq1 ="";
    for (let i = 0; i < tht.length; i++) {
        kq1 = `<div style="font-weight: 500;">
            <div>
                <label>Họ và tên</label>
                `+tht[i][0]+`
            </div>            
            <div>
                <label>Mobile No</label>
                `+tht[i][1]+`
            </div>
            <div>
                <label>Address Line 1</label>
                `+tht[i][2]+`
            </div>
            <div>
                <label>E-mail</label>
                `+tht[i][3]+`
            </div>
        </div>`;        
    }
    var kq = "";
    var tong =0;
    for (let i = 0; i < gh.length; i++) {
        var tt = parseInt(gh[i][1] * gh[i][3]);
        tong +=tt;
        kq +=`<tr>
        <th>`+(i+1)+`</th>
        <th><img src="`+gh[i][0]+`" alt=""></th>
        <th>`+gh[i][2]+`</th>
        <th>$`+gh[i][1]+`</th>
        <th>`+ gh[i][3] +`</th>
        <th>$`+tt+`</th>
    </tr>`};
    kq +=`<tr>
        <th colspan="4">Tổng đơn hàng</th>
        <th colspan="2">$`+tong+`</th>
    </tr>`
    document.getElementById("tentuoi").innerHTML=kq1;
    document.getElementById("tentuo").innerHTML=kq;
    document.getElementById("random").innerHTML=hd;
}
function indh() {
    window.print();
}
// let div1 = document.createElement('div')
// document.body.appendChild(div1)
// div1.setAttribute('class', 'box-form')
// let div1_div1 = document.createElement('div')
// div1.appendChild(div1_div1)
// div1_div1.setAttribute('class', 'left')
// let div1_div1_div1 = document.createElement('div')
// div1_div1.appendChild(div1_div1_div1)
// div1_div1_div1.setAttribute('class', 'overlay')
// /////////////////////////////////////////////////
// let div2 = document.createElement('div')
// div1.appendChild(div2)
// div2.setAttribute('class', 'right')
// let div2_h5 = document.createElement('h5')
// div2.appendChild(div2_h5)
// div2_h5.textContent = 'تسجيل الدخول'
// let div2_div1 = document.createElement('div')
// div2.appendChild(div2_div1)
// div2_div1.setAttribute('class', 'inputs')
// let div2_div1_input1 = document.createElement('input')
// let div2_div1_input2 = document.createElement('input')
// div2_div1.appendChild(div2_div1_input1)
// let div2_div1_br = document.createElement('br')
// div2_div1.appendChild(div2_div1_br)
// div2_div1.appendChild(div2_div1_input2)
// div2_div1_input1.setAttribute('type', 'email')
// div2_div1_input1.setAttribute('placeholder', 'البريد الالكتروني')
// div2_div1_input1.setAttribute('required', 'required')
// div2_div1_input2.setAttribute('type', 'password')
// div2_div1_input2.setAttribute('placeholder', 'كلمة المرور')
// div2_div1_input2.setAttribute('required', 'required')
// ///////////////////////////////////////////////////////
// let div3_div1 = document.createElement('div')
// div2_div1.appendChild(div3_div1)
// div3_div1.setAttribute('class', 'remember-me--forget-password')
// let div3_label = document.createElement('label')
// div3_div1.appendChild(div3_label)
// let div3_span = document.createElement('span')
// div3_label.appendChild(div3_span)
// div3_span.setAttribute('class', 'text-checkbox')
// div3_span.style = 'font-size: 1.7em'
// div3_span.textContent = 'تذكرني'
// let div3_input = document.createElement('input')
// div3_label.appendChild(div3_input)
// div3_input.setAttribute('type', 'checkbox')
// //////////////////////////////////////////////////////
// let br = document.createElement('br')
// div2_div1.appendChild(br)
// let a = document.createElement('a')
// div2_div1.appendChild(a)
// a.href = '/HTML/Home.html'
// let button = document.createElement('button')
// a.appendChild(button)
// button.textContent = 'تسجيل الدخول'
//////////////////////////////////////////////////////////////////////////////
let Login = document.getElementById("Login")
Login.addEventListener("submit", function Log(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "عبدالله الرميح" && password == "123123" ) {
        localStorage.setItem("username", username)
        setTimeout(function() {
            window.location.href = "/HTML/Home.html"
        }, 4000);
        Swal.fire({
            title: "! تم تسجيل دخولك بنجاح",
            text: "... يتم تحويلك الى الصفحة الرئيسية",
            background: "white",
            allowOutsideClick : false,
            confirmButtonText: "حسنًا",
            icon: "success",
            confirmButtonColor:"#16425B",
        })
    } else {
        Swal.fire({
            title: "! خطأ في تسجيل الدخول",
            text: "يبدو ان اسم المستخدم او كلمة المرور غير صحيحة , حاول مره اخرى",
            background: "white",
            allowOutsideClick : false,
            confirmButtonText: "حسنًا",
            icon: "error",
            confirmButtonColor:"#9C6644",
        })
    }
})
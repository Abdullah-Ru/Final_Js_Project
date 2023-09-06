let header = document.createElement('header')
let a1 = document.createElement('a')
let img1 = document.createElement('img')
document.body.appendChild(header)
header.appendChild(a1)
a1.appendChild(img1)
a1.setAttribute('class', 'IMG1')
a1.href = '#'
img1.setAttribute('id', 'IMG1')
img1.src = '../IMG/logo.png'
////////////////////////////////////////////////////////////////////
let nav = document.createElement('nav')
let nav_a1 = document.createElement('a')
let nav_a2 = document.createElement('a')
let nav_a3 = document.createElement('a')
let nav_a4 = document.createElement('a')
let nav_a5 = document.createElement('a')
header.appendChild(nav)
nav.appendChild(nav_a1)
nav.appendChild(nav_a2)
nav.appendChild(nav_a3)
nav.appendChild(nav_a4)
nav.appendChild(nav_a5)
nav_a1.textContent = 'الصفحة الرئيسية'
nav_a2.textContent = 'شركائنا'
nav_a3.textContent = 'الوظائف'
nav_a4.textContent = 'عن شركتنا'
nav_a5.textContent = 'تواصل معنا'
nav_a1.href = '/HTML/Home.html'
nav_a2.href = '/HTML/com.html'
nav_a3.href = '#'
nav_a4.href = '/HTML/AboutUs.html'
nav_a5.href = '/HTML/contact.html'
//////////////////////////////////////////////////////////////////////
let div1 = document.createElement('div')
let div1_a1 = document.createElement('a')
let div1_a1_button = document.createElement('button')
let div1_a2 = document.createElement('a')
let div1_a2_button = document.createElement('button')
header.appendChild(div1)
div1.appendChild(div1_a1)
div1_a1.appendChild(div1_a1_button)
div1.appendChild(div1_a2)
div1_a2.appendChild(div1_a2_button)
div1.setAttribute('class', 'button')
div1_a1.href = '/HTML/log.html'
div1_a1_button.setAttribute('id', 'button')
div1_a1_button.textContent = 'تسجيل الدخول'
div1_a2.href = '/HTML/sign.html'
div1_a2_button.setAttribute('id', 'button1')
div1_a2_button.textContent = 'انشاء حساب'
//////////////////////////////////////////////////////////////////////////
for (let i = 1; i <= 1; i++) {
    let br = document.createElement('br')
    document.body.appendChild(br)
}
//////////////////////////////////////////////////////////////////////////
let Profile1 = document.getElementById('Profile1')
let username = localStorage.getItem('username')
let user = document.createElement('h3')
Profile1.appendChild(user)
user.setAttribute('id', 'user')
user.textContent = username;
let userinfo = document.createElement('h4')
Profile1.appendChild(userinfo)
userinfo.textContent = 'مصمم واجهات'

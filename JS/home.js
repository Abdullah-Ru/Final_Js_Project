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
for (let i = 1; i <= 5; i++) {
    let br = document.createElement('br')
    document.body.appendChild(br)
}
//////////////////////////////////////////////////////////////////////////
let div2 = document.createElement('div')
let div2_div1 = document.createElement('div')
let div2_div1_h2 = document.createElement('h2')
let div2_div1_p = document.createElement('p')
let div2_div1_a1 = document.createElement('a')
let div2_div1_button = document.createElement('button')
div2.setAttribute('class', 'image')
document.body.appendChild(div2)
div2_div1.setAttribute('class', 'img1')
div2.appendChild(div2_div1)
div2_div1.appendChild(div2_div1_h2)
div2_div1.appendChild(div2_div1_p)
div2_div1.appendChild(div2_div1_a1)
div2_div1.appendChild(div2_div1_button)
div2_div1_h2.textContent = 'منـــــــاصب'
div2_div1_p.textContent = 'لتجربة توظيف افضل'
div2_div1_a1.href = '#section'
div2_div1_button.setAttribute('id', 'B')
div2_div1_button.textContent = 'تصفّح'
let div2_div2 = document.createElement('div')
div2.appendChild(div2_div2)
div2_div2.setAttribute('class', 'img2')
let div2_div2_img1 = document.createElement('img')
div2_div2.appendChild(div2_div2_img1)
div2_div2_img1.src = '../IMG/Home3.png'
/////////////////////////////////////////////////////////////////////////////
let username = localStorage.getItem('username')
let username_h2 = document.createElement('h3')

if (username) {
    div1_a1_button.remove()
    div1_a2_button.remove()
    let dropdown = document.createElement('div')
    header.appendChild(dropdown)
    dropdown.setAttribute('class', 'dropdown')
    let userbutton = document.createElement('button')
    userbutton.setAttribute('class', 'dropbtn')
    dropdown.appendChild(userbutton)
    userbutton.appendChild(username_h2)
    username_h2.setAttribute('id', "userh2")
    username_h2.textContent = `${username} `
    let userimg = document.createElement('img')
    header.appendChild(userimg)
    userimg.setAttribute('id', 'userimg')
    userimg.src = '/IMG/avatar.png'
    let dropdowndiv = document.createElement('div')
    let dropdowna = document.createElement('a')
    let dropdownbutton = document.createElement('button')
    dropdowndiv.setAttribute('class', 'dropdown-content')
    dropdowna.href = '/HTML/profile.html'
    dropdowna.textContent = 'الملف الشخصي'
    dropdownbutton.textContent = 'تسجيل الخروج'
    dropdown.appendChild(dropdowndiv)
    dropdowndiv.appendChild(dropdowna)
    dropdowndiv.appendChild(dropdownbutton)
    nav_a3.textContent ='طوّر'
    nav_a3.href = '/HTML/imp.html'
    dropdownbutton.addEventListener('click', function Logout() {
        localStorage.clear()
        window.location.href = '/HTML/Home.html'
    })
} 
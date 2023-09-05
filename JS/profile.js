let Profile1 = document.getElementById('Profile1')
let username = localStorage.getItem('username')
let user = document.createElement('h3')
Profile1.appendChild(user)
user.setAttribute('id', 'user')
user.textContent = username;
let userinfo = document.createElement('h4')
Profile1.appendChild(userinfo)
userinfo.textContent = 'مصمم واجهات'

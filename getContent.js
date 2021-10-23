// This function creates const
function createConst(name) {
    return `const ${name} = document.getElementById(${name})`
}
// This function get the user data, if there's data in the input area,
// the counter will increment, else the website will alert to the user that they're missing information.
function getData() {
    let counter = 0
    let n = 8
    let uOption = document.getElementById('location')
    let userLocation = uOption.options[uOption.selectedIndex].value
    
    createConst(fullname)
    createConst(phone)
    createConst(email)
    createConst(enquiry)
    createConst(birthday)
    createConst(arrivalday)
    
    createConst(male)
    createConst(female)
    createConst(other)
    
    if (fullname.value === '') {
        alert('Please input your name')
    } else {
        counter += 1
    }
    if (email.value === '') {
        alert('Please enter your email')
    } else {
        counter += 1
    }
    if (phone.value.length === 0) {
        alert('Please input your phone number')
    } else {
        counter += 1
    }
    if (!male.checked && !female.checked && !other.checked) {
        alert('Please indicate your gender')
    } else {
        counter += 1
    }
    if (userLocation === '') {
        alert('Please select your location')
    } else {
        counter += 1
    }
    if (birthday.value === '') {
        alert('Please enter your date of birth')
    } else {
        counter += 1
    }
    if (arrivalday.value === '') {
        alert('Please enter your date of arrival')
    } else {
        counter += 1
    }
    if (enquiry.value.length === 0) {
        alert('Please input your enquiry')
    } else {
        counter += 1
    }
    // If the counter reaches 8 (user enters all the input), 
    //the new window will appear that shows the user's information.
    if (counter === n) {
        const newWindow = window.open('', 'Personal Infomation', 'top = 500, left = 500, width = 600, height = 500')
        newWindow.document.write('<h1 align="center" style="font-size: 30px; font-family: Century">Thank you for traveling with us!</br> We will contact you as soon as possible.</h1>')
        newWindow.document.write('<table align="center" cellspacing= "20"><tr><td><b>Full Name:</b></td> <td>' + fullname.value + '</td></tr>')
        newWindow.document.write('<tr><td><b>Date of Birth:</b></td> <td>' + birthday.value + '</td></tr>')
        newWindow.document.write('<tr><td><b>Gerder:</b></td> <td>' + document.querySelector('input[name="gender"]:checked').value + '</td></tr>')
        newWindow.document.write('<tr><td><b>Phone Number:</b></td> <td>' + phone.value + '</td></tr>')
        newWindow.document.write('<tr><td><b>E-mail Address:</b></td> <td>' + email.value + '</td></tr>')
        newWindow.document.write('<tr><td><b>Location:</b></td> <td>' + userLocation + '</td></tr>')
        newWindow.document.write('<tr><td><b>Date of Arrival:</b></td> <td>' + arrivalday.value + '</td></tr>')
        newWindow.document.write('<tr><td><b>Enquiry:</b></td> <td>' + enquiry.value + '</td></tr></table>')
        newWindow.document.write('<h5 align="center"><i>Note: All day formats are in YYYY-MM-DD</i></h5>')
    }
}
let fname, email, age, phone, adhaar, address, date;
let formData = JSON.parse(localStorage.getItem('formData'));
if (formData != null && Object.keys(formData).length > 0){
    console.log('formData' ,formData);
    fname = formData.fname;
    email = formData.email;
    age = formData.age;
    phone = formData.phone;
    adhaar = formData.adhaar;
    address = formData.address;
    date = formData.date;
    document.getElementById('name').innerHTML = fname;
    document.getElementById('email').innerHTML = email;
    document.getElementById('age').innerHTML = age;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById('adhaar').innerHTML = adhaar;
    document.getElementById('address').innerHTML = address;
    document.getElementById('date').innerHTML = date;
}

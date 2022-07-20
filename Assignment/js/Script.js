
function saveData() {
    let fname, email, age, phone, adhaar, address, date, localObj = {};
    localStorage.setItem('formData', localObj);
    fname = document.getElementById("name").value;

    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    phone = document.getElementById("phone").value;
    adhaar = document.getElementById("adhaar").value;
    address = document.getElementById("address").value;
    date = document.getElementById("date").value;

    localObj = {
        "fname": fname,
        "email": email,
        "age": age,
        "phone": phone,
        "adhaar": adhaar,
        "address": address,
        "date": date,
    };
    // console.log('email..', email);
    // console.log('obj..', localObj);
    localStorage.setItem('formData', JSON.stringify(localObj));
    location.href='Admin.html'
}


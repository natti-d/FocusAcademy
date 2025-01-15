const bgRegex = /^[А-Я][а-я]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$/;

var allOK = [true, true, true, true, true];
let result = '';

function validateFName() {
    let temp = document.getElementById('firstName').value.trim();
    if (!bgRegex.test(temp)) {
        //result += ('Името е невалидно. Трябва да се въведе на кирилица с първа главна буква.\n');
        document.getElementById('fNameAside').style.display = 'block';
        document.getElementById('firstName').style.borderColor = 'red';      
        document.getElementById('firstName').style.color = 'red';
        return false;
    }
    else {
        document.getElementById('fNameAside').style.display = 'none';
        document.getElementById('firstName').style.borderColor = '#929B77';      
        document.getElementById('firstName').style.color = '#6d7556';
        return true;
    }
}

function validateLName() {
    let temp = document.getElementById('lastName').value.trim();
    if (!bgRegex.test(temp)) {
        //result += ('Фамилията е невалидна. Трябва да се въведе на кирилица с първа главна буква.\n');
        document.getElementById('lNameAside').style.display = 'block';
        document.getElementById('lastName').style.borderColor = 'red';      
        document.getElementById('lastName').style.color = 'red';
        return false;
    }
    else {
        document.getElementById('lNameAside').style.display = 'none';
        document.getElementById('lastName').style.borderColor = '#929B77';      
        document.getElementById('lastName').style.color = '#6d7556';
        return true;
    }
}

function validateEmail() {
    let temp = document.getElementById('email').value;
    if (!emailRegex.test(temp)) {
        //result += ('Е-мейл адресът е невалиден. Стандартен формат за е-мейл: example@example.com.\n');
        document.getElementById('emailAside').style.display = 'block';
        document.getElementById('email').style.borderColor = 'red';      
        document.getElementById('email').style.color = 'red';
        return false;
    }
    else {
        document.getElementById('emailAside').style.display = 'none';
        document.getElementById('email').style.borderColor = '#929B77';      
        document.getElementById('email').style.color = '#6d7556';
        document.getElementById('emailAside').style.display = 'none';
        return true;
    }
}

function validatePass() {
    let temp = document.getElementById('password').value.trim();
    if (!passwordRegex.test(temp)) {
        //result +=('Паролата е невалидна. Тя трябва да бъде поне 8 символа, да съдържа букви на кирилица или латиница, и поне една цифра.\n');
        document.getElementById('passAside').style.display = 'block';
        document.getElementById('passInstruct').style.display = 'none';
        document.getElementById('password').style.borderColor = 'red';      
        document.getElementById('password').style.color = 'red';
        return false;
    }
    else {
        document.getElementById('password').style.borderColor = '#929B77';      
        document.getElementById('password').style.color = '#6d7556';
        document.getElementById('passAside').style.display = 'none';
        document.getElementById('passInstruct').style.display = 'block';
        return true;
    }
}

function validateConf() {
    let a = document.getElementById('password').value.trim();
    let b = document.getElementById('confPassword').value.trim();
    if (a !== b) {
        //result += ('Паролите не съответстват.\n');
        document.getElementById('confAside').style.display = 'block';
        document.getElementById('confPassword').style.borderColor = 'red';      
        document.getElementById('confPassword').style.color = 'red';
        return false;
    }
    else {
        document.getElementById('confAside').style.display = 'none';
        document.getElementById('confPassword').style.borderColor = '#929B77';      
        document.getElementById('confPassword').style.color = '#6d7556';
        return true;
    }
}

//Семинар            
function validateDate() {
    let course = document.getElementById('courseSelect').value;
    let timeCourse = document.getElementById('timeC');

    //Дата
    $(dateC).datepicker('destroy');
    

    //Час
    timeCourse.innerHTML = '<option disabled selected value=""> -- Изберете час -- </option>';
    let options = [];

    if (course == 'Продуктова') {
        //Дата
        $(dateC).datepicker({
            minDate: 0,
            beforeShowDay: function (d) {
                var day = d.getDay();
                return [day != 1 && day != 2 && day != 3 && day != 4 && day != 5];
            },
        });

        //Час
        options = ['08:30', '15:00'];

    }
    else if (course == 'Портретна') {
        //Дата
        $(dateC).datepicker({
            minDate: 0,
            beforeShowDay: function (d) {
                var day = d.getDay();
                return [day != 0 && day != 2 && day != 3 && day != 4 && day != 6];
            },
        });

        //Час
        options = ['09:00', '16:00'];
    }
    else if (course == 'Пейзажна') {
        //Дата
        $(dateC).datepicker({
            minDate: 0,
            beforeShowDay: function (d) {
                var day = d.getDay();
                return [day != 0 && day != 1 && day != 3 && day != 5 && day != 6];
            },
        });

        //Час
        options = ['08:30', '15:00'];
    }
    else {
        $(dateC).value = 'Имате някаква грешка при избиране';
    }

    options.forEach(hour => {
        let option = document.createElement('option');
        option.value = hour;
        option.textContent = hour;
        timeCourse.appendChild(option);
    });

    return true;
}

//Финална Валидация
function validateAllData(){
    allOK = [validateFName(), validateLName(), validateEmail(), validatePass(), validateConf()];
    let final = true;
    allOK.forEach(bools => {
        if(!bools){
            final = false;
        }
    });

    if(final){
        alert('Записани сте!')
        document.getElementById('signUpForm').submit();
        location.href = '../structure/home.html';
    }
    else{
        alert('Имате грешка при попълването на данните.');
    }
}


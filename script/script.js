const bgRegex = /^[А-Я][а-я]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$/;

var allOK = [true, true, true, true, true];
let result = '';

function validateFName() {
    let temp = document.getElementById('firstName').value.trim();
    if (!bgRegex.test(temp)) {
        result += ("Името е невалидно. Трябва да се въведе на кирилица с първа главна буква.\n");
        return false;
    }
    else {
        return true;
    }
}

function validateLName() {
    let temp = document.getElementById('lastName').value.trim();
    if (!bgRegex.test(temp)) {
        result += ("Фамилията е невалидна. Трябва да се въведе на кирилица с първа главна буква.\n");
        return false;
    }
    else {
        return true;
    }
}

function validateEmail() {
    let temp = document.getElementById('email').value;
    if (!emailRegex.test(temp)) {
        result += ("Е-мейл адресът е невалиден. Стандартен формат за е-мейл: example@example.com.\n");
        return false;
    }
    else {
        return true;
    }
}

function validatePass() {
    let temp = document.getElementById('password').value.trim();
    if (!passwordRegex.test(temp)) {
        result +=("Паролата е невалидна. Тя трябва да бъде поне 8 символа, да съдържа букви на кирилица или латиница, и поне една цифра.\n");
        return false;
    }
    else {
        return true;
    }
}

function validateConf() {
    let a = document.getElementById('password').value.trim();
    let b = document.getElementById('confPassword').value.trim();
    if (a !== b) {
        result += ("Паролите не съответстват.\n")
        return false;
    }
    else {
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

    if (course == "Продуктова") {
        //Дата
        $(dateC).datepicker({
            minDate: 0,
            beforeShowDay: function (d) {
                var day = d.getDay();
                return [day != 1 && day != 2 && day != 3 && day != 4 && day != 5];
            },
        });

        //Час
        options = ["08:30", "15:00"];

    }
    else if (course == "Портретна") {
        //Дата
        $(dateC).datepicker({
            minDate: 0,
            beforeShowDay: function (d) {
                var day = d.getDay();
                return [day != 0 && day != 2 && day != 3 && day != 4 && day != 6];
            },
        });

        //Час
        options = ["09:00", "16:00"];
    }
    else if (course == "Пейзажна") {
        //Дата
        $(dateC).datepicker({
            minDate: 0,
            beforeShowDay: function (d) {
                var day = d.getDay();
                return [day != 0 && day != 1 && day != 3 && day != 5 && day != 6];
            },
        });

        //Час
        options = ["08:30", "15:00"];
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
        alert("Записани сте!")
        document.getElementById('signUpForm').submit();
    }
    else{
        alert(result);
    }
}


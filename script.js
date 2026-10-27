// Class select karne ka function
function selectClass(clickedButton) {
    // 1. Pehle sabhi buttons se 'active-class' (blue color) hata do
    const allButtons = document.querySelectorAll('.class-grid button');
    allButtons.forEach(button => {
        button.classList.remove('active-class');
    });

    // 2. Ab sirf us button par 'active-class' laga do jis par click hua hai
    clickedButton.classList.add('active-class');
    
    // 3. Dropdown menu (Select class) mein bhi wahi class dikhayen
    const classDropdown = document.querySelector('.class-select');
    if(classDropdown) {
        classDropdown.value = clickedButton.innerText;
    }
}
// Popup kholne ka function
function openQuiz() {
    document.getElementById('quizModal').style.display = 'flex';
}

// Popup band karne ka function
function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}
// Subject click karne ka function
function openSubject(subjectName) {
    // Browser mein ek chota sa popup (alert) dikhayega
    alert("Aapne " + subjectName + " select kiya hai!\n\nIs subject ke lessons jald hi add kiye jayenge. 😊");
}
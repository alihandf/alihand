function toggleClasses(teacher) {
    // إخفاء أزرار الأساتذة
    const teacherBtns = document.querySelectorAll('.teacher-btn');
    teacherBtns.forEach(btn => {
        btn.style.display = 'none';
    });

    // إظهار زر الرجوع
    document.getElementById('back-btn').style.display = 'block';

    // إخفاء الفصول والمحاضرات
    document.getElementById('class-section').style.display = 'none';
    document.getElementById('lectures-section').style.display = 'none';

    // إظهار الفصول الخاصة بالأستاذ فقط
    if (teacher === 'hussein') {
        // أستاذ حسين الهاشمي 2025
        document.getElementById('class-section').style.display = 'block';
        
        // عرض اسم الأستاذ
        document.getElementById('teacher-name').style.display = 'block';
        document.getElementById('teacher-name-text').innerText = "حسين الهاشمي 2025";
    }
}

function goBack() {
    // إظهار أزرار الأساتذة مرة أخرى
    const teacherBtns = document.querySelectorAll('.teacher-btn');
    teacherBtns.forEach(btn => {
        btn.style.display = 'inline-block';  // إظهار الأزرار مرة أخرى
    });

    // إخفاء زر الرجوع
    document.getElementById('back-btn').style.display = 'none';

    // إغلاق الفصول والمحاضرات
    document.getElementById('class-section').style.display = 'none';
    document.getElementById('lectures-section').style.display = 'none';

    // إخفاء اسم الأستاذ
    document.getElementById('teacher-name').style.display = 'none';
}

function showLectures(classId) {
    // إخفاء جميع المحاضرات
    const allLectureGroups = document.querySelectorAll('.lecture-group');
    allLectureGroups.forEach(group => {
        group.style.display = 'none';
    });

    // إظهار المحاضرات الخاصة بالفصل المحدد
    const lectureGroup = document.getElementById('lectures-' + classId);
    if (lectureGroup) {
        lectureGroup.style.display = 'block';
    }

    // إظهار قسم المحاضرات
    document.getElementById('lectures-section').style.display = 'block';
}


function toggleClassColor(classId) {
    // الحصول على جميع أزرار الفصول
    const classBtns = document.querySelectorAll('.class-btn');

    // إزالة الكلاس "active" من جميع الأزرار
    classBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // إضافة الكلاس "active" للزر الذي تم النقر عليه
    const clickedButton = document.getElementById('class-' + classId);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}
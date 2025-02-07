let videoPlayer = document.getElementById("video-player");

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

// روابط محاضرات كل فصل
const lecturesData = {
    1: {
        lecture1: "https://iframe.mediadelivery.net/play/378895/9fee9da3-7aa2-45dc-8bcf-5e9293fabf08",
        lecture2: "https://iframe.mediadelivery.net/play/378895/xyzabc", // رابط المحاضرة 2
    },
    2: {
        lecture3: "https://iframe.mediadelivery.net/play/378895/abcxyz", // رابط محاضرة 3
        lecture4: "https://iframe.mediadelivery.net/play/378895/defghi", // رابط محاضرة 4
    },
    3: {
        lecture5: "https://iframe.mediadelivery.net/play/378895/ghijk1", // رابط محاضرة 5
        lecture6: "https://iframe.mediadelivery.net/play/378895/your-new-lecture6-link", // رابط محاضرة 6
        lecture7: "https://iframe.mediadelivery.net/play/378895/629c3f5b-4459-49b9-8bce-80621b133d95", // رابط محاضرة 3-مسائل القوي
    },
    4: {
        lecture8: "https://iframe.mediadelivery.net/play/378895/ijklm2", // رابط محاضرة 8
    }
};

// دالة تشغيل المحاضرة بناءً على الفصل والمحاضرة
function playLecture(classId, lectureId) {
    document.getElementById('lectures-section').style.display = 'none';
    document.getElementById('video-container').style.display = 'flex';

    // جلب الرابط من البيانات المخزنة بناءً على الفصل والمحاضرة
    const iframeSrc = lecturesData[classId][lectureId];

    // تشغيل الفيديو تلقائيًا
    if (iframeSrc) {
        videoPlayer.src = iframeSrc + "?autoplay=1"; // إضافة autoplay لبدء الفيديو تلقائيًا
    } else {
        console.error("الرابط غير موجود!");
    }
}

function closeVideo() {
    // إعادة تحميل الصفحة
    location.reload();
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

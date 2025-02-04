// بيانات الأساتذة والفصول والمحاضرات
const data = {
    "": {
        "الفصل الأول": [
            { "عنوان": "المحاضرة 1", "رابط": "https://iframe.mediadelivery.net/play/378895/9fee9da3-7aa2-45dc-8bcf-5e9293fabf08" },
            { "عنوان": "المحاضرة 2", "رابط": "https://iframe.mediadelivery.net/play/378895/another-video-id" }
        ],
        "الفصل الثاني": [
            { "عنوان": "المحاضرة 1", "رابط": "https://iframe.mediadelivery.net/play/378895/third-video-id" }
        ]
    },
    "عقيل الزبيدي": {
        "الفصل الأول": [
            { "عنوان": "المحاضرة 1", "رابط": "https://iframe.mediadelivery.net/play/378895/fourth-video-id" }
        ]
    }
};

// تحديد العناصر
const professorList = document.getElementById("professorList");
const courseList = document.getElementById("courseList");
const lectureList = document.getElementById("lectureList");
const videoContainer = document.getElementById("videoContainer");
const bunnyPlayer = document.getElementById("bunnyPlayer");

// تحميل الأساتذة
Object.keys(data).forEach(professor => {
    const li = document.createElement("li");
    li.textContent = professor;
    li.onclick = () => loadCourses(professor);
    professorList.appendChild(li);
});

// تحميل الفصول
function loadCourses(professor) {
    courseList.innerHTML = "";
    document.getElementById("courses").style.display = "block";
    document.getElementById("lectures").style.display = "none";
    videoContainer.style.display = "none";

    Object.keys(data[professor]).forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        li.onclick = () => loadLectures(professor, course);
        courseList.appendChild(li);
    });
}

// تحميل المحاضرات
function loadLectures(professor, course) {
    lectureList.innerHTML = "";
    document.getElementById("lectures").style.display = "block";
    videoContainer.style.display = "none";

    data[professor][course].forEach(lecture => {
        const li = document.createElement("li");
        li.textContent = lecture.عنوان;
        li.onclick = () => playVideo(lecture.رابط);
        lectureList.appendChild(li);
    });
}

// تشغيل الفيديو داخل iframe
function playVideo(url) {
    bunnyPlayer.src = url;
    videoContainer.style.display = "block";
}
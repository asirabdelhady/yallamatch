// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 30; // Adjust this value to your desired padding
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Smooth scroll for the "Register Now" button
document.querySelector('.btn-outline-secondary').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#how');
    const offset = 30; // Adjust this value to your desired padding
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.navbar-nav>li>a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

document.querySelector('.navbar-brand').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.navbar-brand').forEach(anchor => {
    anchor.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const langSwitch = document.getElementById('lang-switch');
    langSwitch.addEventListener('click', function () {
        const lang = this.textContent === 'English' ? 'en' : 'ar';
        console.log('Language switch button clicked. New language:', lang);
        switchLanguage(lang);
        this.textContent = lang === 'en' ? 'العربية' : 'English';
    });

    // Initialize with Arabic settings
    switchLanguage('ar');
});

const content = {
    ar: {
        welcome: "اهلا بيك في",
        yallaMatch: "يلا ماتش",
        yallaMatch2: "يلا ماتش",
        weGot: "عندنا ملاعب...عندنا ماتشات",
        missingYou: "ناقصنا انت",
        registerNow: "سجل حالا!؟",
        whoAreWe: "احنا مين؟",
        whoList: [
            "احنا فريق بيسهل عليك لعب اي ماتش",
            "سواء تعرف ناس او ماتعرفش",
            "سواء معاك فرقة او ممعكش",
            "دايما عندنا ماتشات اختار اليناسبك و تعالى"
        ],
        whyUs: "ليه احنا؟",
        whyText: "عندنا فريق كامل بيسهل عليك طريقة للتسجيل في اي ماتش منغير ما تتعب نفسك و تنزل تدور وهيوصلك تاكيد بالماتش الهتختاره. غير انك دايما هتلاقي ماتش يناسبك و اننا دايما موجودين حواليك",
        howToRegister: "تسجل ازاي؟",
        registerStepsText: "في اسهل ثلاث خطوات",
        registerStep: "سجل في الماتش اليناسبك",
        followInstagram: "تابعنا على الانستاحرام",
        joinTelegram: "ادخل جروب التليجرام",
        contactUs: "اتواصل معانا",
        contactText: "ادخل جروب التليجرام عشان يوصلك الاشعارات و تابعنا علز الانستاحرام عشان يوصلك اجدد الاخبار",
        navWho: "احنا مين؟",
        navWhy: "ليه احنا؟",
        navHow: "التسجيل",
        navContact: "التواصل",
    },
    en: {
        welcome: "Welcome to",
        yallaMatch: "Yalla Match",
        yallaMatch2: "YallaMatch!",
        weGot: "We got the feilds, we got the matches...",
        missingYou: "We are missing you!",
        registerNow: "Register Now!",
        whoAreWe: "Who Are We?",
        whoList: [
            "We are a team that makes it easy for you to play any match",
            "Whether you know people or not",
            "Whether you have a team or not",
            "We always have matches, choose what suits you and come"
        ],
        whyUs: "Why Us?",
        whyText: "We have a whole team that makes it easy for you to register for any match without tiring yourself and going out looking for one. You will get a confirmation for the match you choose. Additionally, you will always find a match that suits you, and we are always around you.",
        howToRegister: "How to Register?",
        registerStepsText: "In the easiest three steps",
        registerStep: "Register for the match that suits you",
        followInstagram: "Follow us on Instagram",
        joinTelegram: "Join the Telegram Group",
        contactUs: "Contact Us",
        contactText: "Join the Telegram group to receive notifications and follow us on Instagram for the latest news.",
        navWho: "Who Are We?",
        navWhy: "Why Us?",
        navHow: "How to Register",
        navContact: "Contact",
    }
};

function switchLanguage(lang) {
    console.log('Switching language to:', lang);
    document.getElementById('welcome').textContent = content[lang].welcome;
    document.getElementById('yallaMatch').textContent = content[lang].yallaMatch;
    document.getElementById('yallaMatch2').textContent = content[lang].yallaMatch2;
    document.getElementById('weGot').textContent = content[lang].weGot;
    document.getElementById('missingYou').textContent = content[lang].missingYou;
    document.getElementById('registerNow').textContent = content[lang].registerNow;
    document.getElementById('whoAreWe').textContent = content[lang].whoAreWe;

    const whoList = document.querySelectorAll('#whoList li');
    content[lang].whoList.forEach((text, index) => {
        whoList[index].textContent = text;
    });

    document.getElementById('whyUs').textContent = content[lang].whyUs;
    document.getElementById('whyText').textContent = content[lang].whyText;
    document.getElementById('howToRegister').textContent = content[lang].howToRegister;
    document.getElementById('registerStepsText').textContent = content[lang].registerStepsText;

    document.getElementById('registerStep').textContent = content[lang].registerStep;
    document.getElementById('followInstagram').textContent = content[lang].followInstagram;
    document.getElementById('joinTelegram').textContent = content[lang].joinTelegram;

    document.getElementById('contactUs').textContent = content[lang].contactUs;
    document.getElementById('contactText').textContent = content[lang].contactText;

    document.getElementById('navWho').textContent = content[lang].navWho;
    document.getElementById('navWhy').textContent = content[lang].navWhy;
    document.getElementById('navHow').textContent = content[lang].navHow;
    document.getElementById('navContact').textContent = content[lang].navContact;

    const ulElement = document.querySelector('#whoList');
    const divElement = ulElement.parentElement;

    if (lang === 'en') {
        ulElement.classList.remove('text-right', 'rtl');
        ulElement.classList.add('text-left');
        divElement.classList.remove('text-right');
        divElement.classList.add('text-left');
    } else {
        ulElement.classList.remove('text-left');
        ulElement.classList.add('text-right', 'rtl');
        divElement.classList.remove('text-left');
        divElement.classList.add('text-right');
    }

    const col1 = document.querySelector('.col-lg-4.order-3.order-md-1');
    const col2 = document.querySelector('.col-lg-4.order-2.order-md-2');
    const col3 = document.querySelector('.col-lg-4.order-1.order-md-3');

    if (lang === 'en') {
        col1.classList.remove('order-arabic-1');
        col2.classList.remove('order-arabic-2');
        col3.classList.remove('order-arabic-3');

        col1.classList.add('order-english-3');
        col2.classList.add('order-english-2');
        col3.classList.add('order-english-1');
    } else {
        col1.classList.remove('order-english-3');
        col2.classList.remove('order-english-2');
        col3.classList.remove('order-english-1');

        col1.classList.add('order-arabic-1');
        col2.classList.add('order-arabic-2');
        col3.classList.add('order-arabic-3');
    }
}

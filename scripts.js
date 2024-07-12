const translations = {
    ru: {
        about: 'О туре',
        tours: 'Расписание туров',
        booking: 'Бронирование',
        location: 'Как нас найти',
        aboutTitle: 'О ТУРЕ',
        aboutText: 'Погрузитесь в первобытную казахскую степь, живите в юртах и готовьте еду на костре. Испытайте настоящую жизнь кочевников! Мы обещаем только незабываемые эмоции.',
        toursTitle: 'РАСПИСАНИЕ ТУРОВ',
        tour1: '1-дневный тур',
        tour3: '3-дневный тур',
        tour5: '5-дневный тур',
        bookingTitle: 'БРОНИРОВАНИЕ',
        labelName: 'Имя:',
        labelEmail: 'Email:',
        labelTour: 'Выберите тур:',
        submit: 'Отправить заявку'
    },
    en: {
        about: 'About',
        tours: 'Tour Schedule',
        booking: 'Booking',
        location: 'Location',
        aboutTitle: 'ABOUT THE TOUR',
        aboutText: 'Immerse yourself in the primeval Kazakh steppe, live in yurts, and cook on an open fire. Experience the true life of nomads! We promise unforgettable emotions.',
        toursTitle: 'TOUR SCHEDULE',
        tour1: '1-day tour',
        tour3: '3-day tour',
        tour5: '5-day tour',
        bookingTitle: 'BOOKING',
        labelName: 'Name:',
        labelEmail: 'Email:',
        labelTour: 'Select tour:',
        submit: 'Submit'
    },
    kz: {
        about: 'Тур туралы',
        tours: 'Тур кестесі',
        booking: 'Брондау',
        location: 'Бізді табу',
        aboutTitle: 'ТУР ТУРАЛЫ',
        aboutText: 'Қазақ даласының алғашқы өміріне еніңіз, киіз үйлерде тұрып, ашық отта тамақ пісіріңіз. Көшпенділердің шынайы өмірін сезініңіз! Біз ұмытылмас эмоцияларды уәде етеміз.',
        toursTitle: 'ТУР КЕСТЕСІ',
        tour1: '1-күндік тур',
        tour3: '3-күндік тур',
        tour5: '5-күндік тур',
        bookingTitle: 'БРОНДАУ',
        labelName: 'Аты:',
        labelEmail: 'Email:',
        labelTour: 'Турды таңдаңыз:',
        submit: 'Өтінім жіберу'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.language-switcher button');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Set default language
    setLanguage('ru');
});

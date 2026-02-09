// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Fernando",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕💛💚
    pageTitle: "¿Te gustaria ser mi San Valetin? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💚', '💖', '💛 ', '💗', '💓','🌻'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Te gusto?",                                    // First interaction
            yesBtn: "Siii",                                             // Text for "Yes" button
            noBtn: "Noooo",                                               // Text for "No" button
            secretAnswer: "No me gustas, me encantas! 💚"           // Secret hover message
        },
        second: {
            text: "¿Me quiereeeees muchisimo?",                          // For the love meter
            startText: "¡Así de mucho!",                                   // Text before the percentage
            nextBtn: "Siguiente💚"                                         // Text for the next button
        },
        third: {
            text: "¿Te gustaria ser mi San Valentin? 🌹💚💛", // The big question!
            yesBtn: "Si💛",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW, ASI DE BASTANTE? 🥰🚀💛",  // Shows when they go past 5000%
        high: "MUCHISIMO MUCHISIMO! 🚀💛",              // Shows when they go past 1000%
        normal: "Poquis 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "SIIIIIIII, SOY LA PERSONA MÁS AFORTUNADA DEL MUNDO 🎉💝💛",
        message: "Me muero por darte un beso y un abrazo 💛",
        emojis: "💛💝💋❤️💕💚"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#fff1e6",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffe066"",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#c1121f",     // Button color (should stand out against the background)
        buttonHover: "#e6394",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#7f1d1d"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dzwtaoija/video/upload/v1770676205/Zoé_-Soñe_letra_b3kwnf.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

// ============================================
// DutchPath - Web Speech API Wrapper
// ============================================

const DutchSpeech = {
    synth: window.speechSynthesis,
    dutchVoice: null,
    initialized: false,

    init() {
        if (this.initialized) return;

        const loadVoices = () => {
            const voices = this.synth.getVoices();
            // Try to find a Dutch voice
            this.dutchVoice = voices.find(v => v.lang.startsWith('nl')) ||
                              voices.find(v => v.lang.includes('nl-NL')) ||
                              voices.find(v => v.name.toLowerCase().includes('dutch'));

            if (!this.dutchVoice) {
                console.log('No Dutch voice found, will use default with nl-NL lang');
            }
        };

        if (this.synth.getVoices().length) {
            loadVoices();
        }
        this.synth.onvoiceschanged = loadVoices;
        this.initialized = true;
    },

    speak(text, rate = 0.9) {
        const settings = DutchStorage.get('settings');
        if (settings && !settings.soundEnabled) return;

        this.synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'nl-NL';
        utterance.rate = rate;
        utterance.pitch = 1;
        utterance.volume = 1;

        if (this.dutchVoice) {
            utterance.voice = this.dutchVoice;
        }

        this.synth.speak(utterance);
    },

    speakSlow(text) {
        this.speak(text, 0.6);
    },

    stop() {
        this.synth.cancel();
    }
};

// Initialize on load
DutchSpeech.init();

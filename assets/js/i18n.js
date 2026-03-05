// Internationalization (i18n) utility for multi-language support

class I18n {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {};
        this.observers = [];
    }

    // Load language file
    async loadLanguage(lang) {
        try {
            const response = await fetch(`assets/locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Language file not found: ${lang}`);
            }
            this.translations = await response.json();
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.notifyObservers();
            return true;
        } catch (error) {
            console.error('Error loading language:', error);
            return false;
        }
    }

    // Get translation by key path (e.g., 'nav.home', 'hero.title')
    t(key, fallback = '') {
        const keys = key.split('.');
        let value = this.translations;

        for (const k of keys) {
            value = value && value[k];
        }

        return value || fallback || key;
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Set language
    async setLanguage(lang) {
        if (lang !== this.currentLanguage) {
            const success = await this.loadLanguage(lang);
            if (success) {
                this.updatePageTranslations();
            }
            return success;
        }
        return true;
    }

    // Update all translatable elements on the page
    updatePageTranslations() {
        // Update elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);

            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update elements with data-i18n-title attribute
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });

        // Update elements with data-i18n-value attribute
        const valueElements = document.querySelectorAll('[data-i18n-value]');
        valueElements.forEach(element => {
            const key = element.getAttribute('data-i18n-value');
            element.value = this.t(key);
        });
    }

    // Initialize i18n on page load
    async init() {
        await this.loadLanguage(this.currentLanguage);
        this.updatePageTranslations();
    }

    // Subscribe to language changes
    subscribe(callback) {
        this.observers.push(callback);
    }

    // Unsubscribe from language changes
    unsubscribe(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }

    // Notify observers of language change
    notifyObservers() {
        this.observers.forEach(callback => callback(this.currentLanguage));
    }
}

// Create global i18n instance
const i18n = new I18n();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
}

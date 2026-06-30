// ============================================
// DutchPath - Main App Controller
// ============================================

const App = {
    currentView: 'dashboard',

    init() {
        DutchStorage.syncCalendarProgress();
        this.setupNavigation();
        this.setupMobileMenu();
        this.handleHashChange();
        this.updateStreakDisplay();
        DashboardComponent.render();
    },

    start() {
        const data = DutchStorage.load();

        if (!data.onboarded) {
            document.getElementById('onboarding-overlay').classList.remove('hidden');
            document.getElementById('app').classList.add('hidden');
            OnboardingComponent.render();
        } else {
            document.getElementById('onboarding-overlay').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
            this.init();
        }
    },

    setupNavigation() {
        document.querySelectorAll('.nav-item[data-view]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.getAttribute('data-view');
                this.navigate(view);
                // Close mobile menu
                document.getElementById('sidebar').classList.remove('open');
                document.getElementById('mobile-overlay').classList.add('hidden');
            });
        });

        window.addEventListener('hashchange', () => this.handleHashChange());
    },

    setupMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('hidden');
            });
        }

        if (overlay) {
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.add('hidden');
            });
        }
    },

    handleHashChange() {
        const hash = window.location.hash.replace('#', '') || 'dashboard';
        if (['dashboard', 'lesson', 'vocabulary', 'grammar', 'flashcards', 'reading', 'knm', 'exam', 'settings'].includes(hash)) {
            this.showView(hash);
        }
    },

    navigate(viewName) {
        window.location.hash = viewName;
        this.showView(viewName);
    },

    showView(viewName) {
        this.currentView = viewName;

        // Hide all views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

        // Show requested view
        const view = document.getElementById(`view-${viewName}`);
        if (view) view.classList.add('active');

        // Update nav
        document.querySelectorAll('.nav-item[data-view]').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-view') === viewName);
        });

        // Render the component
        switch (viewName) {
            case 'dashboard': DashboardComponent.render(); break;
            case 'lesson': LessonComponent.render(); break;
            case 'vocabulary': VocabularyBrowserComponent.render(); break;
            case 'grammar': GrammarBrowserComponent.render(); break;
            case 'flashcards': FlashcardsComponent.reset(); FlashcardsComponent.render(); break;
            case 'reading': ReadingComponent.render(); break;
            case 'knm': KNMComponent.render(); break;
            case 'exam': ExamComponent.render(); break;
            case 'settings': SettingsComponent.render(); break;
        }

        // Scroll to top
        window.scrollTo(0, 0);
    },

    updateStreakDisplay() {
        const data = DutchStorage.load();
        const streakCount = document.getElementById('streak-count');
        const mobileStreak = document.getElementById('mobile-streak-count');

        if (streakCount) streakCount.textContent = data.streak.count;
        if (mobileStreak) mobileStreak.textContent = data.streak.count;
    }
};

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.start();
});

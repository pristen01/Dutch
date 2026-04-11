// ============================================
// DutchPath - Settings Component
// ============================================

const SettingsComponent = {
    render() {
        const container = document.getElementById('view-settings');
        const data = DutchStorage.load();
        const config = DutchStorage.getModeConfig(data.mode);
        const examDate = DutchStorage.getExamDate();

        container.innerHTML = `
            <div class="page-header">
                <h2>⚙️ Settings</h2>
                <p>Configure your study preferences</p>
            </div>

            <!-- Study Mode -->
            <div class="settings-section">
                <h3>📚 Study Mode</h3>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Current Mode</div>
                        <div class="setting-description">${config.emoji} ${config.name} — ${config.description}</div>
                    </div>
                    <div class="setting-control">
                        <select onchange="SettingsComponent.changeMode(this.value)">
                            <option value="speed" ${data.mode === 'speed' ? 'selected' : ''}>🚀 Speed (16 weeks)</option>
                            <option value="accelerated" ${data.mode === 'accelerated' ? 'selected' : ''}>⚡ Accelerated (32 weeks)</option>
                            <option value="standard" ${data.mode === 'standard' ? 'selected' : ''}>📚 Standard (52 weeks)</option>
                        </select>
                    </div>
                </div>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Start Date</div>
                        <div class="setting-description">${data.startDate || 'Not set'}</div>
                    </div>
                    <div class="setting-control">
                        <input type="date" value="${data.startDate || ''}" onchange="SettingsComponent.changeStartDate(this.value)">
                    </div>
                </div>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Target Exam Date</div>
                        <div class="setting-description">${examDate ? examDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not calculated'}</div>
                    </div>
                </div>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Current Week</div>
                        <div class="setting-description">Week ${data.currentWeek} of ${config.totalWeeks}</div>
                    </div>
                    <div class="setting-control">
                        <select onchange="SettingsComponent.changeWeek(parseInt(this.value))">
                            ${Array.from({length: config.totalWeeks}, (_, i) => i + 1).map(w => 
                                `<option value="${w}" ${w === data.currentWeek ? 'selected' : ''}>Week ${w}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
            </div>

            <!-- Audio Settings -->
            <div class="settings-section">
                <h3>🔊 Audio & Sound</h3>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Sound Effects</div>
                        <div class="setting-description">Enable pronunciation audio</div>
                    </div>
                    <label class="toggle">
                        <input type="checkbox" ${data.settings.soundEnabled ? 'checked' : ''} onchange="SettingsComponent.toggleSetting('soundEnabled', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Auto-speak Words</div>
                        <div class="setting-description">Automatically play pronunciation for new words</div>
                    </div>
                    <label class="toggle">
                        <input type="checkbox" ${data.settings.autoSpeak ? 'checked' : ''} onchange="SettingsComponent.toggleSetting('autoSpeak', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <!-- Progress -->
            <div class="settings-section">
                <h3>📊 Progress & Data</h3>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Streak</div>
                        <div class="setting-description">🔥 ${data.streak.count} day streak (last: ${data.streak.lastDate || 'never'})</div>
                    </div>
                </div>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Vocabulary Learned</div>
                        <div class="setting-description">${Object.keys(data.vocabMastery).length} words tracked</div>
                    </div>
                </div>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Exams Taken</div>
                        <div class="setting-description">${data.examResults.length} mock exams completed</div>
                    </div>
                </div>
            </div>

            <!-- Danger Zone -->
            <div class="settings-section" style="border-color: rgba(239, 71, 111, 0.3);">
                <h3 style="color: var(--danger);">⚠️ Danger Zone</h3>
                <div class="setting-row">
                    <div>
                        <div class="setting-label">Reset All Progress</div>
                        <div class="setting-description">This will delete all your progress, scores, and settings. This cannot be undone.</div>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="SettingsComponent.confirmReset()">
                        Reset Everything
                    </button>
                </div>
            </div>
        `;
    },

    changeMode(mode) {
        DutchStorage.set('mode', mode);
        this.render();
    },

    changeStartDate(date) {
        DutchStorage.set('startDate', date);
        this.render();
    },

    changeWeek(week) {
        DutchStorage.set('currentWeek', week);
        this.render();
    },

    toggleSetting(key, value) {
        DutchStorage.update(data => {
            data.settings[key] = value;
        });
    },

    confirmReset() {
        if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
            if (confirm('Really? All your vocabulary progress, exam scores, and streak will be lost.')) {
                DutchStorage.reset();
                location.reload();
            }
        }
    }
};

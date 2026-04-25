// Initialize Lucide Icons
lucide.createIcons();

// Live Clock in Status Bar
function updateClock() {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}
setInterval(updateClock, 1000);
updateClock();

// Terminal Swarm Logs Simulation
const terminalOutput = document.getElementById('terminal-output');
const swarmLogs = [
    { text: "> Initializing AgentScope Mainframe...", class: "log-sys" },
    { text: "> Loading sqlite-vec Memory Bank [OK]", class: "log-sys" },
    { text: "> [HUNTER_AGENT] Scraping GTU Portal for updates...", class: "log-warn" },
    { text: "> [HUNTER_AGENT] Found 3 new circulars. Indexing...", class: "log-warn" },
    { text: "> [SCHOLAR_AGENT] User queried: 'Explain FFT algorithm'.", class: "log-sys" },
    { text: "> [SCHOLAR_AGENT] Extracting relevant context from Semester 4 > Signals & Systems...", class: "log-sys" },
    { text: "> [ARCHITECT_AGENT] Requesting Mermaid.js synthesis for FFT Butterfly diagram.", class: "log-warn" },
    { text: "> [ERROR] Server latency high. Fallback to local cache.", class: "log-err" },
    { text: "> [ARCHITECT_AGENT] Diagram rendered successfully.", class: "log-sys" },
    { text: "> [SYSTEM] Response delivered in 1.4s.", class: "log-sys" },
    { text: "> _", class: "log-sys" }
];

let logIndex = 0;
function typeLog() {
    if (!terminalOutput) return;
    
    // Remove the blinking cursor if it exists at the end
    if (terminalOutput.lastChild && terminalOutput.lastChild.textContent === "> _") {
        terminalOutput.removeChild(terminalOutput.lastChild);
    }

    const log = swarmLogs[logIndex];
    const logEl = document.createElement('div');
    logEl.className = log.class;
    logEl.textContent = log.text;
    terminalOutput.appendChild(logEl);

    // Keep only last 8 logs to avoid overflowing window
    while (terminalOutput.children.length > 8) {
        terminalOutput.removeChild(terminalOutput.firstChild);
    }

    logIndex++;
    if (logIndex >= swarmLogs.length) {
        logIndex = 2; // Loop back to scraping logic
    }

    // Random interval between 800ms and 2500ms
    setTimeout(typeLog, Math.random() * 1700 + 800);
}

if (terminalOutput) {
    setTimeout(typeLog, 1000);
}

// Window Controls (Visual feedback only for this static layout)
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const windowEl = e.target.closest('.window');
        if (windowEl) {
            windowEl.style.opacity = '0';
            windowEl.style.transform = 'scale(0.9)';
            setTimeout(() => windowEl.style.display = 'none', 200);
        }
    });
});

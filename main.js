// Initialize Lucide Icons
lucide.createIcons();

// Smooth reveal on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .section-title').forEach(el => {
    el.classList.add('animate-in'); // Fallback if observer not supported
    observer.observe(el);
});

// Mock Interactive Graph Node movement
const nodes = document.querySelectorAll('.node');
nodes.forEach(node => {
    node.addEventListener('mouseover', () => {
        node.style.transform = 'scale(1.1) translateY(-5px)';
        node.style.borderColor = '#fff';
        node.style.color = '#fff';
    });
    
    node.addEventListener('mouseout', () => {
        node.style.transform = 'scale(1) translateY(0)';
        node.style.borderColor = 'var(--accent)';
        node.style.color = 'var(--accent)';
    });
});

// Typing effect for logs
const logContainer = document.querySelector('.agent-logs');
const logs = [
    '> Initializing AgentScope Swarm...',
    '> Scholar: Extracting reasoning patterns...',
    '> Architect: Diagram synthesized successfully.',
    '> System: Diagrammatics Core ready.'
];

let logIndex = 0;
function addLog() {
    if (logIndex < logs.length) {
        const entry = document.createElement('div');
        entry.className = 'log-entry' + (logs[logIndex].includes('success') || logs[logIndex].includes('ready') ? ' log-success' : '');
        entry.textContent = logs[logIndex];
        logContainer.appendChild(entry);
        logIndex++;
        setTimeout(addLog, 1500);
    }
}

// Clear initial logs and start typing effect
logContainer.innerHTML = '';
setTimeout(addLog, 1000);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(9, 9, 11, 0.95)';
        nav.style.height = '70px';
    } else {
        nav.style.background = 'rgba(9, 9, 11, 0.8)';
        nav.style.height = '80px';
    }
});

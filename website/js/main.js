// Main JavaScript for AVID Lesson Website

document.addEventListener('DOMContentLoaded', function() {
    // Tab system for worksheets
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Calendar highlighting for lesson days
    const calendarDays = document.querySelectorAll('.calendar td');
    calendarDays.forEach(day => {
        if (day.classList.contains('lesson-day')) {
            day.addEventListener('click', () => {
                const lessonDate = day.getAttribute('data-date');
                const lessonDetails = document.getElementById(`lesson-${lessonDate}`);
                
                if (lessonDetails) {
                    // Smooth scroll to lesson details
                    lessonDetails.scrollIntoView({ behavior: 'smooth' });
                    
                    // Highlight the lesson details briefly
                    lessonDetails.classList.add('highlight');
                    setTimeout(() => {
                        lessonDetails.classList.remove('highlight');
                    }, 2000);
                }
            });
        }
    });
    
    // Interactive elements for worksheets preview
    const worksheetLinks = document.querySelectorAll('.worksheet-link');
    worksheetLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('data-preview') === 'true') {
                e.preventDefault();
                const worksheetId = link.getAttribute('href').substring(1);
                const worksheetPreview = document.getElementById(worksheetId);
                
                if (worksheetPreview) {
                    // Toggle worksheet preview
                    if (worksheetPreview.style.display === 'block') {
                        worksheetPreview.style.display = 'none';
                        link.textContent = 'Preview Worksheet';
                    } else {
                        worksheetPreview.style.display = 'block';
                        link.textContent = 'Hide Preview';
                    }
                }
            }
        });
    });
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
    
    // Initialize first tab as active
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});

// Function to toggle between printable and digital versions
function toggleWorksheetVersion(worksheetId, isDigital) {
    const digitalVersion = document.getElementById(`${worksheetId}-digital`);
    const printableVersion = document.getElementById(`${worksheetId}-printable`);
    
    if (isDigital) {
        digitalVersion.style.display = 'block';
        printableVersion.style.display = 'none';
    } else {
        digitalVersion.style.display = 'none';
        printableVersion.style.display = 'block';
    }
}

// Function to download worksheets
function downloadWorksheet(worksheetName) {
    // In a real implementation, this would trigger a download
    alert(`Downloading ${worksheetName}...`);
    // Actual download functionality would be implemented here
}

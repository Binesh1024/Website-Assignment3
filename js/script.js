function showTab(event, tabId) {
    // Get the elements for title, paragraph, and image
    const title = document.getElementById('tab-title');
    const paragraph = document.getElementById('tab-paragraph');
    const image = document.getElementById('tab-image');

    // Define the content for each tab, including image src and alt text
    const content = {
        'who-we-are': {
            title: 'Who We Are',
            paragraph: 'Balance Mind Hub is a compassionate collective of mental health professionals, tech innovators, and empathetic individuals...',
            imageSrc: 'img/meditating.jpg',  // Image for "Who We Are"
            imageAlt: 'Illustration of a compassionate group'
        },
        'our-goals': {
            title: 'Our Goals',
            paragraph: 'Our goal is to create a safe space for people to access mental health resources and support systems.',
            imageSrc: 'img/goal.png',   // Image for "Our Goals"
            imageAlt: 'Illustration representing goals'
        },
        'our-team': {
            title: 'Our Team',
            paragraph: 'Meet our diverse team of mental health experts, developers, and community leaders.',
            imageSrc: 'img/team.png',    // Image for "Our Team"
            imageAlt: 'Illustration of our team'
        }
    };

    // Update the content based on the clicked tab
    title.textContent = content[tabId].title;
    paragraph.textContent = content[tabId].paragraph;
    image.src = content[tabId].imageSrc; // Update image source
    image.alt = content[tabId].imageAlt; // Update image alt text

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}

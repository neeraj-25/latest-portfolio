const welcome = document.getElementById("welcome");
// console.log(welcome);
const checkbox=document.getElementById("checkbox")
console.log(checkbox);

checkbox.addEventListener("click", () => {
  welcome.classList.toggle("hidden"); 
});

const numberOfStars = 50; // Number of stars to generate
        const second = document.getElementById("second-section");

        function createStar() {
            const star = document.createElement('div');
            star.classList.add('star');

            // Set random position
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            // Set random size
            const size = Math.random() * 3 + 1; // Size between 1 and 4
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Set random blink speed
            const blinkDuration = Math.random() * 1 + 0.5; // Duration between 0.5s and 1.5s
            star.style.animationDuration = `${blinkDuration}s`;

            second.appendChild(star);
        }

        // Generate stars
        for (let i = 0; i < numberOfStars; i++) {
            createStar();
        }
        
        const footerText = document.getElementById('footer-thankyou');

        // Change text on hover
        footerText.addEventListener('mouseover', () => {
            footerText.textContent = 'Bye!';
        });
        
        // Change back to original text when not hovering
        footerText.addEventListener('mouseout', () => {
            footerText.textContent = 'Thank You!';
        });
        
document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Navigation Menu (Mobile)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Form Submission Handling (Simulasi)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Ambil data form jika diperlukan
        const nama = document.getElementById('nama').value;

        // Tampilkan pesan sukses sederhana
        formStatus.textContent = `Terima kasih, Bapak/Ibu ${nama}. Pesan Anda berhasil dikirim!`;
        formStatus.className = 'form-status success';

        // Reset form
        contactForm.reset();

        // Sembunyikan status setelah 5 detik
        setTimeout(() => {
            formStatus.style.display = 'none';
            formStatus.className = 'form-status';
        }, 5000);
    });
});

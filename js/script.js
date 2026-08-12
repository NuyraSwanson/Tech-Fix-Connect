const storageKey = 'techfixRepairs';

function getRepairs() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || '[]');
  } catch (error) {
    return [];
  }
}

function saveRepair(repair) {
  const repairs = getRepairs();
  repairs.push(repair);
  localStorage.setItem(storageKey, JSON.stringify(repairs));
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function showMessage(element, message, type = 'success') {
  if (!element) return;
  element.className = `form-message ${type}`;
  element.innerHTML = message;
}

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  const animatedItems = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  animatedItems.forEach((item) => observer.observe(item));

  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('button');
    const answer = item.querySelector('.faq-answer');

    if (button && answer) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach((faq) => {
          faq.classList.remove('active');
        });
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  const bookingForm = document.querySelector('form[data-form="booking"]');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = new FormData(bookingForm);
      const repairId = `TFC-${Math.floor(1000 + Math.random() * 9000)}`;
      const repair = {
        id: repairId,
        device: data.get('deviceType') || 'Device',
        brand: data.get('brand') || 'Unknown',
        status: 'Received',
        estimated: formatDate(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)),
        notes: 'Your device has been received and is being reviewed by our technicians.',
        name: data.get('fullName') || 'Student'
      };

      saveRepair(repair);
      showMessage(document.getElementById('bookingMessage'), `Request received! Your Repair ID is <strong>${repairId}</strong>. Keep it safe for tracking.`, 'success');
      bookingForm.reset();
    });
  }

  const trackingForm = document.querySelector('form[data-form="tracking"]');
  const trackingStatus = document.getElementById('trackingStatus');
  if (trackingForm && trackingStatus) {
    trackingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = trackingForm.querySelector('input[name="repairId"]');
      const repairId = (input?.value || '').trim().toUpperCase();

      if (!repairId) {
        showMessage(document.getElementById('trackingMessage'), 'Please enter a valid Repair ID.', 'error');
        trackingStatus.style.display = 'none';
        return;
      }

      const repair = getRepairs().find((entry) => entry.id.toUpperCase() === repairId);
      if (!repair) {
        showMessage(document.getElementById('trackingMessage'), 'No repair was found for that ID. Please double-check the code or book a new repair.', 'error');
        trackingStatus.style.display = 'none';
        return;
      }

      document.getElementById('statusRepairId').textContent = repair.id;
      document.getElementById('statusDevice').textContent = `${repair.brand} ${repair.device}`;
      document.getElementById('statusValue').textContent = repair.status;
      document.getElementById('statusEstimate').textContent = repair.estimated;
      document.getElementById('statusNotes').textContent = repair.notes;
      trackingStatus.style.display = 'block';
      showMessage(document.getElementById('trackingMessage'), `Tracking update found for ${repair.id}.`, 'success');
    });
  }

  const contactForm = document.querySelector('form[data-form="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      showMessage(document.getElementById('contactMessage'), 'Thanks for reaching out. Our team will get back to you shortly.', 'success');
      contactForm.reset();
    });
  }
});

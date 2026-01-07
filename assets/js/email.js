document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const f = e.target;

  const to      = 'gailywvls@berkeley.edu';
  const subject = encodeURIComponent(f.subject.value);

  const body = encodeURIComponent(
    [ 
      f.message.value,
      '',
      f.fullname.value,
      f.email.value,
      f.phone.value,
    ].join('\n')
  );

  const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailURL, '_blank');    
});
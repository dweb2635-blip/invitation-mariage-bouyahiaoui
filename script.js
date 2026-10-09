'use strict';
// Début du mariage à 15 h, heure locale d’Algérie (UTC+01:00).
const WEDDING_CONFIG = Object.freeze({
  date: '2026-11-24T15:00:00+01:00',
  timeZone: 'Africa/Algiers',
  mapsUrl: 'https://maps.app.goo.gl/3szB2J2ySvs3HLwZA?g_st=ic'
});
function remainingTime(now, target) {
  const total = Math.max(0, Math.floor((target - now) / 1000));
  return { days: Math.floor(total / 86400), hours: Math.floor(total / 3600) % 24, minutes: Math.floor(total / 60) % 60, seconds: total % 60, ended: now >= target };
}
const welcome = document.getElementById('welcome');
const main = document.getElementById('invitation');
const openButton = document.getElementById('open-invitation');
const replay = document.getElementById('replay');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const weddingMusic = document.getElementById('wedding-music');
const musicToggle = document.getElementById('music-toggle');
let musicStarted = false;
function updateMusicButton() {
  const playing = !weddingMusic.paused;
  musicToggle.setAttribute('aria-pressed', String(playing));
  musicToggle.setAttribute('aria-label', weddingText(playing ? 'musicPause' : 'musicPlay'));
  document.getElementById('music-label').textContent = weddingText(playing ? 'pause' : 'play');
}
weddingMusic.volume = 0.45;
weddingMusic.addEventListener('loadedmetadata', () => {
  if (!musicStarted) weddingMusic.currentTime = 15;
});
function playWeddingMusic() {
  if (!musicStarted && weddingMusic.readyState >= 1) weddingMusic.currentTime = 15;
  weddingMusic.play().then(() => { musicStarted = true; }).catch(updateMusicButton);
}
for (const event of ['play', 'pause', 'error']) weddingMusic.addEventListener(event, updateMusicButton);
weddingMusic.addEventListener('ended', () => {
  weddingMusic.currentTime = 15;
  musicStarted = false;
  playWeddingMusic();
});
musicToggle.addEventListener('click', () => weddingMusic.paused ? playWeddingMusic() : weddingMusic.pause());
let opening = false;
let focusTimer;
function showEnvelope() {
  clearTimeout(focusTimer);
  document.getElementById('petals').replaceChildren();
  opening = false;
  welcome.classList.remove('opening', 'leaving');
  welcome.hidden = false;
  main.inert = true;
  document.body.classList.add('locked');
  openButton.disabled = false;
  openButton.focus({ preventScroll: true });
}
function petals() {
  if (reducedMotion.matches) return;
  for (let i = 0; i < 9; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${8 + Math.random() * 80}%`;
    petal.style.animationDelay = `${Math.random() * 1.5}s`;
    document.getElementById('petals').append(petal);
    petal.addEventListener('animationend', () => petal.remove(), { once: true });
  }
}
openButton.addEventListener('click', () => {
  if (opening) return;
  opening = true;
  openButton.disabled = true;
  welcome.classList.add('opening');
  musicToggle.hidden = false;
  playWeddingMusic();
  window.setTimeout(() => {
    welcome.classList.add('leaving');
    main.inert = false;
    document.body.classList.remove('locked');
    window.scrollTo({ top: 0, behavior: 'instant' });
    main.focus({ preventScroll: true });
    petals();
    focusTimer = window.setTimeout(() => { welcome.hidden = true; }, reducedMotion.matches ? 0 : 750);
  }, reducedMotion.matches ? 0 : 4200);
});
replay.hidden = false;
replay.addEventListener('click', showEnvelope);
document.getElementById('maps-link').href = WEDDING_CONFIG.mapsUrl;
const target = new Date(WEDDING_CONFIG.date).getTime();
function updateCountdown() {
  const remaining = remainingTime(Date.now(), target);
  for (const unit of ['days', 'hours', 'minutes', 'seconds']) document.getElementById(unit).textContent = String(remaining[unit]).padStart(2, '0');
  if (remaining.ended) document.getElementById('count-caption').textContent = weddingText('ended');
}
updateCountdown();
window.addEventListener('weddinglanguagechange', () => { updateMusicButton(); updateCountdown(); });
updateMusicButton();
window.setInterval(updateCountdown, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateCountdown(); });
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(section => { section.classList.add('ready'); observer.observe(section); });
  const programme = document.getElementById('programme');
  programme.classList.add('animate-points');
  const programmeObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      programme.classList.add('points-visible');
      programmeObserver.disconnect();
    }
  }, { threshold: 0.15 });
  programmeObserver.observe(programme);
}
showEnvelope();

const galleryTrack = document.getElementById('gallery-track');
if (galleryTrack) {
  const slides = [...galleryTrack.querySelectorAll('.gallery-slide')];
  let galleryIndex = 0;
  const count = document.getElementById('gallery-count');
  document.querySelector('.gallery-controls').hidden = false;
  function moveGallery(direction) {
    galleryIndex = (galleryIndex + direction + slides.length) % slides.length;
    galleryTrack.scrollTo({ left: galleryIndex * galleryTrack.clientWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  document.getElementById('gallery-prev').addEventListener('click', () => moveGallery(-1));
  document.getElementById('gallery-next').addEventListener('click', () => moveGallery(1));
  galleryTrack.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      moveGallery(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  galleryTrack.addEventListener('scroll', () => {
    const index = Math.round(galleryTrack.scrollLeft / galleryTrack.clientWidth);
    count.textContent = `${index + 1} / ${slides.length}`;
  }, { passive: true });
  galleryTrack.addEventListener('scrollend', () => {
    galleryIndex = Math.round(galleryTrack.scrollLeft / galleryTrack.clientWidth);
  });
  window.addEventListener('resize', () => galleryTrack.scrollTo({ left: galleryIndex * galleryTrack.clientWidth, behavior: 'instant' }));
  const pauseButton = document.getElementById('gallery-pause');
  let paused = reducedMotion.matches;
  let galleryVisible = false;
  function updatePauseButton() {
    pauseButton.textContent = paused ? '▶' : 'Ⅱ';
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.setAttribute('aria-label', weddingText(paused ? 'galleryPlay' : 'galleryPause'));
    count.setAttribute('aria-live', paused ? 'polite' : 'off');
  }
  updatePauseButton();
  window.addEventListener('weddinglanguagechange', updatePauseButton);
  pauseButton.addEventListener('click', () => { paused = !paused; updatePauseButton(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { galleryVisible = entries[0].isIntersecting; }, { threshold: 0.2 }).observe(galleryTrack);
  } else galleryVisible = true;
  window.setInterval(() => {
    if (!paused && galleryVisible && !document.hidden && !galleryTrack.matches(':hover') && !document.querySelector('.gallery-controls').contains(document.activeElement) && document.activeElement !== galleryTrack) moveGallery(1);
  }, 4000);
}

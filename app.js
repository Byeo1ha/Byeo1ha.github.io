(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  let language = 'ko';
  try { language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ko'; } catch { /* Storage can be disabled. */ }
  const text = value => typeof value === 'object' && value !== null ? value[language] ?? value.ko ?? '' : value;
  const copy = (ko, en) => language === 'ko' ? ko : en;
  const safeUrl = value => {
    if (!value) return '';
    try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  };
  const tags = values => `<div class="tags">${values.map(value => `<span class="tag">${escape(value)}</span>`).join('')}</div>`;
  const kindName = kind => kind === 'team' ? copy('팀 프로젝트', 'Team project') : copy('개인 프로젝트', 'Solo project');
  const art = project => {
    const image = project.image && (/^\.\//.test(project.image) || safeUrl(project.image));
    return `<div class="project-art art-${['orbit', 'pixel', 'wave', 'grid'].includes(project.art) ? project.art : 'orbit'}" aria-hidden="true">${image ? `<img src="${escape(project.image)}" alt="" loading="lazy" decoding="async" width="960" height="540">` : `<span class="art-symbol">${escape(project.symbol || '◈')}</span><span class="art-label">${escape(project.name)}</span>`}</div>`;
  };
  const sectionHeading = (id, label, title, description) => {
    $(`${id}-heading`).innerHTML = `<p class="section-label">${label}</p><h2 class="section-title" id="${id}-title">${escape(title)}</h2><p class="section-description">${escape(description)}</p>`;
  };
  let filter = 'all';
  function renderGames() {
    $('filters').innerHTML = Object.entries({ all: 'All', team: copy('팀 프로젝트', 'Team'), solo: copy('개인 프로젝트', 'Solo') }).map(([id, name]) => `<button type="button" class="filter-button${filter === id ? ' active' : ''}" data-filter="${id}" aria-pressed="${filter === id}">${name}</button>`).join('');
    const projects = data.projects.filter(project => filter === 'all' || project.kind === filter);
    const groups = new Map();
    projects.forEach(project => { const group = text(project.group); if (!groups.has(group)) groups.set(group, []); groups.get(group).push(project); });
    $('game-projects').innerHTML = Array.from(groups, ([name, items]) => `<div class="company-group"><h3>${escape(name)}</h3><div class="project-grid">${items.map(project => `<button type="button" class="project-card" data-project="${escape(project.id)}"><h4>${escape(project.name)} <span aria-hidden="true">↗</span></h4><p class="project-meta">${escape(project.period)} · ${escape(text(project.role))}</p>${tags(project.stack)}</button>`).join('')}</div></div>`).join('') || `<p class="empty-state">${copy('이 분류의 프로젝트가 아직 없습니다.', 'No projects in this category yet.')}</p>`;
  }
  function render() {
    document.documentElement.lang = language;
    document.title = `${text(data.name)} — Developer Portfolio`;
    document.querySelector('meta[name="description"]').content = text(data.summary).replace(/\n/g, ' ');
    $('language').value = language;
    document.querySelectorAll('[data-name]').forEach(node => { node.textContent = text(data.name); });
    document.querySelector('.skip-link').textContent = copy('본문으로 건너뛰기', 'Skip to content');
    $('menu-toggle').setAttribute('aria-label', copy('메뉴 열기 / 닫기', 'Toggle navigation'));
    $('dialog-close').setAttribute('aria-label', copy('닫기', 'Close'));
    $('navigation').innerHTML = [['home', 'Home'], ['profile', 'Profile'], ['games', 'Games'], ['awards', 'Awards'], ['skills', 'Tech Stack'], ['contact', 'Contact']].map(([id, label]) => `<a href="#${id}">${label}</a>`).join('');
    $('hero-badge').textContent = text(data.badge);
    $('hero-title').innerHTML = `<span class="gradient-text">${escape(text(data.role))}</span>`;
    $('hero-name').textContent = text(data.name);
    $('hero-description').innerHTML = escape(text(data.heroDescription ?? data.summary)).replace(/\n/g, '<br>');
    $('hero-actions').innerHTML = `<a class="button primary" href="#games">${copy('프로젝트 살펴보기', 'View Projects')}</a><a class="button secondary" href="#contact">${copy('연락하기', 'Get in Touch')}</a><a class="button resume-accent" href="./resume.html?lang=${language}&print=1" target="_blank" rel="noopener">${copy('이력서 PDF 저장', 'Save résumé PDF')}</a><a class="button secondary" href="./resume.html?lang=${language}">${copy('웹 이력서', 'Web résumé')}</a>`;
    const spotlight = data.projects.find(project => project.id === data.heroSpotlight.projectId);
    $('hero-spotlight').dataset.project = spotlight.id;
    $('hero-spotlight').innerHTML = `<img src="${escape(spotlight.image)}" alt="${escape(spotlight.name)}" width="960" height="540" decoding="async"><span class="hero-spotlight-caption"><strong>${escape(spotlight.name)}</strong><span>${escape(text(data.heroSpotlight.caption))}</span><span class="hero-spotlight-link">${copy('프로젝트 자세히 보기', 'Explore the project')} <span aria-hidden="true">↗</span></span></span>`;
    const highlightIcons = {
      trophy: '<path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 13v5M8 21h8M9 18h6v3"/>',
      exhibition: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4m-2-13 5 3-5 3V8Z"/>'
    };
    $('hero-highlights').innerHTML = data.heroHighlights.map(item => `<li><span class="hero-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${highlightIcons[item.icon]}</svg></span><span class="hero-highlight-text"><strong>${escape(text(item.title))}</strong><span>${escape(text(item.label))}</span></span></li>`).join('');
    $('profile-heading').innerHTML = '<p class="section-label">01 / ABOUT ME</p><h2 class="section-title" id="profile-title">Profile</h2>';
    $('template-notice').textContent = data.isTemplate ? copy('TEMPLATE · 아래 경력, 프로젝트, 기술은 구성 예시입니다. data.js에서 본인 정보로 교체하세요.', 'TEMPLATE · Experience, projects, and skills below are examples. Replace them with your own in data.js.') : '';
    $('template-notice').hidden = !data.isTemplate;
    const profileIcons = {
      education: '<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 3 7 3 10 0v-5M21 9v7"/>',
      gameplay: '<path d="M7 7h10c2 0 3 2 3.5 4l1 6c.3 2-1.8 3-3 1l-2-2h-9l-2 2c-1.2 2-3.3 1-3-1l1-6C4 9 5 7 7 7Z"/><path d="M6 11h4M8 9v4M16 10h.01M18 12h.01"/>',
      architecture: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>'
    };
    $('profile-content').innerHTML = data.profileCards.map(card => `<article class="profile-card" data-profile="${escape(card.icon)}"><h3 class="profile-card-title"><span class="profile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${profileIcons[card.icon]}</svg></span>${escape(text(card.title))}</h3><p class="profile-card-headline">${escape(text(card.headline))}</p><p class="profile-card-description">${escape(text(card.description))}</p></article>`).join('');
    sectionHeading('games', '02 / SELECTED WORK', 'Game Projects', copy('아이디어를 플레이 가능한 경험으로. 프로젝트를 눌러 자세히 살펴보세요.', 'From an idea to a playable experience. Select a project to explore the details.'));
    $('featured-title').textContent = '✦ Featured Projects';
    $('featured-projects').innerHTML = data.projects.filter(project => project.featured).map(project => `<button class="featured-card" type="button" data-project="${escape(project.id)}">${art(project)}<div class="featured-caption"><h4>${escape(project.name)}</h4><p>${escape(kindName(project.kind))} <span aria-hidden="true">↗</span></p></div></button>`).join('');
    renderGames();
    sectionHeading('work', '03 / WORK IN PROGRESS', copy('진행 중인 프로젝트', 'Work in Progress'), copy('현재 개발 중인 게임과 담당 범위를 소개합니다.', 'The game I am currently building and my responsibilities.'));
    $('work-projects').className = 'project-grid';
    $('work-projects').innerHTML = data.work.map(project => `<button type="button" class="project-card" data-work="${escape(project.id)}"><h4>${escape(text(project.name))} <span aria-hidden="true">↗</span></h4><p class="project-meta">${escape(project.period)} <span class="badge subtle">${escape(text(project.status))}</span></p>${tags(project.stack)}</button>`).join('');
    $('work').hidden = !data.work.length;
    $('tools').hidden = !data.tools.length;
    sectionHeading('tools', '04 / BEYOND GAMES', copy('서버 · 웹 · 개발 도구', 'Servers, Web & Tools'), copy('게임 밖에서도 이어지는 문제 해결과 더 나은 개발 경험.', 'Solving problems beyond games and building better development experiences.'));
    $('tool-projects').innerHTML = data.tools.map(project => `<article class="tool-card"><p class="section-label">${escape(text(project.role))}</p><h3>${escape(text(project.name))}</h3><p>${escape(text(project.description))}</p>${tags(project.stack)}${safeUrl(project.url) ? `<a class="text-link" href="${escape(safeUrl(project.url))}" target="_blank" rel="noopener noreferrer">${copy('프로젝트 보기', 'View project')} ↗</a>` : `<span class="project-meta">${copy('공개 링크 미등록', 'No public link added')}</span>`}</article>`).join('');
    sectionHeading('awards', '04 / AWARDS & EXHIBITIONS', copy('수상 · 전시', 'Awards & Exhibitions'), copy('프로젝트를 통해 함께 만든 결과와 전시의 기록입니다.', 'Recognition and exhibition records from the projects.'));
    $('awards').hidden = !(data.awards || []).length;
    $('award-list').innerHTML = (data.awards || []).map(award => {
      const caption = `<div class="award-caption"><span class="section-label">${escape(award.year)}</span><h3>${escape(text(award.title))}</h3><p>${escape(award.project)}</p></div>`;
      if (!award.image || !award.fullImage) return `<article class="award-card award-card-pending"><div class="award-image award-image-pending"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v5m-4 3h8m-7-3h6v3"/></svg><p>${copy('사진 준비 중', 'Photo to follow')}</p></div>${caption}</article>`;
      return `<button class="award-card" type="button" data-award="${escape(award.id)}" aria-label="${escape(text(award.title))} — ${copy('이미지 확대', 'Enlarge image')}"><div class="award-image"><img src="${escape(award.image)}" alt="" loading="lazy" decoding="async" width="640" height="420"><span aria-hidden="true">↗</span></div>${caption}</button>`;
    }).join('');
    sectionHeading('skills', '05 / MY TOOLBOX', copy('기술 스택', 'Tech Stack'), copy('주력 기술과 프로젝트 도구, 추가 경험을 나누어 정리했습니다.', 'Core technologies, project tools, and additional experience.'));
    const skillIcons = {
      core: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-3-9-2 2 2 2m6-4 2 2-2 2"/>',
      unity: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
      design: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
      tools: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="7" r="2"/><path d="M6 7v10m2-3h4a6 6 0 0 0 6-5"/>',
      ai: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 9 3 3-3 3m5 0h3"/>',
      additional: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14"/>'
    };
    $('skill-list').innerHTML = data.skills.map(skill => `<article class="skill-card" data-skill="${escape(skill.id)}"><h3 class="skill-card-title"><span class="profile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${skillIcons[skill.icon]}</svg></span>${escape(text(skill.name))}</h3>${tags(skill.items.map(item => text(item)))}${skill.description ? `<p class="skill-description">${escape(text(skill.description))}</p>` : ''}${skill.id === 'ai' && data.releaseCase ? `<button type="button" class="text-link release-case-link" data-release="${escape(data.releaseCase.id)}" aria-haspopup="dialog">${copy('출시 사례', 'Released game')} · ${escape(data.releaseCase.name)} ↗</button>` : ''}</article>`).join('');
    sectionHeading('contact', '06 / SAY HELLO', 'Get in Touch', copy('새로운 아이디어, 흥미로운 프로젝트. 좋은 대화에서 시작됩니다.', 'New ideas and interesting projects start with a good conversation.'));
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? data.email : '';
    const github = safeUrl(data.github);
    const blog = safeUrl(data.blog);
    $('contact-content').innerHTML = `<div class="contact-card"><div class="contact-detail"><span class="card-icon" aria-hidden="true">@</span><div><small>Email</small><p>${email ? `<a href="mailto:${escape(email)}">${escape(email)}</a>` : copy('data.js에 이메일을 입력하세요', 'Add your email in data.js')}</p></div></div>${text(data.location) ? `<div class="contact-detail"><span class="card-icon" aria-hidden="true">⌖</span><div><small>Location</small><p>${escape(text(data.location))}</p></div></div>` : ''}<div class="contact-detail"><span class="card-icon" aria-hidden="true">⌘</span><div><small>GitHub</small><p>${github ? `<a href="${escape(github)}" target="_blank" rel="noopener noreferrer">${escape(github.replace('https://', ''))} ↗</a>` : copy('data.js에 GitHub 주소를 입력하세요', 'Add your GitHub URL in data.js')}</p></div></div>${blog ? `<div class="contact-detail"><span class="card-icon" aria-hidden="true">↗</span><div><small>Velog</small><p><a href="${escape(blog)}" target="_blank" rel="noopener noreferrer">byeo1ha · ${copy('학습 기록', 'Study notes')} ↗</a></p></div></div>` : ''}</div><div class="contact-cta"><span class="section-label">LET’S BUILD SOMETHING</span><h3>${copy('함께 만들 다음 이야기.', 'Let’s make what’s next.')}</h3><p>${copy('프로젝트와 협업에 관한 이야기를 기다립니다.', 'Open to conversations about projects and collaboration.')}</p>${email ? `<a class="button primary" href="mailto:${escape(email)}">${copy('이메일 보내기', 'Send a Message')} ↗</a>` : `<button class="button primary" disabled type="button">${copy('이메일 설정 후 사용 가능', 'Add email to enable contact')}</button>`}</div>`;
    $('footer-content').innerHTML = `<a class="brand" href="#home"><span class="brand-mark" aria-hidden="true">&lt;/&gt;</span>${escape(text(data.name))}</a><p>© ${new Date().getFullYear()} ${escape(text(data.name))} · Built with curiosity.</p><a class="text-link" href="#home">${copy('맨 위로', 'Back to top')} ↑</a>`;
  }
  const dialog = $('project-dialog');
  let activeProject = null;
  let activeVideo = null;
  let mediaRequest = 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let openingFrame = 0;
  let closingTimer = 0;
  function openDialog() {
    clearTimeout(closingTimer);
    cancelAnimationFrame(openingFrame);
    dialog.classList.remove('is-closing', 'is-visible');
    dialog.showModal();
    document.body.classList.add('modal-open');
    $('dialog-close').focus();
    if (reducedMotion.matches) {
      dialog.classList.add('is-visible');
      return;
    }
    // Establish the hidden starting frame without discrete display transitions.
    getComputedStyle(dialog).opacity;
    getComputedStyle(dialog, '::backdrop').opacity;
    openingFrame = requestAnimationFrame(() => {
      if (dialog.open && !dialog.classList.contains('is-closing')) dialog.classList.add('is-visible');
    });
  }
  function finishDialogClose() {
    clearTimeout(closingTimer);
    cancelAnimationFrame(openingFrame);
    if (dialog.open) dialog.close();
  }
  function closeDialog() {
    if (!dialog.open) return;
    pauseVideo();
    if (reducedMotion.matches) {
      finishDialogClose();
      return;
    }
    if (dialog.classList.contains('is-closing')) return;
    cancelAnimationFrame(openingFrame);
    dialog.classList.add('is-closing');
    dialog.classList.remove('is-visible');
    // Keep the native modal, focus trap and scroll lock until the exit completes.
    closingTimer = setTimeout(finishDialogClose, 180);
  }
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches || !dialog.open) return;
    pauseVideo();
    if (dialog.classList.contains('is-closing')) finishDialogClose();
    else {
      cancelAnimationFrame(openingFrame);
      dialog.classList.add('is-visible');
    }
  });
  function showProject(id) {
    if (dialog.open) return;
    const project = data.projects.find(item => item.id === id);
    if (!project) return;
    releaseVideo();
    activeProject = project;

    $('dialog-body').innerHTML = `${project.video ? `<div class="dialog-art"><button class="project-media" id="video-toggle" type="button" aria-label="${copy('플레이 영상 재생', 'Play gameplay video')}"><video id="project-video" poster="${escape(project.image)}" muted loop playsinline preload="metadata" aria-hidden="true"></video><img class="media-fallback" src="${escape(project.image)}" alt="" hidden><span class="media-play-overlay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></button><p id="media-status" class="media-error" role="status" hidden></p></div>` : `<div class="dialog-art">${art(project)}</div>`}<div class="dialog-content"><p class="section-label">${escape(text(project.role))}</p><h2 id="dialog-title">${escape(project.name)}</h2><p class="dialog-meta">${escape(project.period)} · ${escape(text(project.group))}</p>${tags(project.stack)}<p>${escape(text(project.summary))}</p>${project.result ? text(project.result).split('\n').filter(line => line.trim()).map(line => `<p class="project-result">${escape(line)}</p>`).join('') : ''}<div class="dialog-section"><h3>${copy('역할과 주요 작업', 'Role & contributions')}</h3><ul>${text(project.highlights).map(item => `<li>${escape(item)}</li>`).join('')}</ul></div><div class="dialog-section"><h3>${copy('기술 스택', 'Tech Stack')}</h3>${tags(project.stack)}</div><div class="dialog-links">${project.links.filter(link => safeUrl(link.url)).map(link => `<a class="button secondary small" href="${escape(safeUrl(link.url))}" target="_blank" rel="noopener noreferrer">${escape(text(link.label))} ↗</a>`).join('')}</div></div>`;
    openDialog();
    if (project.video) setupVideo(project);
  }
  function showWork(id) {
    if (dialog.open) return;
    const project = data.work.find(item => item.id === id);
    if (!project) return;
    releaseVideo();
    activeProject = null;
    $('dialog-body').innerHTML = `<div class="dialog-content work-detail"><span class="badge subtle">${escape(text(project.status))}</span><p class="current-project-repository">${escape(project.repository)}</p><h2 id="dialog-title">${escape(text(project.name))}</h2><p class="dialog-meta">${escape(project.period)}</p><p>${escape(text(project.description))}</p><div class="dialog-section"><h3>${copy('담당 범위', 'My responsibilities')}</h3><div class="work-scope">${project.scope.map(item => `<div><h4>${escape(text(item.title))}</h4><p>${escape(text(item.description))}</p></div>`).join('')}</div><p class="work-scope-note">${escape(text(project.scopeNote))}</p></div><div class="dialog-section"><h3>${copy('주요 구현', 'Implementation highlights')}</h3>${project.cases.map(item => `<article class="work-case"><h4>${escape(text(item.title))}</h4><p>${escape(text(item.description))}</p><div class="work-source-links">${item.sources.filter(source => safeUrl(source.url)).map(source => `<a class="text-link" href="${escape(safeUrl(source.url))}" target="_blank" rel="noopener noreferrer">${escape(source.label)} ↗</a>`).join('')}</div></article>`).join('')}</div><div class="dialog-section"><h3>${copy('기술 스택', 'Tech Stack')}</h3>${tags(project.detailStack)}</div><div class="dialog-links"><a class="button secondary small" href="${escape(safeUrl(project.url))}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div>`;
    openDialog();
  }
  function showRelease(id) {
    if (dialog.open || !data.releaseCase || data.releaseCase.id !== id) return;
    const release = data.releaseCase;
    releaseVideo();
    activeProject = null;
    $('dialog-body').innerHTML = `<div class="dialog-content release-detail"><span class="badge subtle">${escape(text(release.status))}</span><h2 id="dialog-title">${escape(release.name)}</h2><p>${escape(text(release.summary))}</p><div class="dialog-section release-roles">${release.roles.map(role => `<div><h3>${escape(text(role.label))}</h3><p>${escape(text(role.description))}</p></div>`).join('')}</div>${safeUrl(release.url) ? `<div class="dialog-links"><a class="button secondary small" href="${escape(safeUrl(release.url))}" target="_blank" rel="noopener noreferrer">${copy('Epic Games Store에서 보기', 'View on Epic Games Store')} ↗</a></div>` : ''}</div>`;
    openDialog();
  }
  function showAward(id) {
    if (dialog.open) return;
    const award = (data.awards || []).find(item => item.id === id);
    if (!award?.fullImage) return;
    releaseVideo();
    activeProject = null;
    $('dialog-body').innerHTML = `<div class="dialog-content award-view"><p class="section-label">${escape(award.year)} · ${escape(award.project)}</p><h2 id="dialog-title">${escape(text(award.title))}</h2><img src="${escape(award.fullImage)}" alt="${escape(text(award.title))}" class="award-full"></div>`;
    openDialog();
  }
  function pauseVideo() {
    mediaRequest += 1;
    activeVideo?.pause();
  }
  function playVideo() {
    const video = activeVideo;
    if (!video || video.error || !dialog.open || dialog.classList.contains('is-closing')) return;
    const request = ++mediaRequest;
    video.play().catch(() => {
      if (request !== mediaRequest || activeVideo !== video || !video.isConnected) return;
      video.pause(); // Autoplay may be blocked: leave the real paused state and play affordance.
    });
  }
  function setupVideo(project) {
    const video = $('project-video');
    const button = $('video-toggle');
    activeVideo = video;
    const current = () => activeVideo === video && video.isConnected;
    const syncState = () => {
      if (!current()) return;
      const playing = !video.paused && !video.error;
      button.classList.toggle('is-playing', playing);
      button.setAttribute('aria-label', playing ? copy('플레이 영상 일시정지', 'Pause gameplay video') : copy('플레이 영상 재생', 'Play gameplay video'));
    };
    video.addEventListener('playing', syncState);
    video.addEventListener('pause', syncState);
    video.addEventListener('error', () => {
      if (!current()) return;
      pauseVideo();
      video.hidden = true;
      button.querySelector('.media-fallback').hidden = false;
      button.classList.add('has-error');
      button.disabled = true;
      const status = $('media-status');
      status.hidden = false;
      status.textContent = copy('플레이 영상을 불러올 수 없습니다. 아래 플레이 영상 링크를 이용해주세요.', 'Unable to load the preview. Use the gameplay video link below.');
    });
    video.muted = true;
    video.autoplay = !reducedMotion.matches;
    video.src = project.video;
    if (!reducedMotion.matches) playVideo();
  }
  function releaseVideo() {
    const video = activeVideo;
    activeVideo = null;
    mediaRequest += 1;
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
  }
  document.addEventListener('click', event => {
    if (event.target.closest('#video-toggle') && activeVideo && !dialog.classList.contains('is-closing')) {
      if (activeVideo.paused) playVideo(); else pauseVideo();
    }
    const releaseTrigger = event.target.closest('[data-release]');
    if (releaseTrigger) showRelease(releaseTrigger.dataset.release);
    const workTrigger = event.target.closest('[data-work]');
    if (workTrigger) showWork(workTrigger.dataset.work);
    const awardTrigger = event.target.closest('[data-award]');
    if (awardTrigger) showAward(awardTrigger.dataset.award);
    const trigger = event.target.closest('[data-project]');
    if (trigger) showProject(trigger.dataset.project);
    const filterButton = event.target.closest('[data-filter]');
    if (filterButton) { filter = filterButton.dataset.filter; renderGames(); $('filters').querySelector(`[data-filter="${filter}"]`).focus(); }
    if (event.target.closest('.nav-links a')) { $('navigation').classList.remove('is-open'); $('menu-toggle').setAttribute('aria-expanded', 'false'); }
  });
  $('menu-toggle').addEventListener('click', () => { const open = $('navigation').classList.toggle('is-open'); $('menu-toggle').setAttribute('aria-expanded', String(open)); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('navigation').classList.contains('is-open')) { $('navigation').classList.remove('is-open'); $('menu-toggle').setAttribute('aria-expanded', 'false'); $('menu-toggle').focus(); } });
  $('dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(); } });
  dialog.addEventListener('close', () => {
    // A queued close event must not clear a dialog that has already reopened.
    if (dialog.open) return;
    clearTimeout(closingTimer);
    cancelAnimationFrame(openingFrame);
    dialog.classList.remove('is-closing', 'is-visible');
    document.body.classList.remove('modal-open');
    releaseVideo();
    $('dialog-body').replaceChildren();
    activeProject = null;

  });
  $('language').addEventListener('change', event => {
    language = event.target.value;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Optional persistence. */ }
    render();
  });
  render();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.nav-links a').forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }); }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
  }
})();

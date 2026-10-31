(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const params = new URLSearchParams(location.search);
  const language = params.get('lang') === 'en' ? 'en' : 'ko';
  const text = value => typeof value === 'object' && value !== null ? value[language] ?? value.ko ?? '' : value;
  const copy = (ko, en) => language === 'ko' ? ko : en;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const link = (url, label) => /^https?:\/\//.test(url || '') ? `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}</a>` : '';
  const section = (id, title, contents) => contents ? `<section class="resume-section" data-resume-section="${id}" aria-labelledby="resume-${id}-title"><h2 id="resume-${id}-title">${title}</h2>${contents}</section>` : '';
  const timeline = items => items.map(item => `<article class="resume-entry">${item.period ? `<p class="resume-period">${escape(item.period)}</p>` : ''}<h3>${escape(text(item.title))}</h3><p>${escape(text(item.description))}</p></article>`).join('');
  document.documentElement.lang = language;
  document.title = `${text(data.name)} — ${copy('이력서', 'Résumé')}`;
  document.getElementById('resume-toolbar').innerHTML = `<a class="button secondary small" href="./index.html">← ${copy('포트폴리오', 'Portfolio')}</a><div class="resume-toolbar-actions"><a class="resume-link" href="?lang=${language === 'ko' ? 'en' : 'ko'}" lang="${language === 'ko' ? 'en' : 'ko'}">${language === 'ko' ? 'English' : '한국어'}</a><button class="button primary small" type="button" id="print-resume">${copy('인쇄 / PDF로 저장', 'Print / Save as PDF')}</button></div>`;

  const educationCard = (data.profileCards || []).find(card => card.icon === 'education');
  const education = data.education.length ? timeline(data.education) : educationCard ? `<article class="resume-entry resume-education"><h3>${escape(text(educationCard.headline))}</h3><p>${escape(text(educationCard.description))}</p></article>` : '';
  // Keep implementation and design examples while reusing the site's exact wording.
  const highlightSelection = { soulcollector: [0, 2, 4], cleanupday: [1, 4, 5], barrelgoodbarrel: [0, 1, 2], hungryfoxy2: [0, 2, 3] };
  const projects = data.projects.map(project => {
    const highlights = text(project.highlights);
    const selected = (highlightSelection[project.id] || [0, 1, 2]).map(index => highlights[index]).filter(Boolean);
    const primaryLinks = project.links.filter(item => /github\.com|youtu\.be|youtube\.com/.test(item.url));
    return `<article class="resume-entry resume-project" data-resume-project="${escape(project.id)}"><div class="resume-entry-heading"><h3>${escape(project.name)}</h3><p class="resume-period">${escape(project.period)}</p></div><p class="resume-role">${escape(text(project.role))} · ${escape(text(project.group))}</p><p>${escape(text(project.summary))}</p><ul>${selected.map(item => `<li>${escape(item)}</li>`).join('')}</ul><p class="resume-technologies">${escape(project.stack.join(' · '))}</p><div class="resume-links resume-project-links">${primaryLinks.map(item => link(item.url, text(item.label))).join('')}</div></article>`;
  }).join('');
  const currentWork = data.work.map(item => `<article class="resume-entry resume-current-work"><div class="resume-entry-heading"><h3>${escape(text(item.name))}</h3><p class="resume-period">${escape(item.period)}</p></div><p class="resume-role">${escape(text(item.status))} · ${escape(item.repository)}</p><p>${escape(text(item.description))}</p><p>${escape(text(item.role))}</p><ul class="resume-implementation-cases">${(item.cases || []).map(example => `<li>${escape(text(example.description))}</li>`).join('')}</ul><p class="resume-technologies">${escape(item.stack.join(' · '))}</p><div class="resume-links">${link(item.url, 'GitHub')}</div></article>`).join('');
  const awards = (data.awards || []).map(item => `<article class="resume-award"><p class="resume-period">${escape(item.year)}</p><div><h3>${escape(text(item.title))}</h3><p>${escape(item.project)}</p></div></article>`).join('');
  const release = data.releaseCase;
  const releaseExample = release ? `<aside class="resume-release"><h4>${copy('출시 사례', 'Released game')} · ${escape(release.name)}</h4><p>${escape(text(release.summary))}</p><ul>${release.roles.map(role => `<li><strong>${escape(text(role.label))}:</strong> ${escape(text(role.description))}</li>`).join('')}</ul>${link(release.url, copy('Epic Games Store에서 보기', 'View on Epic Games Store'))}</aside>` : '';
  const skills = data.skills.map(skill => `<article class="resume-skill" data-resume-skill="${escape(skill.id)}"><h3>${escape(text(skill.name))}</h3><p>${skill.items.map(item => escape(text(item))).join(' · ')}</p>${skill.description ? `<p class="resume-note">${escape(text(skill.description))}</p>` : ''}${skill.id === 'ai' ? releaseExample : ''}</article>`).join('');
  document.getElementById('resume-sheet').innerHTML = `<header class="resume-header"><p class="resume-kicker">UNITY CLIENT DEVELOPER / RÉSUMÉ</p><h1>${escape(text(data.name))}</h1><p class="resume-headline">${escape(text(data.role))}</p><p class="resume-summary">${escape(text(data.heroDescription)).replace(/\n/g, '<br>')}</p><div class="resume-links resume-contact">${data.email ? `<a href="mailto:${escape(data.email)}">${escape(data.email)}</a>` : ''}${link(data.github, 'GitHub · Byeo1ha')}${link(data.blog, 'Velog')}</div></header>${section('education', copy('학력', 'Education'), education)}${section('experience', copy('경력', 'Experience'), timeline(data.experience))}${section('projects', copy('프로젝트', 'Projects'), projects)}${section('work', copy('진행 중인 프로젝트', 'Work in Progress'), currentWork)}${section('awards', copy('수상 · 전시', 'Awards & Exhibitions'), awards)}${section('skills', copy('기술 스택', 'Tech Stack'), skills)}`;
  document.getElementById('print-resume').addEventListener('click', () => window.print());
  if (params.get('print') === '1') window.addEventListener('load', () => window.print(), { once: true });
})();

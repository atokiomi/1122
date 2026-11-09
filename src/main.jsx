import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, projects, expertise, assetSrc, pageSrc, coverSrc, pdfUrl } from './data';
import './styles.css';

function Icon({ name = 'arrow-up-right', size = 20, ...props }) {
  const paths = {
    'arrow-up-right': <><path d="M6 18 18 6M6 6h12v12" /></>,
    'arrow-down-right': <><path d="m6 6 12 12M6 18h12V6" /></>,
    'arrow-right': <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
    'arrow-left': <><path d="M20 12H4m6-6-6 6 6 6" /></>,
    'arrow-down': <><path d="M12 4v16m-6-6 6 6 6-6" /></>,
    'arrow-up': <><path d="M12 20V4m-6 6 6-6 6 6" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V4H4v11h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    zoom: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5M7.5 10.5h6m-3-3v6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

function Asterisk({ className = '' }) {
  return <svg viewBox="0 0 80 80" className={`asterisk ${className}`} aria-hidden="true"><path d="M34 0h12l-1 25L62 7l9 9-18 18 27-1v13l-27-1 18 18-9 9-17-19 1 27H34l1-27-18 19-9-9 19-18-27 1V33l27 1L8 16l9-9 18 18z" fill="currentColor" /></svg>;
}

function Logo({ footer = false }) {
  return <a className={`logo ${footer ? 'logo-footer' : ''}`} href="#home" aria-label="林威，回到首页"><span className="logo-mark">L<span>W</span><i /></span><span className="logo-name">林威<span>LIN WEI</span></span></a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const links = [{ id: 'work', title: '精选作品', n: '01' }, { id: 'about', title: '关于我', n: '02' }, { id: 'expertise', title: '专业能力', n: '03' }];
  return <header className="site-header">
    <div className="header-inner">
      <Logo />
      <nav className="desktop-nav" aria-label="主导航">{links.map(link => <a href={`#${link.id}`} key={link.id} className={active === link.id ? 'active' : ''}>{link.title}<sup>{link.n}</sup></a>)}</nav>
      <a className="header-contact" href="#contact">聊聊新想法 <Icon size={16} /></a>
      <button className="menu-toggle icon-button" aria-label={menuOpen ? '关闭导航' : '打开导航'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
    </div>
    {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="移动端导航">{[...links, { id: 'contact', title: '联系我', n: '04' }].map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}><span>{link.title}</span><Icon /></a>)}</nav>}
  </header>;
}

function Hero() {
  return <section className="hero wrap" id="home" aria-labelledby="hero-title">
    <div className="hero-topline"><span className="eyebrow"><span className="status-dot" /> OPEN TO NEW POSSIBILITIES</span><span className="edition">SELECTED PORTFOLIO / 2026</span></div>
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-greeting">你好，我是林威 <span>—</span> 视觉设计师</div>
        <h1 id="hero-title">让想法，<br />有形有感<span className="title-period">。</span></h1>
        <p>以策略为起点，以视觉连接品牌与人。<br />让每一个好想法，成为真实可感的品牌体验。</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">探索我的作品 <Icon name="arrow-down-right" size={18} /></a><a className="text-link" href={pdfUrl} download="林威-2026作品集.pdf">下载作品集 <Icon name="download" size={17} /></a></div>
      </div>
      <div className="hero-art" aria-label="作品集中的银色招财猫形象">
        <div className="art-grid" /><div className="art-orbit" /><div className="art-circle" />
        <span className="art-label">GOOD IDEAS.<br />REAL IMPACT.</span><span className="art-corner">↗</span>
        <img className="lucky-cat" src={assetSrc('lucky-cat.png')} alt="银色招财猫，来自林威 2026 作品集封面" fetchPriority="high" />
        <span className="art-note">招来好灵感</span>
        <div className="hello-sticker"><span>HELLO!</span><span>LET’S CREATE</span><Asterisk /></div>
        <div className="art-footer"><span>CREATIVE MIND, CURIOUS SOUL.</span><span>© 2026</span></div>
      </div>
    </div>
    <div className="hero-bottom"><div className="hero-metrics"><div><strong>10<span>年</span></strong><span>视觉设计经验</span></div><i /><div><strong>5<span>年</span></strong><span>设计团队管理</span></div></div><div className="hero-fields">品牌设计 <span>×</span> 潮玩 IP <span>×</span> 电商视觉</div><a className="scroll-hint" href="#work"><span>SCROLL TO EXPLORE</span><Icon name="arrow-down" size={18} /></a></div>
  </section>;
}

function Marquee() {
  return <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1, 2].map(n => <div className="marquee-group" key={n}><span>BRAND DESIGN</span><Asterisk /><span>ART TOY & IP</span><Asterisk /><span>E-COMMERCE</span><Asterisk /><span>AIGC WORKFLOW</span><Asterisk /></div>)}</div></div>;
}

function SectionLabel({ number, children, light = false }) {
  return <div className={`section-label ${light ? 'light' : ''}`}><span className="label-square" /><span>{number} / {children}</span></div>;
}

function ProjectCard({ project, index, onOpen }) {
  const category = categories.find(c => c.id === project.category);
  return <button className={`project-card project-${project.id}`} onClick={() => onOpen(project)} aria-label={`查看项目：${project.title}`}>
    <div className="project-image" style={{ backgroundColor: project.color }}><img src={coverSrc(project)} alt={`${project.title}项目主视觉`} loading="lazy" width="1200" height="760" /><span className="project-category">{category.en}</span><span className="project-open"><Icon size={23} /></span></div>
    <div className="project-info"><div><div className="project-title-row"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3></div><p>{project.subtitle}</p></div><span className="project-tag">{project.tags[0]}</span></div>
  </button>;
}

function Work({ onOpen }) {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const filtered = projects.filter(p => filter === 'all' || p.category === filter);
  const visible = filter === 'all' && !expanded ? filtered.slice(0, 6) : filtered;
  return <section className="work-section wrap" id="work" aria-labelledby="work-title">
    <SectionLabel number="01">SELECTED WORK</SectionLabel>
    <div className="section-heading"><h2 id="work-title">精选作品<span className="heading-dot">.</span><sup>12</sup></h2><p>不同领域，同样认真。<br />从品牌的第一眼，到每一个真实的触点。</p></div>
    <div className="work-toolbar"><div className="filters" role="group" aria-label="按作品类别筛选">{categories.map(category => <button className={filter === category.id ? 'filter active' : 'filter'} key={category.id} aria-pressed={filter === category.id} onClick={() => setFilter(category.id)}>{category.label}<span>{projects.filter(p => category.id === 'all' || p.category === category.id).length.toString().padStart(2, '0')}</span></button>)}</div><span className="work-caption">A COLLECTION OF IDEAS IN ACTION ↙</span></div>
    <p className="sr-only" role="status">共 {filtered.length} 个{filter === 'all' ? '' : categories.find(c => c.id === filter).label}项目，当前显示 {visible.length} 个</p>
    <div className="project-grid">{visible.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} onOpen={onOpen} />)}</div>
    {filter === 'all' && !expanded && <div className="more-work"><button className="button button-outline" onClick={() => setExpanded(true)}>更多作品，还有好想法 <span className="small-counter">+06</span><Icon name="arrow-down" size={18} /></button></div>}
    {(filter !== 'all' || expanded) && <div className="work-end"><Asterisk /><span>每一个项目，都是一次新的探索。</span></div>}
  </section>;
}

function About() {
  return <section className="about-section" id="about" aria-labelledby="about-title"><div className="wrap about-grid">
    <div className="about-visual"><div className="portrait-frame"><img src={assetSrc('portrait.png')} alt="林威在工作中的照片" loading="lazy" /><span className="portrait-caption">LIN WEI<br />DESIGNER / THINKER / DOER</span><span className="portrait-caption-cn">保持好奇，持续创造。</span></div><div className="photo-badge"><Asterisk /><span>DESIGN IS<br />A WAY OF THINKING.</span></div><div className="portrait-footnote"><span>林威 / LIN WEI</span><span>广东轻工学院</span></div></div>
    <div className="about-copy"><SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel><h2 id="about-title">想得全局，<br />也做得到细节<span>.</span></h2><p className="about-lead">10 年视觉设计，5 年团队管理。<br />在创意与落地之间，找到更好的答案。</p><p>我是一名专注于品牌、营销与商业视觉的设计师，服务过全国 500 强公司，拥有线上线下全链路视觉项目经验。从品牌系统到电商内容，从 IP 形象到营销 Campaign，我相信好的设计既要有审美，也要回应真实的业务需求。</p><p>我习惯以全局视角推进项目，同时关注每个触点的细节。持续探索 AIGC 在创意工作中的应用，将风格探索、素材生成与方案验证连接成自己的设计工作流，让创意更高效地落地。</p><div className="about-tags"><span>设计落地</span><span>设计管理</span><span>视觉探索</span><span>AIGC 工作流</span></div><a className="text-link" href={pdfUrl} download="林威-2026作品集.pdf">了解我的完整作品 <Icon /></a></div>
  </div></section>;
}

function Expertise() {
  const [open, setOpen] = useState(0);
  return <section className="expertise-section wrap" id="expertise" aria-labelledby="expertise-title"><div className="expertise-intro"><SectionLabel number="03">WHAT I BRING</SectionLabel><h2 id="expertise-title">不止于好看。<br />更在于解决问题<span>.</span></h2><p>策略、创意、执行，一起向前。<br />用完整的设计能力，让好想法走得更远。</p><Asterisk className="expertise-star" /></div><div className="expertise-list">{expertise.map((item, index) => <div className={`expertise-item ${open === index ? 'is-open' : ''}`} key={item.number}><button className="expertise-toggle" aria-expanded={open === index} aria-controls={`expertise-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="expertise-number">{item.number}</span><span className="expertise-name"><span>{item.en}</span><strong>{item.title}</strong></span><span className="expand-mark">{open === index ? '−' : '+'}</span></button><div className="expertise-detail" id={`expertise-${index}`} hidden={open !== index}><p>{item.description}</p><span>{item.skills}</span></div></div>)}</div><div className="toolbox"><span className="toolbox-label">MY CREATIVE TOOLBOX <Icon size={17} /></span><div><span>Photoshop</span><span>Illustrator</span><span>Blender</span><span>After Effects</span><span>Procreate</span><span>Midjourney</span><span>即梦</span><span>GPT</span></div></div></section>;
}

function Contact({ notify }) {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('414218814@qq.com'); setCopied(true); notify('邮箱已复制，期待你的好想法。'); }
    catch { notify('邮箱：414218814@qq.com，可长按或选中文字复制。'); }
  };
  return <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="wrap"><div className="contact-top"><SectionLabel number="04">LET’S CONNECT</SectionLabel><span className="contact-status"><span className="status-dot" />期待新的合作与设计机会</span></div><div className="contact-heading"><h2 id="contact-title">下一个好想法，<br />一起实现<span>？</span></h2><a className="contact-arrow" href="mailto:414218814@qq.com" aria-label="发邮件给林威"><Icon size={70} /></a></div><div className="contact-bottom"><div className="contact-invitation">关于一个项目、一份机会，<br />或是一个值得聊聊的创意。<span>MY INBOX IS ALWAYS OPEN.</span></div><div className="contact-links"><div className="contact-email-row"><a className="contact-email" href="mailto:414218814@qq.com">414218814@qq.com</a><button className="copy-email icon-button" onClick={copyEmail} aria-label={copied ? '再次复制邮箱地址' : '复制邮箱地址'}><Icon name={copied ? 'check' : 'copy'} size={20} /></button></div><a className="contact-phone" href="tel:18520492324">+86 185 2049 2324 <Icon size={16} /></a></div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer wrap"><Logo footer /><p>© 2026 林威 · 以热爱，创造每一个可能。</p><a href="#home" className="back-top">回到顶部 <Icon name="arrow-up" size={17} /></a></footer>;
}

function ZoomDialog({ pages, initialIndex, title, onClose }) {
  const ref = useRef(null);
  const [index, setIndex] = useState(initialIndex);
  useEffect(() => { ref.current.showModal(); }, []);
  useEffect(() => { const dialog = ref.current; dialog.scrollTop = 0; }, [index]);
  const navigate = (direction) => setIndex(current => (current + direction + pages.length) % pages.length);
  return <dialog className="zoom-dialog" ref={ref} aria-label={`${title}，作品大图`} onCancel={event => { event.preventDefault(); event.stopPropagation(); onClose(); }} onClick={event => { if (event.target === ref.current) onClose(); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); } }}>
    <div className="zoom-toolbar"><span>{title} <span className="zoom-count">{index + 1} / {pages.length}</span></span><div>{pages.length > 1 && <><button className="icon-button" onClick={() => navigate(-1)} aria-label="上一张作品"><Icon name="arrow-left" /></button><button className="icon-button" onClick={() => navigate(1)} aria-label="下一张作品"><Icon name="arrow-right" /></button></>}<button className="icon-button" onClick={onClose} aria-label="关闭大图" autoFocus><Icon name="close" /></button></div></div>
    <img className="zoom-image" key={index} src={pageSrc(pages[index])} alt={`${title}作品展示，第 ${index + 1} 页，原作品集第 ${pages[index]} 页`} />
  </dialog>;
}

function ProjectDialog({ project, onClose, onNext }) {
  const ref = useRef(null);
  const [zoomIndex, setZoomIndex] = useState(null);
  const category = categories.find(c => c.id === project.category);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current.showModal();
    return () => { document.body.style.overflow = previous; };
  }, []);
  useEffect(() => { ref.current.scrollTop = 0; setZoomIndex(null); }, [project.id]);
  return <>
    <dialog className="project-dialog" ref={ref} aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === ref.current) onClose(); }}>
      <div className="dialog-topbar"><span>PROJECT / {String(projects.indexOf(project) + 1).padStart(2, '0')}<span className="dialog-category">{category.en}</span></span><button className="dialog-close" onClick={onClose} autoFocus>关闭项目 <span>ESC</span><Icon name="close" size={19} /></button></div>
      <div className="dialog-intro"><div><span className="eyebrow">{project.english}</span><h2 id="project-dialog-title">{project.title}</h2><div className="dialog-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="dialog-description"><p>{project.description}</p><div><span>设计内容</span><p>{project.scope}</p></div></div></div>
      <div className="gallery-label"><span>项目完整展示 / {project.pages.length} PAGES</span><span><Icon name="zoom" size={15} /> 点击图片查看大图</span></div>
      <div className="project-gallery">{project.pages.map((page, index) => <button className="gallery-page" key={`${project.id}-${page}`} onClick={() => setZoomIndex(index)} aria-label={`放大${project.title}第 ${index + 1} 张作品`}><img src={pageSrc(page)} alt={`${project.title}，原作品集第 ${page} 页`} loading={index === 0 ? 'eager' : 'lazy'} /><span className="gallery-zoom"><Icon name="zoom" size={22} /></span></button>)}</div>
      <div className="dialog-bottom"><a className="text-link" href={pdfUrl} download="林威-2026作品集.pdf">下载完整作品集 <Icon name="download" size={17} /></a><button className="button button-dark" onClick={() => onNext(project)}>下一个项目 <Icon name="arrow-right" size={18} /></button></div>
    </dialog>
    {zoomIndex !== null && <ZoomDialog pages={project.pages} title={project.title} initialIndex={zoomIndex} onClose={() => setZoomIndex(null)} />}
  </>;
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);
  const cardFocusRef = useRef(null);
  const openProject = (project) => { cardFocusRef.current = document.activeElement; setSelectedProject(project); };
  const closeProject = () => { setSelectedProject(null); requestAnimationFrame(() => cardFocusRef.current?.focus()); };
  const notify = (message) => { clearTimeout(toastTimer.current); setToast(message); toastTimer.current = setTimeout(() => setToast(''), 3600); };
  useEffect(() => () => clearTimeout(toastTimer.current), []);
  return <><a href="#work" className="skip-link">跳到作品内容</a><Header /><main><Hero /><Marquee /><Work onOpen={openProject} /><About /><Expertise /><Contact notify={notify} /></main><Footer />{selectedProject && <ProjectDialog project={selectedProject} onClose={closeProject} onNext={project => setSelectedProject(projects[(projects.indexOf(project) + 1) % projects.length])} />}<div className={`toast ${toast ? 'visible' : ''}`} role="status" aria-live="polite"><Icon name="check" size={18} />{toast}</div></>;
}

createRoot(document.getElementById('root')).render(<App />);

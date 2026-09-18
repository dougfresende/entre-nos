import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import './App.css'

type Tab = 'início' | 'álbum' | 'missões' | 'recados'

const memories = [
  { title: 'Antes do sim', by: 'Helena', tone: 'light' },
  { title: 'A chegada', by: 'Bruno & Luiza', tone: 'olive' },
  { title: 'Só vocês dois', by: 'Mãe da noiva', tone: 'warm' },
]

function Icon({ name }: { name: 'camera' | 'heart' | 'sparkle' | 'message' | 'home' | 'gallery' | 'arrow' }) {
  const paths = {
    camera: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M8 6l1.5-2h5L16 6M12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" /></>,
    heart: <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.5a5.5 5.5 0 0 0-.1-7.8Z" />,
    sparkle: <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />,
    message: <path d="M20 15a4 4 0 0 1-4 4H8l-4 3v-3.7A4 4 0 0 1 2 15V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />,
    home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />,
    gallery: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m6 16 4-4 3 3 2-2 3 3M8 8h.01" /></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">{paths[name]}</svg>
}

function App() {
  const [tab, setTab] = useState<Tab>('início')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [note, setNote] = useState('')
  const [sentNote, setSentNote] = useState(false)
  const upload = useRef<HTMLInputElement>(null)
  const chooseFiles = (event: ChangeEvent<HTMLInputElement>) => setSelectedFiles(Array.from(event.target.files ?? []))

  const renderContent = () => {
    if (tab === 'álbum') return <section className="content-panel" aria-labelledby="album-title"><div className="section-eyebrow">ÁLBUM DO DIA</div><h1 id="album-title">O que ficou nos seus olhos.</h1><div className="album-controls"><button className="chip selected">Todos</button><button className="chip">Cerimônia</button><button className="chip">Festa</button></div><div className="memory-grid">{memories.map((memory, index) => <article className={`memory ${memory.tone}`} key={memory.title}><div className="memory-photo"><span>{String(index + 1).padStart(2, '0')}</span></div><h2>{memory.title}</h2><p>por {memory.by}</p></article>)}</div></section>
    if (tab === 'missões') return <section className="content-panel" aria-labelledby="mission-title"><div className="section-eyebrow">SUAS MISSÕES</div><h1 id="mission-title">Pequenos gestos para lembrar.</h1><p className="lead">Cada missão vira uma lembrança no álbum dos noivos.</p><article className="mission-card"><div className="mission-icon"><Icon name="heart" /></div><div><span className="mini-label">01 · EM ABERTO</span><h2>Um abraço inesquecível</h2><p>Registre um abraço que marcou o nosso dia.</p></div><button className="text-action" onClick={() => setTab('início')}>Enviar <Icon name="arrow" /></button></article><article className="mission-card done"><div className="mission-icon"><Icon name="sparkle" /></div><div><span className="mini-label">02 · CONCLUÍDA</span><h2>Encontre um detalhe dourado</h2><p>Você já deixou essa pista no nosso álbum.</p></div><span className="check">✓</span></article></section>
    if (tab === 'recados') return <section className="content-panel" aria-labelledby="note-title"><div className="section-eyebrow">PARA GUARDAR</div><h1 id="note-title">Uma palavra para mais tarde.</h1><p className="lead">Este recado ficará reservado para Marina e Rafael.</p><label className="note-field" htmlFor="note">O que você gostaria de dizer?</label><textarea id="note" value={note} onChange={(event) => { setNote(event.target.value); setSentNote(false) }} placeholder="Escreva com calma…" maxLength={500} /><div className="note-footer"><span>{note.length}/500</span><button className="primary small" disabled={!note.trim()} onClick={() => setSentNote(true)}>Guardar recado <Icon name="arrow" /></button></div>{sentNote && <p className="success" role="status">Seu recado foi guardado nesta demonstração.</p>}</section>
    return <><section className="welcome" aria-labelledby="welcome-title"><div className="welcome-copy"><p className="section-eyebrow">17 DE SETEMBRO · CELEBRAMOS JUNTOS</p><h1 id="welcome-title">Marina <em>&</em> Rafael</h1><p className="intro">Que bom ter você aqui. Guarde os instantes que só os seus olhos perceberam.</p></div><figure className="memory-window"><img src="/conceito-entre-nos.png" alt="Conceito visual do álbum de Marina e Rafael" /><figcaption>Nosso dia, pelos seus olhos.</figcaption></figure></section><section className="action-area" aria-labelledby="share-title"><div><p className="section-eyebrow">COMEÇAR POR AQUI</p><h2 id="share-title">Compartilhe o que viveu.</h2><p>Fotos e vídeos entram no álbum após o envio.</p></div><button className="primary" onClick={() => upload.current?.click()}><Icon name="camera" /> Escolher fotos e vídeos <Icon name="arrow" /></button><input className="visually-hidden" ref={upload} type="file" accept="image/*,video/*" multiple onChange={chooseFiles} />{selectedFiles.length > 0 && <div className="file-notice" role="status"><Icon name="gallery" /><span>{selectedFiles.length} {selectedFiles.length === 1 ? 'arquivo selecionado' : 'arquivos selecionados'}<small>O envio real será conectado na próxima etapa.</small></span><button onClick={() => setSelectedFiles([])} aria-label="Remover arquivos">×</button></div>}</section><section className="quick-links" aria-label="Outras ações"><button onClick={() => setTab('missões')}><span className="round-icon"><Icon name="sparkle" /></span><span><strong>Suas missões</strong><small>1 lembrança esperando por você</small></span><Icon name="arrow" /></button><button onClick={() => setTab('recados')}><span className="round-icon"><Icon name="message" /></span><span><strong>Deixar um recado</strong><small>Uma mensagem só para os noivos</small></span><Icon name="arrow" /></button></section></>
  }

  return <main className="app-shell"><header><a href="#top" className="wordmark">Entre Nós<span>memórias de um dia especial</span></a><button className="profile" aria-label="Abrir opções">MR</button></header><div id="top" className="page">{renderContent()}</div><nav aria-label="Navegação principal" className="bottom-nav">{([['início', 'home', 'Início'], ['álbum', 'gallery', 'Álbum'], ['missões', 'sparkle', 'Missões'], ['recados', 'message', 'Recados']] as const).map(([id, icon, label]) => <button key={id} aria-current={tab === id ? 'page' : undefined} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}><Icon name={icon} /><span>{label}</span></button>)}</nav></main>
}

export default App

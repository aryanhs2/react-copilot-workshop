function Header({ pendingCount, doneCount, totalCount, darkMode, onToggleDark }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-icon">✅</span>
        <div>
          <h1 className="header-title">My Task Manager</h1>
          <p className="header-subtitle">{doneCount} / {totalCount} tasks done</p>
        </div>
      </div>
      <div className="header-right">
        <div className="header-badge">
          <span className="badge-number">{pendingCount}</span>
          <span className="badge-label">{pendingCount === 1 ? 'task remaining' : 'tasks remaining'}</span>
        </div>
        <button className="theme-toggle" onClick={onToggleDark}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
}

export default Header;

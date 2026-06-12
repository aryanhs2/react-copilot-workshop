// Header.jsx
// Displays the app title and a badge showing how many tasks are pending
function Header({ pendingCount, doneCount, totalCount }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-icon">✅</span>
        <div>
          <h1 className="header-title">My Task Manager</h1>
          <p className="header-subtitle">{doneCount} of {totalCount} tasks done</p>
        </div>
      </div>
      <div className="header-right">
        <div className="header-badge">
          <span className="badge-number">{pendingCount}</span>
          <span className="badge-label">
            {pendingCount === 1 ? 'task remaining' : 'tasks remaining'}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

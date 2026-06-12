// Header.jsx
// Displays the app title and a badge showing how many tasks are pending

// TODO (Tier 1 - Feature 1): Accept doneCount and totalCount, then show "X / Y done".
// TODO (Tier 3 - Feature 9): Accept 'darkMode' and 'onToggleDark' in the props destructured object
function Header({ pendingCount }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-icon">✅</span>
        <div>
          <h1 className="header-title">My Task Manager</h1>
          <p className="header-subtitle">React + Copilot Challenge</p>
        </div>
      </div>
      <div className="header-right">
        <div className="header-badge">
          <span className="badge-number">{pendingCount}</span>
          <span className="badge-label">
            {pendingCount === 1 ? 'task remaining' : 'tasks remaining'}
          </span>
        </div>
        {/* TODO (Tier 1 - Feature 1): Add the done / total count here. */}
        
        {/* TODO (Tier 3 - Feature 9): Add a dark mode toggle <button> here */}
        {/* It should call onToggleDark when clicked, and display '☀️ Light' or '🌙 Dark' */}
      </div>
    </header>
  );
}

export default Header;

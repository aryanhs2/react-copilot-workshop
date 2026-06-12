function SummaryBar({ pendingCount, doneCount, totalCount }) {
  return (
    <section className="summary-bar" aria-label="Task summary">
      <div className="summary-item"><strong>{totalCount}</strong><span>Total</span></div>
      <div className="summary-item"><strong>{pendingCount}</strong><span>Pending</span></div>
      <div className="summary-item"><strong>{doneCount}</strong><span>Done</span></div>
    </section>
  );
}

export default SummaryBar;

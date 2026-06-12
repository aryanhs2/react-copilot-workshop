function ProgressBar({ doneCount, totalCount }) {
  const percentage = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);

  return (
    <section className="progress-bar-container">
      <div className="progress-copy">
        <strong>{percentage === 100 && totalCount > 0 ? '🎉 All tasks complete!' : 'Task progress'}</strong>
        <span>{doneCount} of {totalCount} tasks complete ({percentage}%)</span>
      </div>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
      </div>
    </section>
  );
}

export default ProgressBar;

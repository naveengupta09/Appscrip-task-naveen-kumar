export default function Loading() {
  return (
    <div className="container" aria-busy="true" aria-live="polite">
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-media" />
            <div className="skeleton-body">
              <div className="skeleton-line" />
              <div className="skeleton-line short" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

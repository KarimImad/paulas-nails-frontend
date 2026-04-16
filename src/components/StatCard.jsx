import { Link } from 'react-router-dom';

export default function StatCard({ label, value, sub, color, icon, to }) {
  const inner = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          {icon}
        </div>
        {to && (
          <svg className="w-4 h-4 text-cream-300 group-hover:text-cream-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
      <p className="text-3xl font-serif text-cream-900 mb-1">{value}</p>
      <p className="text-sm font-sans font-medium text-cream-700">{label}</p>
      {sub && <p className="text-xs font-sans text-cream-400 mt-1">{sub}</p>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className="card p-6 group hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 block">
        {inner}
      </Link>
    );
  }

  return <div className="card p-6">{inner}</div>;
}

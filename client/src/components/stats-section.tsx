export default function StatsSection() {
  const stats = [
    { value: "$2.5B+", label: "Transactions Processed" },
    { value: "50M+", label: "API Calls Monthly" },
    { value: "15+", label: "Countries Served" },
    { value: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-hover bg-background rounded-xl p-6 text-center shadow-sm"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-4xl font-bold text-accent mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

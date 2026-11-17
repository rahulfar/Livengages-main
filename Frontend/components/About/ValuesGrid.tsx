interface ValuesGridProps {
  data?: {
    heading?: string;
    items?: Array<{
      id?: number;
      icon?: string;
      title?: string;
      description?: string;
      bgColor?: string;
      iconColor?: string;
    }>;
  };
}

export function ValuesGrid({ data }: ValuesGridProps) {
  if (!data) return null;

  const normalized = {
    ...data,
    items: ((data as any)?.Items || data?.items) as NonNullable<ValuesGridProps['data']>['items'],
  };

  if (!normalized.items || normalized.items.length === 0) return null;

  const { heading, items } = normalized;

  const cardStyles = [
    {
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10',
      text: 'text-primary',
      icon: 'verified_user',
    },
    {
      gradient: 'from-secondary-container/10 to-transparent',
      iconBg: 'from-secondary-container/10 to-secondary-container/5 dark:from-secondary-container/20 dark:to-secondary-container/10',
      text: 'text-secondary-container',
      icon: 'trending_up',
    },
    {
      gradient: 'from-tertiary-container/10 to-transparent',
      iconBg: 'from-tertiary-container/10 to-tertiary-container/5 dark:from-tertiary-container/20 dark:to-tertiary-container/10',
      text: 'text-tertiary-container',
      icon: 'groups',
    },
  ];

  return (
    <section className="py-[100px] bg-[#F4F6FF] dark:bg-surface-container-lowest relative overflow-hidden transform-gpu">
      {/* Background Orbs */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.1]"></div>
      <div className="absolute -top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] kinetic-shape"></div>
      <div className="absolute -bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[100px] kinetic-shape" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        {heading && (
          <h2 className="font-display-md text-4xl md:text-5xl font-black text-on-surface dark:text-white mb-6 tracking-tight">
            {heading}
          </h2>
        )}
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full shadow-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {items.map((item, i) => {
          const style = cardStyles[i % cardStyles.length];
          const translateY = i === 1 ? 'md:translate-y-8' : '';

          return (
            <div
              key={item.id || i}
              className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-3xl p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.2)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white dark:border-white/10 group overflow-hidden ${translateY}`}
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${style.gradient} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner border border-outline-variant/10 dark:border-white/10`}>
                  <span
                    className={`material-symbols-outlined text-[40px] ${style.text}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon || style.icon}
                  </span>
                </div>
                {item.title && (
                  <h3 className="font-display-sm text-2xl font-bold mb-4 tracking-tight text-on-surface dark:text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="font-body-md text-base text-on-surface-variant dark:text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

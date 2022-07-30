interface SectionProps {
  id: string;
}

export const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id}>
      <div className="relative mx-auto flex h-full max-w-screen-xl justify-evenly overflow-hidden px-5 py-10 md:px-8">
        {children}
      </div>
    </section>
  );
};

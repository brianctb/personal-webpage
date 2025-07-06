const homePageContent = [
  {
    title: 'Introduction',
    content: `PlaceHolder intro...`,
  },
  {
    title: 'Interests',
    content: `PlaceHolder interests...`,
  }
];

export default function HomePage() {
  return (
    <section>
      {homePageContent.map((section, index) => (
        <div key={index} className={index > 0 ? "mt-12" : ""}>
          {index === 0 ? (
            <h1 className="text-3xl font-bold mb-4 lg: flex">{section.title}</h1>
          ) : (
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
          )}
          <p className="text-lg ">{section.content}</p>
        </div>
      ))}
    </section>
  );
}
import "../styles/page-heading.css";

interface PageHeadingProps {
  title: string;
  description: React.ReactNode;
}

export const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <section className="page-heading-section">
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
    </section>
  )
}

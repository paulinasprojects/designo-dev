
interface WebDesignProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export const WebDesignProjectCard = ({ image, title, description}: WebDesignProjectCardProps) => {
  return (
    <div className="project-express">
      <img src={image} alt="" />
      <div className="project-express-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

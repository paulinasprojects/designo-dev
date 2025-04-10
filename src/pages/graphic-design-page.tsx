import { GraphicDesignProjects } from "../components/graphic-design-projects"
import { PageHeading } from "../components/page-heading"

const GraphicDesignPage = () => {
  return (
    <>
      <PageHeading
        title="Graphic Design"
        description={
          <>
            We deliver eye-catching branding materials that are <br /> 
            tailored to meet your business objectives.
          </>
        }
      />
      <GraphicDesignProjects/>
    </>
  )
}

export default GraphicDesignPage
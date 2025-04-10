import { PageHeading } from "../components/page-heading"
import { WebDesignProjects } from "./web-design-projects"

const WebDesignPage = () => {
  return (
    <>
      <PageHeading
        title="Web Design"
        description={
          <>
            We build websites that serve as powerful marketing tools<br />
            and bring memorable brand experiences.
          </>
        }
      />
      <WebDesignProjects/>
    </>
  )
}

export default WebDesignPage
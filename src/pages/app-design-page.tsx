import { AppDesignProjects } from "../components/app-design-projects"
import { PageHeading } from "../components/page-heading"

const AppDesignPage = () => {
  return (
    <>
      <PageHeading
        title="App Design"
        description={
          <>
           Our mobile designs bring intuitive digital solutions <br />
          to your customers right at their fingertips.
          </>
        }
      />
      <AppDesignProjects/>
    </>
  )
}

export default AppDesignPage
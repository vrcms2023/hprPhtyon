import React from "react";
import Title from "../../Common/Title";
import { useNavigate } from "react-router-dom";
import { getBaseURL } from "../../util/ulrUtil";

const ProjectItem = ({ projectList, projectType }) => {
  const navigate = useNavigate();

  return (
    <div className="container my-5 pb-3">
      <div className="row">
        <div className="col-md-12 ">
          <Title
            title={
              projectList.length > 0
                ? projectList[0].projectCategoryName
                : "Ongoing Projects"
            }
            cssClass="blue-900 fs-5 mb-3"
          />
        </div>
      </div>
      <div className="row">
        {projectList.length > 0
          ? projectList.map((project) => (
              <div className="col-md-3 mb-3" key={project.id}>
                <div className="position-relative box">
                  <div className="infoStrip">
                    <Title
                      title={project.projectTitle}
                      cssClass="text-white fs-5"
                    />
                    {/* <Link to="" className="blue-900">
                    more details
                  </Link> */}
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        navigate("/project-details", {
                          state: {
                            selectedPorject: projectType,
                            projectid: project.id,
                          },
                        })
                      }
                    >
                      more details
                    </button>
                  </div>
                  {renderImg(project)}
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

const renderImg = (project) => {
  const thumb = project?.imgs?.filter(
    (item) => item.category === "thumbnail"
  )[0];
  const baseURL = getBaseURL();
  return (
    <>
      {thumb?.path ? (
        <img src={`${baseURL}${thumb.path}`} alt="" />
      ) : (
        <img src={`${baseURL}/media/images/dummy-image-square.png`} alt="" />
      )}
    </>
  );
};

export default ProjectItem;

import Menu from "./menu";
import ProjectSection from "./project-section";

export default function Foreground() {
    return(
        <div className="absolute top-0 left-0 z-20">
            <Menu></Menu>
            <ProjectSection>

            </ProjectSection>
        </div>
    )
}
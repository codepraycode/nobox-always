// Load Projects

import Preloader from "../utils/preloader";
import { signals } from "../utils";
import Prompt from "../utils/prompt";
import { loadProjects } from "../helpers/projects";
import printOut from "../utils/print";
import { handleRequestError } from "../utils/request";



export const ListProjects = async () => {

    Preloader.start("Loading Projects...")

    let error_message = "Could not load projects";


    try{

        const projects = await loadProjects();
        projects.forEach((element: { name: string; }) => {
            console.log(`- ${element.name}`)
        });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(err:any) {
        error_message = handleRequestError(err, error_message)
    } finally {

        Preloader.stop();
        if(error_message) printOut(error_message, 'red');
    }
}

export const ProjectsMenu = async () => {

    Preloader.start("Loading Projects...")


    const projects = await loadProjects();

    Preloader.stop();

    const projectMenu = { 
        name:'project-menu',
        message: "Select a project",
        choices: [
            ...projects.map((item: { name: string; })=>({message: item.name, name: signals.listProjects})),
            { message: "Go back", name: signals.main },
        ]
    }

    const res = await Prompt.selection(projectMenu);

    return res;
}
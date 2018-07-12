//zmienne jakie będą w adresie przegladrki


export const ROOT = '/';
export const LOGIN = '/login';
export const PROJECT_LIST = '/projects';
export const PROJECT_EDIT = '/projects/:id';

export function editProject(projId) {
    return PROJECT_EDIT.replace(":id", projId);
}

export const PROJECT_CREATE = '/projects/new';
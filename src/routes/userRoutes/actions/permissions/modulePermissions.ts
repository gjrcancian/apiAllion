import { IPermissions } from "../../types/iPermissions";

const modulePermissions = (permissions:IPermissions | null) => {
    const module_permission: { user: boolean } = { user: false };
if(permissions){
    if (permissions.crud_user) {
        module_permission.user = true;
    }

    return module_permission;
}
};

export default modulePermissions;
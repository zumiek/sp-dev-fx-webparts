import { MSGraphClient } from "@microsoft/sp-http";

import {
  IProfileCardPropertiesResults
} from "../Entities/IProfileCardPropertiesResults";
import { IProfileCardProperty } from "../Entities/IProfileCardProperty";
import {
  IUpdateProfileCardProperty
} from "../Entities/IUpdateProfileCardProperty";

const ADMIN_ROLETEMPLATE_ID = "62e90394-69f5-4237-9190-012177145e10";

export const useProfileCardProperties =  () => {
  // Get List of Properties
  const getProfileCardProperties = async (
    msGraphClient: MSGraphClient,
    organizationId: string
  ):Promise<IProfileCardProperty[]> => {

    const _profileProperties: IProfileCardPropertiesResults = await msGraphClient
      .api(`/organization/${organizationId}/settings/profileCardProperties`)
      .version("beta")
      .orderby("directoryPropertyName")
      .get();



    return _profileProperties.value;
  };

  // Add Property
  const newProfileCardProperty = async (
    msGraphClient: MSGraphClient,
    organizationId: string,
    profileCardProperties: IProfileCardProperty
  ):Promise<IProfileCardProperty> => {

    const _profileProperty: IProfileCardProperty = await msGraphClient
      .api(`/organization/${organizationId}/settings/profileCardProperties`)
      .version("beta")
      .post(profileCardProperties);

      return _profileProperty;
  };

 // Update Profile Card Property
  const updateProfileCardProperty = async (
    msGraphClient: MSGraphClient,
    organizationId: string,
    profileCardProperties: IProfileCardProperty
  ):Promise<IProfileCardProperty> => {

    const diretoryPropertyName:string = profileCardProperties.directoryPropertyName;
    const _updateProfileCardProperty:IUpdateProfileCardProperty = { annotations : profileCardProperties.annotations};
    const _profileProperty: IProfileCardProperty = await msGraphClient
      .api(`/organization/${organizationId}/settings/profileCardProperties/${diretoryPropertyName}`)
      .version("beta")
      .patch(_updateProfileCardProperty);

      return _profileProperty;
  };

   // get Profile Card Property
   const getProfileCardProperty = async (
    msGraphClient: MSGraphClient,
    organizationId: string,
    directoryPropertyName:string
  ):Promise<IProfileCardProperty> => {

    const _profileProperty: IProfileCardProperty = await msGraphClient
      .api(`/organization/${organizationId}/settings/profileCardProperties/${directoryPropertyName}`)
      .version("beta")
      .get();

      return _profileProperty;
  };

    // Delete Profile Card Property
    const deleteProfileCardProperty = async (
      msGraphClient: MSGraphClient,
      organizationId: string,
      directoryPropertyName:string
    ) => {

      const _profileProperty: IProfileCardProperty = await msGraphClient
        .api(`/organization/${organizationId}/settings/profileCardProperties/${directoryPropertyName}`)
        .version("beta")
        .delete();
    };


    // check if user is Tenant Admin
    const checkUserIsGlobalAdmin  = async ( msGraphClient: MSGraphClient):Promise<boolean> =>  {
      const myDirRolesAndGroupsResults  =  await msGraphClient
      .api(`/me/memberof`)
      .version("beta")
      .get();
      const  myDirRolesAndGroups = myDirRolesAndGroupsResults ?  myDirRolesAndGroupsResults.value : [];
      for (const myDirRolesAndGroup of myDirRolesAndGroups) {
        if (myDirRolesAndGroup.roleTemplateId && myDirRolesAndGroup.roleTemplateId === ADMIN_ROLETEMPLATE_ID) { // roleTemplateId for glabal Admin
          return true;
        }
      }
      return false;
    };

  // return
  return {checkUserIsGlobalAdmin, getProfileCardProperties, newProfileCardProperty, updateProfileCardProperty, getProfileCardProperty, deleteProfileCardProperty };
};



import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphService } from "../../../../Services/MSGraphService";
import { MSGraphClient } from "@microsoft/sp-http";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
export interface ByFirstNameProps{
    context:WebPartContext;
    MSGraphServiceInstance:MSGraphService;
    MSGraphClient:MSGraphClient;
    Columns:IColumn[];
}
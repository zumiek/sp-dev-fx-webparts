import { IBaseItem } from './IBaseItem';

export interface IPostItem extends IBaseItem {
    details: string;
    detailsText: string;
    likeCount: number;
    likeIds: string[]; 

    // determined based on current user and item intersection
    likedByCurrentUser: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canReact: boolean;
    canReply: boolean;
}
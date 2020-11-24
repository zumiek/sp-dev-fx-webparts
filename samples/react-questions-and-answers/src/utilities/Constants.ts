export class Parameters {
    public static readonly QUESTIONID = 'QuestionId';
}

export class NotificationGroup {
    public static readonly NAME = 'Question Notifications';
    public static readonly DESCRIPTION = 'Users who receive question notifications';
}

export class ListTitles {
    public static readonly QUESTIONS = 'Questions';
    public static readonly USERS_INFORMATION = 'Users Information';
}

export class ContentTypes {
    public static readonly QUESTION = 'Question';
    public static readonly REPLY = 'Reply';
}

export class StandardFields {
    public static readonly ID = 'ID';
    public static readonly TITLE = 'Title';
    // Standard Created/Modified Columns
    public static readonly CREATED = 'Created';
    public static readonly MODIFIED = 'Modified';
    public static readonly AUTHOR = 'Author';
    public static readonly AUTHOR_ID = 'Author/ID';
    public static readonly AUTHOR_NAME = 'Author/Name';
    public static readonly AUTHOR_TITLE = 'Author/Title';
    public static readonly EDITOR = 'Editor';
    public static readonly EDITOR_ID = 'Editor/ID';
    public static readonly EDITOR_NAME = 'Editor/Name';
    public static readonly EDITOR_TITLE = 'Editor/Title';

    public static readonly CONTENTTYPE = 'ContentType';
    public static readonly CONTENTTYPEID = 'ContentTypeId';
    public static readonly CONTENTTYPE_NAME = 'ContentType/Name';
}

// base fields shared by Question and Reply Content Types
export class PostFields {
    public static readonly DETAILS = 'TW_Details';
    public static readonly DETAILSTEXT = 'TW_DetailsText';
    public static readonly LIKE_COUNT = 'TW_LikeCount';
    public static readonly LIKE_IDS = 'TW_LikeIds';
}
export class QuestionFields {    
    public static readonly ISANSWERED = 'TW_IsAnswered';
    public static readonly FOLLOW_EMAILS = 'TW_FollowEmails';
}
export class ReplyFields {
    public static readonly ISANSWER = 'TW_IsAnswer';
    public static readonly HELPFULCOUNT = 'TW_HelpfulCount';
    public static readonly HELPFULIDS = 'TW_HelpfulIds';
    // question this item is related to
    public static readonly QUESTIONLOOKUP = 'TW_QuestionLookup';
    public static readonly QUESTIONLOOKUPID = 'TW_QuestionLookupId';
    public static readonly QUESTIONLOOKUP_ID = 'TW_QuestionLookup/ID';
    public static readonly QUESTIONLOOKUP_TITLE = 'TW_QuestionLookup/Title';
    // reply this item is related to
    public static readonly REPLYLOOKUP = 'TW_ReplyLookup';
    public static readonly REPLYLOOKUPID = 'TW_ReplyLookupId';
    public static readonly REPLYLOOKUP_ID = 'TW_ReplyLookup/ID';
    public static readonly REPLYLOOKUP_TITLE = 'TW_ReplyLookup/Title';
}
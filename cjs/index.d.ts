import * as TextFormatting from './Formatters/TextFormatting';
import * as Chat from './Chat/Chat';
import * as Comments from './Comments/Comments';
import * as EditPosts from './Edits/EditPosts';
import * as AnswerFlags from './FlaggingAndVoting/AnswerFlags';
import * as FlagHelpers from './FlaggingAndVoting/Helpers';
import * as PostFlags from './FlaggingAndVoting/PostFlags';
import * as PostVotes from './FlaggingAndVoting/PostVotes';
import * as PostLocks from './Moderators/PostLocks';
import * as UserModActions from './Moderators/UserModActions';
import * as ModHandleFlags from './Moderators/HandleFlags';
import * as General from './Utilities/General';
import * as UserInfo from './Utilities/UserInfo';
declare const _default: {
    Chat: {
        Chat: typeof Chat;
    };
    Comments: {
        Comments: typeof Comments;
    };
    EditPosts: {
        EditPosts: typeof EditPosts;
    };
    General: {
        General: typeof General;
    };
    FlaggingAndVoting: {
        AnswerFlags: {
            AnswerFlags: typeof AnswerFlags;
        };
        FlagHelpers: {
            FlagHelpers: typeof FlagHelpers;
        };
        PostFlags: {
            PostFlags: typeof PostFlags;
        };
        PostVotes: {
            PostVotes: typeof PostVotes;
        };
    };
    Moderators: {
        HandleFlags: {
            ModHandleFlags: typeof ModHandleFlags;
        };
        PostLocks: {
            PostLocks: typeof PostLocks;
        };
        UserModActions: {
            UserModActions: typeof UserModActions;
        };
    };
    Utilities: {
        General: {
            General: typeof General;
        };
        UserInfo: {
            UserInfo: typeof UserInfo;
        };
    };
    Formatters: {
        TextFormatting: typeof TextFormatting;
    };
};
export default _default;

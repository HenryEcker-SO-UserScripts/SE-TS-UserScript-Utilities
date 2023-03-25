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

export default {
    Chat: {Chat},
    Comments: {Comments},
    EditPosts: {EditPosts},
    General: {General},
    FlaggingAndVoting: {
        AnswerFlags: {AnswerFlags},
        FlagHelpers: {FlagHelpers},
        PostFlags: {PostFlags},
        PostVotes: {PostVotes}
    },
    Moderators: {
        HandleFlags: {ModHandleFlags},
        PostLocks: {PostLocks},
        UserModActions: {UserModActions}
    },
    Utilities: {
        General: {General},
        UserInfo: {UserInfo}
    },
    Formatters: {TextFormatting}
};
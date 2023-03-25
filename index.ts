import * as TextFormatting from './Formatters/TextFormatting';

import * as Chat from './Utilities/Chat';
import * as Comments from './Utilities/Comments';
import * as EditPosts from './Utilities/EditPosts';
import * as General from './Utilities/General';
import * as PostFlagsAndVotes from './Utilities/PostFlagsAndVotes';
import * as PostLocks from './Utilities/PostLocks';
import * as UserInfo from './Utilities/UserInfo';
import * as UserModActions from './Utilities/UserModActions';

export default {
    UserScriptUtilities: {Chat, Comments, EditPosts, General, PostFlagsAndVotes, PostLocks, UserInfo, UserModActions},
    Formatters: {TextFormatting}
}
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextFormatting = __importStar(require("./Formatters/TextFormatting"));
const Chat = __importStar(require("./Chat/Chat"));
const Comments = __importStar(require("./Comments/Comments"));
const EditPosts = __importStar(require("./Edits/EditPosts"));
const AnswerFlags = __importStar(require("./FlaggingAndVoting/AnswerFlags"));
const FlagHelpers = __importStar(require("./FlaggingAndVoting/Helpers"));
const PostFlags = __importStar(require("./FlaggingAndVoting/PostFlags"));
const PostVotes = __importStar(require("./FlaggingAndVoting/PostVotes"));
const PostLocks = __importStar(require("./Moderators/PostLocks"));
const UserModActions = __importStar(require("./Moderators/UserModActions"));
const ModHandleFlags = __importStar(require("./Moderators/HandleFlags"));
const General = __importStar(require("./Utilities/General"));
const UserInfo = __importStar(require("./Utilities/UserInfo"));
exports.default = {
    Chat: { Chat },
    Comments: { Comments },
    EditPosts: { EditPosts },
    General: { General },
    FlaggingAndVoting: {
        AnswerFlags: { AnswerFlags },
        FlagHelpers: { FlagHelpers },
        PostFlags: { PostFlags },
        PostVotes: { PostVotes }
    },
    Moderators: {
        HandleFlags: { ModHandleFlags },
        PostLocks: { PostLocks },
        UserModActions: { UserModActions }
    },
    Utilities: {
        General: { General },
        UserInfo: { UserInfo }
    },
    Formatters: { TextFormatting }
};
//# sourceMappingURL=index.js.map
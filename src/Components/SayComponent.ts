import {Component} from "../Component";
import {GuildMember, Message, MessageReaction, User, VoiceState} from "discord.js";
import {ComponentCommands} from "../Constants/ComponentCommands";
import {isAdmin} from "../HelperFunctions";
import {ComponentNames} from "../Constants/ComponentNames";

interface SayComponentSave {}
export class SayComponent extends Component<SayComponentSave> {

    name: ComponentNames = ComponentNames.SAY;

    async onMessageCreateWithGuildPrefix(args: string[], message: Message): Promise<void> {
        const command = args?.shift()?.toLowerCase() || '';
        if (command === ComponentCommands.SAY) {
            await this.sayCmd(args, message);
        }
    }

    async sayCmd(args: string[], message: Message) {
        const sayMessage:string  = args.join(" ");
        const userId = `<@${message.author.id}>`;
        const deniedMsgs = [
            `Sorry ${userId}, there\'s a 5% chance i\'ll actually say that.`,
            'Reh',
            ':RioluUgh:767528910065762315',
            `I\'m gonna send you to the ranch, ${userId}`,
            `You have no power over me, ${userId}`,
            `I\'m not gonna say that ${userId}...`,
            `Why should I say ${sayMessage}?`,
            `${sayMessage}???????`,
            `${args.reverse().join(" ")}`,
            `${sayMessage.toUpperCase().substring(0, Math.round(sayMessage.length / 2))}-`];
        if (!isAdmin(message) && Math.random() < .95) {
            await message.channel.send(deniedMsgs[Math.round(Math.random() * deniedMsgs.length)]);
            return;
        }
        // makes the bot say something and delete the message. As an example, it's open to anyone to use.
        // To get the "message" itself we join the `args` back into a string with spaces:

        // And we get the bot to say the thing:
        await message.channel.send(sayMessage.length ? sayMessage : `You didn't say anything! >:(`);
        await message.delete();
    }

    async getSaveData(): Promise<SayComponentSave> {
        return {};
    }

    async afterLoadJSON(loadedObject: SayComponentSave | undefined): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onReady(): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onGuildMemberAdd(member: GuildMember): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onMessageCreate(args: string[], message: Message): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onMessageReactionAdd(messageReaction: MessageReaction, user: User): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onMessageReactionRemove(messageReaction: MessageReaction, user: User): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onMessageUpdate(oldMessage: Message, newMessage: Message): Promise<void> {
        return Promise.resolve(undefined);
    }

    async onVoiceStateUpdate(oldState: VoiceState, newState: VoiceState): Promise<void> {
        return Promise.resolve(undefined);
    }
}

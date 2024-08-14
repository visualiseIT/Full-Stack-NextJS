import {mutation, query} from "./_generated/server";
import {ConvexError, v} from "convex/values";


export const getNotes = query({
    async handler(ctx){

        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            return [];
        }
        const userId = identity.subject;

        const notes = await ctx.db.query("notes")
            .withIndex("by_user", (q) => q.eq("user", userId))
            .collect();
        return notes;
    }
})

export const createNote = mutation({
    args: { text: v.string() },
    handler: async (ctx, args) => {

        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError("User not authenticated");
        }
        const userId = identity.subject;

        // console.log(userId)
        // console.info(identity)

        const newNoteId = await ctx.db.insert("notes", {
            text: args.text,
            user: userId
        });
        return newNoteId;
    },
})

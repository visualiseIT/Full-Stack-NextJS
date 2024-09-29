import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    notes: defineTable({
        title: v.optional(v.string()),
        archived: v.optional(v.boolean()),
        color: v.optional(v.string()),
        text: v.string(),
        user: v.string(),
    })
        .index("by_user", ["user"]),
});

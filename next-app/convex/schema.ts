import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    notes: defineTable({
        text: v.string(),
        user: v.string(),
    })
        .index("by_user", ["user"]),
});

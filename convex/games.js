import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    players: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("games", {
      name: args.name,
      players: args.players,
      createdAt: Date.now(),
    });
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("games").order("desc").collect();
  },
});

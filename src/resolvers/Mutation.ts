
import { Context } from "../utils";

export const Mutation = {
  createDraft(parent, { title, text }, context: Context, info) {
    return context.db.mutation.createPost({ data: { title, text } }, info);
  },
  deletePost(parent, { id }, context: Context, info) {
    return context.db.mutation.deletePost({ where: { id } }, info);
  },
  publish(parent, { id }, context: Context, info) {
    return context.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true }
      },
      info
    );
  }
};

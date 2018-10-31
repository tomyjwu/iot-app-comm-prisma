
import { Context } from '../utils'

export const Query = {
    // stepCount: () => 128,
    // runTime: () => 60,
    // walkTime: () => 5,
    // activeTimeDetails: () => (
    //   {
    //     runTimeSegments: [
    //       {startTime: 360, endTime: 420}, 
    //       {startTime: 900, endTime: 960}
    //     ],
    //     walkTimeSegments: [
    //       {startTime: 600, endTime: 860}, 
    //       {startTime: 1200, endTime: 1600}
    //     ]
    //   }
    // ),
    // location: () => (
    //   { // osaka
    //     longitude: "135.69296597528",
    //     latitude: "34.77103892591"
    //   }
    // ),
    feed(parent, args, context: Context, info) {
      return context.db.query.posts({ where: { isPublished: true } }, info)
    },
    drafts(parent, args, context: Context, info) {
      return context.db.query.posts({ where: { isPublished: false } }, info)
    },
    post(parent, { id }, context: Context, info) {
      return context.db.query.post({ where: { id: id } }, info)
    },
  }
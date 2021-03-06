"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Child",
    embedded: false
  },
  {
    name: "Meal",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Proportion",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();

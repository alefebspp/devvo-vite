module.exports = {
  ringstore: {
    output: {
      mode: "tags-split",
      target: "./src/services/ringstore.ts",
      client: "react-query",
      mock: true,
    },
    input: {
      target: "./ringstore.json",
    },
  },
};

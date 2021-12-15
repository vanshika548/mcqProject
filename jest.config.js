module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest"
   },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "vue",
    "js",
    "jsx",
    "json",
    "node"
  ]
}

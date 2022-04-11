import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

const pkg = require('./package.json')
const banner = `/*! ${pkg.name} - v${pkg.version} | Copyright 2022 - ${pkg.author} */\n`;

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      banner
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css']
    })
  ]
};
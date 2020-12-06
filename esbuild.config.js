require("esbuild").build({
  entryPoints: ["src/index.jsx"],
  outfile: "dist/bundle.js",
  bundle: true,
  minify: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});

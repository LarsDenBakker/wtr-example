import esBuildPlugin from "@web/dev-server-esbuild";

export default {
  devServer: {
    plugins: [esBuildPlugin({ ts: true })],
  },
};

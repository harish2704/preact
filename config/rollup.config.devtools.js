import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	entry: 'devtools/index.js',
	external: ['preact'],
	format: 'umd',
	globals: {
		preact: 'preact'
	},
	moduleName: 'preactDevTools',
	plugins: [
		babel({
			sourceMap: true,
			exclude: 'node_modules/**'
		})
	]
}

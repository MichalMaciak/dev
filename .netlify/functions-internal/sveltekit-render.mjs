import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","manifest.json","wallpaper.jpg","wallpaper800x600.jpg"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2df9c89b.js","imports":["_app/immutable/entry/start.2df9c89b.js","_app/immutable/chunks/index.2668702a.js","_app/immutable/chunks/singletons.78b8f062.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3e130e00.js","imports":["_app/immutable/entry/app.3e130e00.js","_app/immutable/chunks/index.2668702a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});

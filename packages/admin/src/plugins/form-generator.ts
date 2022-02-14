import { Plugin } from 'vite'

export function FormGenerator (path: string = '/forms'): Plugin | undefined {
  if (path === '') return
  return {
    name: 'form-generator',
    enforce: 'pre',
    configureServer: async ({ middlewares }) => {
      middlewares.use(async (req, res, next) => {
        // if (!req.url?.startsWith('/cl-form')) {
        //   next()
        //   return
        // }
        console.log(req)
        next()
      })
    }
  }
}

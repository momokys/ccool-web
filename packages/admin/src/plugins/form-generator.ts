import { Plugin } from 'vite'
import { IncomingMessage } from 'http'
import fs from 'fs'

export function FormGenerator (dir: string = '/src/forms'): Plugin | undefined {
  return {
    name: 'form-generator',
    enforce: 'pre',
    configureServer: async ({ middlewares }) => {
      middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/cl-form')) {
          next()
          return
        }
        const data = await parseReq(req)
        const targetDir = process.cwd() + dir
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir)
        }
        const filePath = targetDir + '/' + (data.fileName as string) + '.vue'
        if (fs.existsSync(filePath)) {
          res.end(JSON.stringify({
            code: 40001,
            msg: '文件已存在'
          }))
          return
        }
        fs.writeFile(filePath, data.code, err => {
          if (err) {
            res.end(JSON.stringify({
              code: 50001,
              msg: err?.message
            }))
            console.error(err)
          }
          res.end(JSON.stringify({
            code: 20000,
            msg: '代码文件生成成功'
          }))
        })
      })
    }
  }
}

function parseReq (req: IncomingMessage) {
  return new Promise<any>(resolve => {
    let body = ''
    req.on('data', chunk => {
      body += chunk
    })
    req.on('end', () => {
      let data = {}
      try {
        data = JSON.parse(body)
      } finally {
        resolve(data)
      }
    })
  })
}

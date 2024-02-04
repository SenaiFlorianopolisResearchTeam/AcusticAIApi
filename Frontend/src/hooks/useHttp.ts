import http, { ClientRequest, IncomingMessage } from "http"
import { useEffect, useState } from "react"

type method = 'get' | 'post' | 'delete' | 'put'

type options = {
  method: method,
  body?: JSON
}

const useHttp = (url: string, options: options) => {
  const [data, setData]  = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    setLoading(true)

    const req: any = http.request(url, {method: options.method}, (res: IncomingMessage) => {
      const chunks: Uint8Array[] = []

      res.on('data', (chunk: Uint8Array) => {
        chunks.push(chunk)
      })

      res.on('end', () => {
        const responseData = Buffer.concat(chunks)
        setData(responseData.toString())
        setLoading(false)
      })
    })

    req.on('error', (err: Error) => {
      setError(err)
      setLoading(false)
    })

    if (options.body) {
      req.write(JSON.stringify(options.body))
    }

    return () => {
      req.destroy()
    }
    
  }, [url, options.method, options.body])

  return {data, loading, error}
}

export default useHttp

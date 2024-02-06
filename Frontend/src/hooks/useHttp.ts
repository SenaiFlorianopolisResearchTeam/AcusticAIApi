import http, { ClientRequest, IncomingMessage } from "http";
import { useEffect, useState } from "react";

type HttpMethod = 'get' | 'post' | 'delete' | 'put';

interface RequestOptions {
  method: HttpMethod;
  body?: Record<string, any>;
}

const useHttp = (url: string, options: RequestOptions) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  const urlRegex: RegExp = /^(https?:\/\/)?([\w.-]+)(:\d+)?(\/.*)?$/;
  const matches: RegExpMatchArray | null = url.match(urlRegex);

  if (!matches) {
    throw new Error('invalid URL');
  }

  const [, , hostname, port, path] = matches;
  const extractedPort = port ? port.slice(1) : null;
  
  useEffect(() => {
    setLoading(true);

    const postData = JSON.stringify(options.body);

    const requestOptions = {
      hostname: hostname,
      port: extractedPort,
      path: path,
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req: ClientRequest = http.request(requestOptions, (res: IncomingMessage) => {
      const chunks: Uint8Array[] = [];

      res.on('data', (chunk: Uint8Array) => {
        chunks.push(chunk);
      });

      res.on('end', () => {
        const responseData = Buffer.concat(chunks);
        setData(responseData.toString());
        setLoading(false);
      });
    });

    req.on('error', (err: Error) => {
      setError(err);
      setLoading(false);
    });

    if (options.body) {
      req.write(postData);
    }

    req.end();

    return () => {
      req.destroy();
    }
    
  }, [url, options.method, options.body, extractedPort, path, hostname]);

  return { data, loading, error };
}

export default useHttp;
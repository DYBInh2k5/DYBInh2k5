// Global type declarations for Node.js environment
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_TOKEN?: string;
      NODE_ENV?: 'development' | 'production' | 'test';
    }
    
    interface Process {
      env: ProcessEnv;
      argv: string[];
    }
  }
  
  var process: NodeJS.Process;
  var console: Console;
}

// Module declarations for dependencies
declare module 'axios' {
  interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
  }
  
  interface AxiosRequestConfig {
    headers?: any;
    [key: string]: any;
  }
  
  const axios: {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    [key: string]: any;
  };
  
  export default axios;
}

declare module 'dotenv' {
  export function config(): void;
}

declare module 'fs' {
  export function readFileSync(path: string, encoding?: string): string | Buffer;
  export function writeFileSync(path: string, data: string | Buffer): void;
}

export {};

export const protocol = 'http://';
export const localhost = 'localhost';
export const targetPort = '8080';
export const host = '192.168.64.2';
export const serviceName = 'busybox-backend-service';
export const nodePort = '32500';
export const apiPath = '/busyBox/api/v1';


// export const originalUrl = protocol + host + ':' + nodePort + apiPath;
export const originalUrl = protocol + serviceName + ':' + targetPort + apiPath;

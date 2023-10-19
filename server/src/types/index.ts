export interface IUser {
     firstname: string;
     lastname: string;
     email: string;
     password?: string;
}

export interface IError {
     message: string;
     statusCode: number;
     isOperational?: boolean;
     stack?: string;
}

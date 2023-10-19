interface ENV {
   PORT: number | undefined;
   MONGO_URL: string | undefined;
   JWT_SECRET_KEY: string | undefined;
   JWT_EXPIRATION: string | undefined;
}

interface Config {
   PORT: number;
   MONGO_URL: string;
   JWT_SECRET_KEY: string;
   JWT_EXPIRATION: string;
}

const getConfig = (): ENV => {
   return {
      PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
      MONGO_URL: process.env.MONGO_URL,
      JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
      JWT_EXPIRATION: process.env.JWT_EXPIRATION,
   };
};

const getSanitizedConfig = (config: ENV): Config => {
   for (const [key, value] of Object.entries(config)) {
      if (value === undefined) {
         throw new Error(`Missing key ${key} in config.env`);
      }
   }
   return config as Config;
};

const config: ENV = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;

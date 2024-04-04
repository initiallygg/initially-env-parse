**initially-env-parser**

initially-env-parser is a Node.js library for parsing environment configuration files.

**Installation**
You can install initially-env-parser via npm:

```bash
npm install initially-env-parser
```
**Usage**
```typescript

import { parseEnvFile } from 'initially-env-parser';

const env = parseEnvFile();
console.log(env);
```
**Features**
Parses environment configuration files.
Supports separation of configurations into sections (e.g., Production, Dev).
API
parseEnvFile()
Returns: Environment
Parses the .env file in the current working directory and returns the environment configurations as an object.



Example .env file
```plaintext

## Production
DB_HOST=production-db.example.com
DB_PORT=5432

## Dev
DB_HOST=localhost
DB_PORT=3306
License
This project is licensed under the MIT License.
```

// envParser.d.ts

// Import the Section type from types/environment.d.ts
import { Section } from '../types/environment';

// Declare the Section type for external usage
export { Section };

// Declare the parseEnvFile function signature
export declare function parseEnvFile(): Environment;

// Declare the Environment interface
export interface Environment {
    [key: string]: any;
}

import * as fs from 'fs';
import * as path from 'path';

type Environment = { [key: string]: { [key: string]: string } };
type Section = 'Production' | 'Dev';

export function parseEnvFile(): Environment {
    const filePath = path.resolve(process.cwd(), '.env');
    const data = fs.readFileSync(filePath, 'utf8');
    const env: Environment = {};
    let currentSection: Section | null = null;

    data.split('\n').forEach(line => {
        if (line.startsWith('##')) {
            const sectionHeader = line.substring(2).trim();
            // Check if the section header is a valid section
            if (sectionHeader as Section) {
                currentSection = sectionHeader as Section;
                // Initialize the section in env if it doesn't exist.
                env[currentSection] = env[currentSection] || {};
            }
        } else {
            const trimmedLine = line.trim();
            if (trimmedLine && currentSection) {
                const [key, value] = trimmedLine.split('=');
                if (key && value) {
                    // Add the key-value pair to the current section in env.
                    env[currentSection][key.trim()] = value.trim();
                }
            }
        }
    });

    return env;
}
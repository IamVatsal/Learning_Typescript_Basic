import { Command } from 'commander';
import { readFile } from 'fs/promises';

const program = new Command();

program
    .option('-p, --path <path>', 'Specify the path to the file')
    .option(
        '--top, --top <number>',
        'Specify the number of top entries to display',
        parseInt
    )
    .option('--ignoreStopwords', 'Ignore stop words in the analysis'); // "the," "and" and "is

program.parse(process.argv);

const options = program.opts();

if (!options.path) {
    console.error('Please specify a file path using -p or --path option.');
    process.exit(1);
}

const filePath: string = options.path;
const topEntries: number = options.top || 10;
const ignoreStopwords: boolean = options.ignoreStopwords || false;

readFile(filePath, 'utf8')
    .then((data: string) => {
        const words = data.split(/\s+/).filter((word) => word.length > 0);

        const wordCount: Record<string, number> = {};
        const stopwords = new Set([
            'the',
            'and',
            'is',
            'in',
            'to',
            'a',
            'of',
            'that',
            'it',
            'with',
            'for',
            'on',
            'as',
            'was',
            'at',
            'by',
            'an',
            'this',
            'be',
            'are',
        ]);

        words.forEach((word) => {
            const lowerWord = word.toLowerCase();
            if (!ignoreStopwords || !stopwords.has(lowerWord)) {
                wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
            }
        });
        const sortedEntries = Object.entries(wordCount).sort(
            (a, b) => b[1] - a[1]
        );
        const topWords = sortedEntries.slice(0, topEntries);
        console.log(`Top ${topEntries} words:`);
        topWords.forEach(([word, count]) => {
            console.log(`${word}: ${count}`);
        });
    })
    .catch((err: Error) => {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    });

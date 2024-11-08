export const ignoreItems = [
    // Default template items
    { value: '.cmrrc.json', template: ['default'] },
    { value: 'node_modules/', template: ['default', 'node'] },
    { value: 'dist/', template: ['default', 'build'] },
    { value: '.env', template: ['default', 'node'] },
    {
        value: '.DS_Store',
        template: ['default', 'os'],
        comment:
            'Avoid your project being littered with annoying .DS_Store files!',
    },
    { value: 'coverage/', template: ['default', 'test'] },

    // Node.js specific files
    { value: 'bower_components/', template: ['node'] },
    { value: '.cache/', template: ['node', 'build'] },
    { value: 'npm-debug.log*', template: ['node', 'log'] },
    { value: 'yarn-debug.log*', template: ['node', 'log'] },
    { value: 'yarn-error.log*', template: ['node', 'log'] },
    { value: 'pnpm-debug.log*', template: ['node', 'log'] },

    // OS-specific files
    { value: 'Thumbs.db', template: ['os'] },
    { value: 'Desktop.ini', template: ['os'] },
    { value: '.AppleDouble', template: ['os'] },
    { value: '.Trashes', template: ['os'] },
    { value: '.fseventsd', template: ['os'] },

    // IDE and Editor files
    { value: '.vscode/', template: ['ide'] },
    { value: '.idea/', template: ['ide'] },
    { value: '*.sublime-workspace', template: ['ide'] },
    { value: '*.sublime-project', template: ['ide'] },
    { value: '.history/', template: ['ide'] },
    { value: '.project', template: ['ide'] },
    { value: '.classpath', template: ['ide'] },
    {
        value: '.prettierignore',
        template: ['ide'],
        comment: 'Prettier configuration ignore file',
    },

    // Testing and coverage files
    {
        value: '.nyc_output/',
        template: ['test'],
        comment: 'NYC test coverage output',
    },

    // Backup and temporary files
    { value: '*.tmp', template: ['backup'], comment: 'Temporary files' },
    { value: '*.bak', template: ['backup'], comment: 'Backup files' },
    {
        value: '~$*',
        template: ['backup'],
        comment: 'Temporary editor or system files',
    },

    // Build and compiled files
    { value: 'build/', template: ['build'], comment: 'Build directory' },
    { value: '*.o', template: ['build'], comment: 'Compiled object files' },
    { value: '*.out', template: ['build'], comment: 'Compiled output files' },
    {
        value: '*.class',
        template: ['build'],
        comment: 'Java compiled class files',
    },

    // Framework-specific files
    {
        value: '.next/',
        template: ['framework'],
        comment: 'Next.js build output',
    },
    {
        value: '.nuxt/',
        template: ['framework'],
        comment: 'Nuxt.js build output',
    },
    {
        value: '.parcel-cache/',
        template: ['framework'],
        comment: 'Parcel cache directory',
    },
    {
        value: '.webpack/',
        template: ['framework'],
        comment: 'Webpack build output',
    },
    {
        value: '.serverless/',
        template: ['framework'],
        comment: 'Serverless framework build output',
    },

    // Language-specific files (Python, Rust)
    {
        value: '__pycache__/',
        template: ['framework', 'python'],
        comment: 'Python cache files',
    },
    {
        value: '*.py[cod]',
        template: ['framework', 'python'],
        comment: 'Compiled Python files',
    },
    {
        value: 'target/',
        template: ['framework', 'rust'],
        comment: 'Rust build output',
    },

    // Databases and storage files
    {
        value: '*.sqlite3',
        template: ['database'],
        comment: 'SQLite database files',
    },
    {
        value: '*.db',
        template: ['database'],
        comment: 'Generic database files',
    },
    {
        value: 'dump.rdb',
        template: ['database'],
        comment: 'Redis database dump file',
    },

    // Design files
    {
        value: '*.sketch',
        template: ['design'],
        comment: 'Avoid accidental upload of Sketch files',
    },
    {
        value: '*.fig',
        template: ['design'],
        comment: 'Avoid accidental upload of Figma files',
    },
    {
        value: '*.xd',
        template: ['design'],
        comment: 'Avoid accidental upload of Adobe XD files',
    },
];

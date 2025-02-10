import fs from 'fs';
import path from 'path';

const docsDir = path.resolve(__dirname, '../docs');
const sidebar = {};
const nav = [];
const ignoredPaths = ['.vitepress', 'public','guide','dist'];

function generateSidebarItems(dirPath, baseDir = '') {
    const items = [];
    fs.readdirSync(dirPath).forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            items.push({
                text: file,
                items: generateSidebarItems(fullPath, `${baseDir}/${file}`)
            });
        } else if (file.endsWith('.md')) {
            const name = path.basename(file, '.md');
            items.push({
                text: name,
                link: `${baseDir}/${name}`,
                collapsed: true,
            });
        }
    });
    return items;
}

fs.readdirSync(docsDir).forEach((dir) => {
    const fullPath = path.join(docsDir, dir);
    if (fs.statSync(fullPath).isDirectory() && !ignoredPaths.includes(dir)) {
        const items = generateSidebarItems(fullPath, `/${dir}`);
        sidebar[`/${dir}/`] = [
            {
                text: dir,
                items,
                // collapsed:true
            }
        ];

        nav.push({
            text: dir,
            link: `/${dir}/`
        });
    }
});

console.log(nav, sidebar);

export default {
    nav,
    sidebar
};
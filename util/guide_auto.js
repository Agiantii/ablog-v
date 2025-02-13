import fs from 'fs';
import path from 'path';

const docsDir = path.resolve(__dirname, '../docs');
const sidebar = {};
const nav = [];
const navignoredPaths = ['.vitepress', 'public','guide','dist'];
const ignoredPaths = ['.vitepress','assets'];
function generateSidebarItems(dirPath, baseDir = '') {
    const items = [];
    fs.readdirSync(dirPath).forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory() && !ignoredPaths.includes(file)) {
            items.push({
                text: file,
                collapsed: true,
                items: generateSidebarItems(fullPath, `${baseDir}/${file}`)
            });
        } else if (file.endsWith('.md') && file !='index.md') {
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
    if (fs.statSync(fullPath).isDirectory() && !navignoredPaths.includes(dir)) {
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
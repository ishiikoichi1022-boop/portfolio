/**
 * Windowsでnext buildすると、先読み用のファイルが
 * about/ _next.about/__PAGE__.txtのようにフォルダに分かれて書き出される
 * Next.js 16.3.8~16.4.1が区切り文字の￥を考慮していないため
 * Mac・Linux では別れないので、何もしない。
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = "out";

function flatten(segmentDir) {
    const files = [];
    (function collect(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, entry.name);
            if (entry.isDirectory()) collect(p);
            else files.push(p);
        }
    })(segmentDir);

    for (const file of files) {
        const name = path.basename(segmentDir) + "." + path.relative(segmentDir, file).split(path.sep).join(".");
        fs.renameSync(file, path.join(path.dirname(segmentDir), name));
    }
    fs.rmSync(segmentDir, { recursive: true });
}

function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const p = path.join(dir, entry.name);
        if (entry.name.startsWith("__next.")) flatten(p);
        else walk(p);
    }
}

walk(OUT_DIR);
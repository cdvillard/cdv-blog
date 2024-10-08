---
title: There's no %20 in file-system naming!
pubDate: 2024-08-24T04:00:00.000Z
updatedDate: 2024-08-24T04:00:00.000Z
description: Ever wondered why programmers don't want space in their directory names?
draft: false
---

Over the last few years of my career, I've focused on front-end web development. I work a lot within file systems, but the code I typically write doesn't manipulate files. So when I hit a weird bug while refreshing my Node basics, I was reminded of a question from when I was learning to code: why do programmers seem to avoid adding spaces to their directory names?

During the "FS module" chapter of [Scott Moss' Introduction to Node v3](https://frontendmasters.com/courses/node-js-v3/) on Frontend Masters, Moss introduces his students to using the [fsPromises.readFile](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options) method to asynchronously read the project's `package.json` file. The code is pretty straightforward:

```javascript
/** bring in the promise version of fs */
import fs from 'node:fs/promises';

/** define readPackageJson */
const readPJson = async () => {
  /** 
   * get the path to the package.json, but create a URL 
   * because Node no longer has __dirName 
   * */
  const pJsonPath = new URL('package.json', import.meta.url).pathname;
  /** log the output of package.json */
  console.log(JSON.parse(await fs.readFile(pJsonPath, 'utf-8')));
}
/** run the code */
readPJson();
```

Scott runs the code on his machine. The output is a JSON object in his terminal. I ran it on my machine, and my output was this error:

```shell
# truncated the pathnames for privacy and readability
node:internal/process/promises:289
            triggerUncaughtException(err, true /* fromPromise */);
            ^

[Error: ENOENT: no such file or directory, open '/Users/.../Frontend%20Masters/intro-nodejs-v3/package.json'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/.../Frontend%20Masters/intro-nodejs-v3/package.json'
}

Node.js v20.11.0
```

This is odd, thought I. I've run all the other fs commands introduced so far, so why is this one failing? I did just upgrade my laptop's operating system. Sometimes, OS upgrades mean permissions changes. It wouldn't be the first time. Could it have something to do with that? Let me run a test script in the same file to see if it's some read permission issue.

```javascript
/** same promise-version of fs */
import fs from 'node:fs/promises';

/** 
 * this time, log all the files in the same directory
 * from which this command is run
 */
console.log(await fs.readdir('./', (err, files) => {
  console.log(files || err);
}));
```

The resulting output was an array of the filenames I expected to be in the directory I ran the code from. So it was unlikely a permissions problem. Now, I admit, I shortcut solving this bug using CoPilot, but keen-eyed readers might have caught the bug in my code already, especially if they noticed the detail in the title. Let's look at the path in the error one more time.

```shell
{
  ...
  path: '/Users/.../Frontend%20Masters/intro-nodejs-v3/package.json'
}
```

That `%20` in the pathname represents a UTF-8 encoded space character. If we look at another command-line tool that can read pathnames, `pwd`which returns the path of the directory the user is currently in, the output looks a little different.

```powershell
# truncated the pathname for privacy and readability
$ pwd
  /Users/.../Frontend Masters/intro-nodejs-v3
```

That space makes all the difference. Renaming the `Frontend Masters` folder to something like `frontend-masters` fixed the issue.\
\
The workaround for issues like this is decoding the pathname string. I could see this being common practice, used as a precaution to avoid the headache of dealing with pathnames, but I don't write enough backend code dealing with file systems to know for sure.

```javascript
import fs from 'node:fs/promises';

const readPJson = async () => {
  const pJsonPath = new URL('package.json', import.meta.url).pathname;
  /** Yay, no need to worry about spaces with this line! */
  const decodedPath = decodeURIComponent(pJsonPath);
  console.log(JSON.parse(await fs.readFile(decodedPath, 'utf-8')));
}

readPJson();
```

\
So, yeah, big revelation: encoding and decoding special characters can make reading files finicky. It's no surprise developers deal with this kind of thing at work every day. Imagine working around these problems at the scale of large applications like word processors or digital asset management software. No wonder developers do whatever they can to avoid inconveniences like character decoding.

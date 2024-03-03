# fix-hydration

It is a simple package to tackle hydration error in Next.js.

## Context

if you ever worked on working with next.js definitely encountered  hydration error. 
if can be fixed by simple code like -


```bash
 const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
```
And but obviously you have to dig in your codebase and find which component is giving hydration error and just paste this code on top of it , it will be fixed. But writing this become repitative task so you can use this package.

## How to use

```bash
npm i fix-hydration
```

```bash
import useFixHydration from "fix-hydration"


const componentinwhichHydrationerroristhere = () => {

const hasMounted=useFixHydration()

if(!hasMounted){
 return null
}

}

```

## Published By

[faisal husain](https://github.com/faisal004) 
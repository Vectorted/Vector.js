import {
    $java
} from '@vector-api';

export default async function ClassLoader(jar: string, className: string): Promise {
    await $java.loadJar(jar);
    return $java.findClass(className);
}
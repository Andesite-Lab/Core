import type { Readable } from 'stream';

export interface Blob {
    stream: Readable;
}
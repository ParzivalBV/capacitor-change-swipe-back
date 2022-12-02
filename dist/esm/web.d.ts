import { WebPlugin } from '@capacitor/core';
import type { SwipeEditPlugin } from './definitions';
export declare class SwipeEditWeb extends WebPlugin implements SwipeEditPlugin {
    enable(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    disable(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

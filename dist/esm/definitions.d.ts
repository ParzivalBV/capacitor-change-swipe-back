export interface SwipeEditPlugin {
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

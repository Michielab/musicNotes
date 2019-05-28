declare module 'waaclock'

declare global {
    interface Window { AudioContext: any;  webkitAudioContext: any}
}

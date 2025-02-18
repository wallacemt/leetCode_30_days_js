
class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(callback);

        return {
            unsubscribe: () => {
                const callbacks = this.events.get(event);
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        };
    }

    emit(event, args = []) {
        if (!this.events.has(event)) return [];
        return this.events.get(event).map(callback => callback(...args));
    }
}

class RateLimitQueue {
    constructor(maxRequests, interval) {
        this.maxRequests = maxRequests;
        this.interval = interval;
        this.queue = [];
        this.timer = null;
        this.requestCount = 0;
    }

    add(requestFunction) {
        return new Promise((resolve, reject) => {
            const task = { requestFunction, resolve, reject };
            this.queue.push(task);
            this.dequeue();
        });
    }

    dequeue() {
        if (this.timer === null) {
            this.timer = setInterval(() => {
                this.requestCount = 0;
                this.executeQueue();
            }, this.interval);
        }

        if (this.requestCount < this.maxRequests) {
            this.executeQueue();
        }
    }

    executeQueue() {
        if (this.queue.length === 0 || this.requestCount >= this.maxRequests) {
            return;
        }

        const task = this.queue.shift();
        this.requestCount++;

        task.requestFunction()
            .then((result) => task.resolve(result))
            .catch((error) => task.reject(error));
    }
}

export default RateLimitQueue;

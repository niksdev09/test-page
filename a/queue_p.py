class Queue:
    def __init__(self):
        self.queue = []

    def add(self, item, priority):
        self.queue.append((item, priority))
        self.queue = sorted(self.queue, key=lambda x:x[1], reverse=True)

    def get(self):
        if not self.is_empty():
            return self.queue.pop(0)[0]
        else:
            return None

    def is_empty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)

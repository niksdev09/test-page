class Queue:
    def __init__(self):
        self.queue = []

    def add(self, value):
        self.queue.append(value)

    def get(self):
        if not self.is_empty():
            first = self.queue[0]
            self.queue.remove(first)
            return first
        else:
            raise BaseException('Empty Queue')

    def is_empty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)

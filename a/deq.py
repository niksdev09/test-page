class Deque:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return len(self.items) == 0

    def append(self, item):
        self.items.append(item)

    def prepend(self, item):
        self.items.insert(0,item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None

    def pop_left(self):
        if not self.is_empty():
            return self.items.pop(0)
        return None

    def size(self):
        return len(self.items)
